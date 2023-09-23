import React from 'react'

const InputField = (props) => {
  const{type,name,id,className,label,row,cols,onchange}=props
  return (
    <>
    <label className='form_label' htmlFor={label}>{label}</label>
    <input type={type} name={name} id={id} className={className} onChange={onchange}/>
    </>
  )
}

export default InputField