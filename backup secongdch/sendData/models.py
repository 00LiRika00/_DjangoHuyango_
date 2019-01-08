from django.db import models
from django.utils import timezone

class Person(models.Model):
        author = models.ForeignKey('auth.User', on_delete=models.CASCADE,default = 1)
        title = models.CharField(max_length=200, default = "")
        text = models.TextField(max_length=5000, default = "")
        created_date = models.DateTimeField(
                default=timezone.now)
        published_date = models.DateTimeField(
                blank=True, null=True)

        def __unicode__(self):
            return self.name



# Create your models here.
