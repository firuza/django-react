from django.shortcuts import render
from .models import ProjectInfo
from rest_framework import viewsets
from .serializers import ProjectInfoSerializer

# Create your views here.

class ProjectInfoViewSet(viewsets.ModelViewSet):
    queryset = ProjectInfo.objects.filter(show=True)
    serializer_class = ProjectInfoSerializer