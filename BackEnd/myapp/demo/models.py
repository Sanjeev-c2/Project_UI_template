from django.db import models
from django.contrib.auth.models import User

# class User(models.Model):
#     username = models.CharField(max_length=100)
#     password = models.CharField(max_length=100)

#     def __str__(self):
#         return self.username
    

class UserPermission(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=100)  # Role as a CharField
    can_create = models.BooleanField(default=False)
    can_read = models.BooleanField(default=False)
    can_update = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.user.username} - {self.role}"
    

class SampleForm(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)
    date = models.DateField()
    age = models.IntegerField()

    def ___str___(self):
        return self.name