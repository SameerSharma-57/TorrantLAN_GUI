import React from "react";
import "./folderStylesheet.css";
import { useState } from 'react'
import { useEffect } from 'react'

import FolderItem from "./folder-item";

const FolderView = (props) => {



  const [dir,setDir] = useState("test")
  const [contentList, setContentList] = useState({ folders: [], files: [] });
  const [dir_text,setDirText] = useState("root")


  const getFolderList = async () => {
    let response = await fetch(`api/getEntries/${dir}`);
    let data = await response.json();
    setContentList(data);
    // console.log(data)
  };

  

  useEffect(() => {
    setDirText(()=>{
        return dir.replaceAll('%','/')
    });
    getFolderList();
    

  }, [dir]);

 
  
  const backButtonHandler =() =>{
   
    setDir((data)=>{
        if(data!='root'){
            const i=data.lastIndexOf('%')
            return data.slice(0,i)

        }
        return data
    })
  }

  

  return (
    <div className="main-container">
      <div className="viewport">
        <div className="navbar">
            <i className="fa-solid fa-arrow-left fa-2xl" onClick={backButtonHandler}></i>
            <div className="dir-text">
                {dir_text}
            </div>
        </div>
        {contentList['folders'].map((name, index) => (
          <FolderItem key={index} name={name} type="folder" handleClick={()=> setDir(dir=> dir+='%'+name)} />
        ))}

        {contentList['files'].map((name, index) => (
          <FolderItem key={index} name={name} type="file" handleClick={()=>1}/>
        ))}
      </div>
    </div>
  );
};

export default FolderView;
