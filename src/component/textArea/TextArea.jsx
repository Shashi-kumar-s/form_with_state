import React from 'react'

const TextArea = (props) => {
    const{name,id,cols,row,className}=props
  return (
    <textarea name={name} id={id} cols={cols} rows={row} className={className}></textarea>
  )
}

export default TextArea