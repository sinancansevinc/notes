from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from . import models, serializers

# Create your views here

@api_view(['GET'])
def getRoutes(request):
    data = [
        {
        "name":"Sino",
        "age":24,
        }
    ]
    return Response(data)


class NoteViewSet(viewsets.ModelViewSet):
    queryset = models.Note.objects.all()
    serializer_class = serializers.NoteSerializer