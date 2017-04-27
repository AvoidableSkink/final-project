from __future__ import unicode_literals
import time

from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=200)
    notes = models.TextField()
    createdAt = models.DateTimeField('date published')
    def __str__(self):
        return self.notes