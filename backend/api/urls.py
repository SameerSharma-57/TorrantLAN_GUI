from django.urls import path
from . import views


urlpatterns = [
    
    path('getEntries/<str:dir>/',views.getFolderList),
    path('getEntries/depth/<int:depth>',views.getFolderListAtDepth)
]