import React from 'react'

const TextArea = (props) => {
    const{name,id,cols,row,className,placeholder,value,onchange}=props
  return (
    <textarea name={name} id={id} cols={cols} rows={row} className={className}placeholder={placeholder} value={value} onChange={onchange}></textarea>
  )
}

export default TextArea