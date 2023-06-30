from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .functions.folderList import folderList
from django.http import HttpResponse
import json
import sys

sys.path.insert(0,'./api/TorrentLAN')
from .TorrentLAN import main
root_dir="D:/web_dev_projects/react_project/backend"

# Create your views here.
@api_view(['GET'])
def hi(request,slug):
    return Response(slug)



@api_view(['GET'])
def getFolderList(request,dir):

    if(dir=='test'):
        dic={'files':[], 'folders':[]}
        for i in range(20):
            dic['folders'].append(i)
        return HttpResponse(json.dumps(dic))

    temp=dir.split('%')

    dir=root_dir
    for i in range(1,len(temp)):
        dir+="/"+temp[i]

    
    
    
    entries = folderList(dir)
    dic={'files':[], 'folders':[]}
    
    for entry in entries:
        if('.' in entry):
            dic['files'].append(entry)
        else:
            dic['folders'].append(entry)

    

    return HttpResponse(json.dumps(dic))


@api_view(['GET'])
def getFolderListAtDepth(request,depth):
    dic=main.rows_at_depth(depth=depth)
    print(dic)
    return HttpResponse("Hi")

    
