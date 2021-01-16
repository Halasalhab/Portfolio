from django.contrib import admin
from .models import Project
# Register your models here.
class ProjectAdmin(admin.ModelAdmin):  
  list_display = ('title', 'description', 'tecn','img','deploylink') 

# Register your models here.
admin.site.register(Project, ProjectAdmin) 