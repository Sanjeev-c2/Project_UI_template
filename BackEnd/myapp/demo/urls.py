from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('permissions/', views.save_permissions, name='save_permissions'),
    path('permissions/<int:user_id>/', views.get_user_roles_and_permissions, name='get_user_permissions'),

    # List all SampleForm entries (GET)
    path('sample-forms/', views.sample_form_list, name='sample_form_list'),

    # Create a new SampleForm entry (POST)
    path('sample-forms/create/', views.sample_form_create, name='sample_form_create'),

    path('sample-forms/detail/<int:pk>/', views.sample_form_detail, name='sample_form_detail'),

    # Update a specific SampleForm entry (PUT)
    path('sample-forms/update/<int:pk>/', views.sample_form_update, name='sample_form_update'),
]