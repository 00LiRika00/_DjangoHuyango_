from django.db import models

# Create your models here.
class Photo(models.Model):
    title = models.CharField(max_length=20)
    width = models.IntegerField(default=382)
    height = models.IntegerField(default=681)
    image = models.ImageField(null=False, blank=False, width_field="width", height_field="height")
    id = models.AutoField(primary_key=True)
    topic = models.CharField(max_length=20)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)

    def __unicode__(self):
        return self.title

    class Meta:
        ordering = ["-timestamp"]
