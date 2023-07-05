from django.urls import path
from . import views


urlpatterns = [   
    path('getFolderListAtDepth', views.getFolderListAtDepth, name='getFolderListAtDepth'),
    path('getFolderList',views.getFolderList,name="getFolderList")
]