import React, { useEffect, useState } from 'react'
import DragDrop from '../DragDrop/DragDrop'
import './uploadStyles.css'
const Upload = (props) => {
  
  const [path,setPath] = useState([])

  useEffect(()=>{
    console.log(path)
  })
  return (
    <div className='upload-container'>
      <DragDrop className='default' setter={setPath}/>
    </div>
  )
}

export default Upload
