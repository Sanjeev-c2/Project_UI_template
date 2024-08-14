from rest_framework import serializers
from .models import User, UserPermission


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']


class UserPermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPermission
        fields = ['id', 'user', 'role', 'can_create', 'can_read', 'can_update']