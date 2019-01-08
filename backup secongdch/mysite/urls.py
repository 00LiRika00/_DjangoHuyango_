
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from photos.views import photo_list

urlpatterns = [
    path('', include('sendIndexHtml.urls')),
    path('', include('sendData.urls')),
    path('', include('registration.urls')),
    path('admin/', admin.site.urls),
    path('', photo_list, name='photo_list')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
