import React from 'react'

const FormButton = (props) => {
    const{value,className,type,onclick}=props
  return (
    <button type={type} className={className} onClick={onclick}>{value}</button>
  )
}

export default FormButton