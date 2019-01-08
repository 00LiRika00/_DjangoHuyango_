from django.shortcuts import render
from .models import Photo

def photo_list(request):
    queryset = Photo.objects.all()
    context = {
        "photos": queryset,
    }
    return render(request, "index.html", context)
# Create your views here.
