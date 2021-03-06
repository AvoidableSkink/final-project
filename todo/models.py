from __future__ import unicode_literals
from datetime import datetime

from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=200)
    notes = models.TextField()
    createdAt = models.DateTimeField(default=datetime.now(), blank=True)
    def __str__(self):
        return self.title