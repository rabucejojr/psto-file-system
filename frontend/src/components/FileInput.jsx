import React from 'react'

const FileInput = (props) => {
  const handleChange = (event) => {
    const files = event.target.files
    // do something with the selected files
  }
  return (
    <>
      <input type='file' onChange={handleChange} multiple={props.multiple} />
    </>
  )
}

export default FileInput
