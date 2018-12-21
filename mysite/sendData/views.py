from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Person


class List(TemplateView):
    template_name = "person_list.html"

    def get(self, request):
        all_person = Person.objects.all();

        ctx = {
            "all_person": all_person
        }

        return render(request, self.template_name, ctx)
