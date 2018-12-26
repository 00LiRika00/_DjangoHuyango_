from django.urls import path

from .views import List

from . import views

urlpatterns = [
    path('', List.as_view(), name='list-view'),
    path('post', views.post, name = 'post')
]
