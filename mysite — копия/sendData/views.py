from django.http import HttpResponse


def data(request):
    return HttpResponse("<h1>Data is here<h1>")
