import React from "react";
import FolderIcon from '../../assets/icons/folder-icon.png'
import FileIcon from '../../assets/icons/file-icon.png'

const FolderItem = (props) => {

    
  return (
    <div className="folder-item">
      <button className="folder-div" onClick={props.handleClick}>

        <img src={props.type==="folder"?FolderIcon:FileIcon} alt="folder-icon" className="folder-icon" />
      </button>
     
      <span className="folder-name">{props.name}</span> 
    </div>
  );
};

export default FolderItem;
