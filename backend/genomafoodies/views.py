from django.shortcuts import render
from rest_framework import viewsets
from .serializers import GenomafoodiesSerializer
from .models import Genomafoodies

# Create your views here.


class GenomafoodiesView(viewsets.ModelViewSet):
    serializer_class = GenomafoodiesSerializer
    queryset = Genomafoodies.objects.all()
