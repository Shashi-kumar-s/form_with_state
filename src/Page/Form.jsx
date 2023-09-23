import React, { useState } from "react"
import InputField from "../component/inputField/InputField"
import "../Style/Form.css"
import TextArea from "../component/textArea/TextArea"
import FormButton from "../component/button/FormButton"

const Form = () => {
  const [data, setData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    age: "",
    address: "",
    phone: "",
    textarea: "",
    checkbox:""
  })

  const [allData, setAllData] = useState([])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleAdd = (e) => {
    e.preventDefault()
    setAllData(data)
    console.log(allData);
  }
 
  return (
    <form className="form_Box" onSubmit={handleAdd}>
        <h1>Form</h1>
      <InputField
        className={"form_input"}
        type={"text"}
        name={"firstName"}
        label={"First Name"}
        onchange={handleChange}
      />
      <InputField
        className={"form_input"}
        type={"text"}
        name={"middleName"}
        label={"middle Name"}
        onchange={handleChange}
      />
      <InputField
        className={"form_input"}
        type={"text"}
        name={"lastName"}
        label={"Last Name"}
        onchange={handleChange}
      />
      <InputField
        className={"form_input"}
        type={"email"}
        name={"email"}
        label={"Email"}
        onchange={handleChange}
      />
      <InputField
        className={"form_input"}
        type={"number"}
        name={"age"}
        label={"Age"}
        onchange={handleChange}
      />
      <InputField
        className={"form_input"}
        type={"text"}
        name={"address"}
        label={"Address"}
        onchange={handleChange}
      />
      <InputField
        className={"form_input"}
        type={"number"}
        name={"phone"}
        label={"Phone"}
        onchange={handleChange}
      />
      <TextArea
        name={"textarea"}
        row={"1"}
        cols={"1"}
        className={"form_TextArea"}
        onchange={handleChange}
      />
      <div className="form_terms_condition">
        <InputField type={"checkbox"} name={"checkbox"} className={"form_checkbox"} />
        <p>Terms & Condition</p>
      </div>
      <FormButton
        type={"submit"}
        value={"submit"}
        className={"form_button"}
        onclick={handleAdd}
      />
    </form>
  )
}

export default Form

//first name middle name, last name, email, age. address, role, phone. comment box, checkbox for term and condition,
