from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Person
from .forms import PostForm
from django.shortcuts import redirect
from django.utils import timezone

class List(TemplateView):
    template_name = "index.html"

    def get(self, request):
        all_person = Person.objects.all();

        ctx = {
            "all_person": all_person
        }

        return render(request, self.template_name, ctx)



def post(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect('/')
    else:
        form = PostForm()
    return render(request, 'post_edit.html', {'form': form})
