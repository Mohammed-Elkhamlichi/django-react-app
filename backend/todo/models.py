from django.db import models

# Create your models here.


class Todo(models.Model):
    body = models.TextField(blank=True, null=True)
    completed = models.BooleanField(default=False, blank=True, null=True)
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)
    created = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return str(self.body)
