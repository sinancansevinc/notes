from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from . import models, serializers

# Create your views here



class NoteViewSet(viewsets.ModelViewSet):
    queryset = models.Note.objects.all()
    serializer_class = serializers.NoteSerializer
    permission_classes = []
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return serializers.NoteRetrieveSerializer
        return serializers.NoteSerializer              