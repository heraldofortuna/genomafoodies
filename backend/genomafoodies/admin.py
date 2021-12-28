from django.contrib import admin
from .models import Genomafoodies


class GenomafoodiesAdmin(admin.ModelAdmin):
    list_display = ('title', 'ubication', 'food_type', 'score', 'visited')


# Register your models here.
admin.site.register(Genomafoodies, GenomafoodiesAdmin)
