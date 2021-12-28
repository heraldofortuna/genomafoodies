from django.db import models

# Create your models here.


class Genomafoodies(models.Model):
    title = models.CharField(max_length=120)
    ubication = models.TextField()
    food_type = models.TextField()
    score = models.IntegerField()
    visited = models.BooleanField(default=False)

    def _str_(self):
        return self.title
