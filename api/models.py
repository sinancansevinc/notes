from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Note(models.Model):
    created_by = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length = 50)
    body = models.TextField(max_length=255,null=True,blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
        