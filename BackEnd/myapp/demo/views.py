from rest_framework.decorators import api_view
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.response import Response
from rest_framework import status
from .models import User, UserPermission
from .serializers import UserSerializer, UserPermissionSerializer

@api_view(['POST'])
def signup(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)

    hashed_password = make_password(password)
    user = User.objects.create(username=username, password=hashed_password)
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    try:
        user = User.objects.get(username=username)
        if check_password(password, user.password):
            serializer = UserSerializer(user)
            user_permissions = UserPermission.objects.filter(user=user)
            permission_data = UserPermissionSerializer(user_permissions, many=True).data
            return Response({
                'user': serializer.data,
                'permissions': permission_data
            }, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
    except User.DoesNotExist:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def save_permissions(request):
    serializer = UserPermissionSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.validated_data['user']
        role = serializer.validated_data['role']
        can_create = serializer.validated_data['can_create']
        can_read = serializer.validated_data['can_read']
        can_update = serializer.validated_data['can_update']

        # Update or create the UserPermission entry
        user_permission, created = UserPermission.objects.update_or_create(
            user=user,
            role=role,
            defaults={
                'can_create': can_create,
                'can_read': can_read,
                'can_update': can_update,
            }
        )
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)