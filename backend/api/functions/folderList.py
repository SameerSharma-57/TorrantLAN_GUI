import os

def folderList(dir):
    entries = os.listdir(dir)
    print()
    return entries


# print(folderList("D:\web_dev_projects\\react_project\\backend\\api\migrations"))