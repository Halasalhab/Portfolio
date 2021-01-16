from django.db import models

# Create your models here.
class Project(models.Model):
  title = models.CharField(max_length=120)
  tecn = models.TextField()
  description = models.TextField()
  img = models.TextField()
  deploylink = models.TextField()
  def _str_(self):
    return self.title