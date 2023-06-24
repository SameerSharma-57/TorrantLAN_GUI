from django.urls import path
from . import views

urlpatterns = [
    
    path('getEntries/<str:dir>/',views.getFolderList)
]