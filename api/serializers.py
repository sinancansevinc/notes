from django.contrib.auth.models import User
from rest_framework import serializers

from . import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Note
        fields='__all__'

class NoteRetrieveSerializer(NoteSerializer):
    created_by = UserSerializer()