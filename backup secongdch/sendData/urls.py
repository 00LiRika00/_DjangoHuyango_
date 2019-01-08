from django.urls import path

from .views import List
from .models import Person
from .forms import PostForm
from . import views

urlpatterns = [
    path('list', List.as_view(), name='list-view'),
    path('post', views.post, name = 'post'),
    #path('post', PostForm.as_view(queryset = PostForm.objects.all().order_by("id"), name = 'post_edit.html')),
]
