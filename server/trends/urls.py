from django.urls import path

from . import views

urlpatterns = [
    path('trends/', views.TrendView.as_view()),
]
