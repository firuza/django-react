
from rest_framework import serializers
from backend.models import ProjectInfo

# project serializer

class ProjectInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProjectInfo
        fields = ['name','description','github','demo','image']