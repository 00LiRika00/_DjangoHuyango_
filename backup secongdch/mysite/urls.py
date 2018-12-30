
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('sendIndexHtml.urls')),
    path('', include('sendData.urls')),
    path('', include('registration.urls')),
    path('admin/', admin.site.urls),
]
