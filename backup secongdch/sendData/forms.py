from django import forms

from .models import Person

class PostForm(forms.ModelForm):

    class Meta:
        model = Person
        fields = ('title', 'text',)
        widgets = {
            'title': forms.TextInput(attrs={'placeholder': 'Заголовок'}),
            'text': forms.Textarea(attrs={'placeholder': 'Оставьте свой отзыв'}),
        }
