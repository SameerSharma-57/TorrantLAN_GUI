

import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import '../DragDrop/DragDropStyles.css'

const MyDropzone=({setter})=> {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    if(acceptedFiles?.length){
      setter(prevPaths=>[
        ...prevPaths,
        ...acceptedFiles.map(file=>file.path)
      ])
    }
    
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps({className: 'dropzone'})}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default MyDropzone
