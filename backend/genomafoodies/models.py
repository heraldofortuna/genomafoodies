from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.


class Genomafoodies(models.Model):
    title = models.CharField(max_length=50)
    ubication = models.TextField()
    food_type = models.TextField()
    score = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(5)])
    visited = models.BooleanField(default=False)

    def _str_(self):
        return self.title
