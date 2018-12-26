from django.urls import path

from .views import RegisterFormView
from .views import LoginFormView
from .views import LogoutView

urlpatterns = [
    path('reg/', RegisterFormView.as_view()),
    path('log/', LoginFormView.as_view()),
    path('logout/', LogoutView.as_view())
]
