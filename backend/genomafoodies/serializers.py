from rest_framework import serializers
from .models import Genomafoodies


class GenomafoodiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genomafoodies
        fields = ('id', 'title', 'ubication', 'food_type', 'score', 'visited')
