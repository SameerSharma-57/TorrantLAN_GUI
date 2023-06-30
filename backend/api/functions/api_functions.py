
'''
    Arguments: 
        path: the directory whose children we have to fetch

    Function: None

    Returns: Dictionary
        dic={'folders': [], 'files':[]}

'''
def folder_list(path:str)->dict:
    pass


'''Arguments: 
    path: Directory of file on IITJ Server

    Function: downloads the file on the user's device which is available on IITJ server on the given path 

    returns: None
'''
def download_files(path:str)->None:
    pass


'''
    Arguments: 
        paths: list of directories to be uploaded on IITJ server

    Function:
        upload file on IITJ server

    Return bool
        status of upload successful or unsuccessful
      
'''

def upload_files(paths: list)->bool:
    pass



'''
    Arguments: None

    function: None

    Returns: Progress of upload if any upload function is active else return -1;
'''
def progress()->float:
    pass


