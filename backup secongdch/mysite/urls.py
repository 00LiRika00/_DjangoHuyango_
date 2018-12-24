
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('sendIndexHtml.urls')),
    path('sendData/', include('sendData.urls')),
    path('admin/', admin.site.urls),
]
