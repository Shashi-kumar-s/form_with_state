import React, { useState } from "react"
import InputField from "../component/inputField/InputField"
import "../Style/Form.css"
import TextArea from "../component/textArea/TextArea"
import FormButton from "../component/button/FormButton"
import { inputs } from "../utilities/inputDetails/InputDetails"

const Form = () => {
  const [data, setData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    age: "",
    phone: "",
    Address: "",
    Message: "",
    checkbox: "",
  })

  const [allData, setAllData] = useState([])
  const [validationMessages, setValidationMessages] = useState([])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    validateForm()
    setAllData(data)
    console.log(allData)
  }

  const validateForm = () => {
    const {
      firstName,
      middleName,
      lastName,
      email,
      age,
      phone,
    } = data

    setValidationMessages([])
    let messages = []
    if (!firstName) {
      messages.push("first name is required")
    }
    if (!middleName) {
      messages.push("middle name is required")
    }
    if (!lastName) {
      messages.push("middle name is required")
    }
    if (!email) {
      messages.push("email is invalid")
    }
    if (!age) {
      messages.push("age is required")
    }
    if (!phone) {
      messages.push("phone is required")
    }
    setValidationMessages(messages)
  }

  return (
    <div className="form_container">
      <form className="form_Box" onSubmit={handleAdd}>
        <h1>Form</h1>
        {inputs.map((input) => {
          return (
            <InputField
              key={input.id}
              {...input}
              value={data[input.name]}
              onchange={handleChange}
              className={"form_input"}
              validationMessages={validationMessages}
            />
          )
        })}
        <label htmlFor="role" className="form_label">
          Role
        </label>
        <select name="role" className="form_input" onChange={handleChange}>
          <option value="User">user</option>
          <option value="Admin">Admin</option>
        </select>
        <TextArea
          name={"Address"}
          row={"2"}
          cols={"2"}
          className={"form_TextArea"}
          onchange={handleChange}
          placeholder={"Address"}
          value={data.textarea}
        />
        <TextArea
          name={"Message"}
          row={"2"}
          cols={"2"}
          className={"form_TextArea"}
          onchange={handleChange}
          placeholder={"Message"}
          value={data.textarea}
        />
        <div className="form_terms_condition">
          <input type="checkbox" name="checkbox" className="form_checkbox" />
          <p>Terms & Condition</p>
        </div>
        <FormButton
          type={"submit"}
          value={"Submit"}
          className={"form_button"}
          onclick={handleAdd}
        />
      </form>
    </div>
  )
}

export default Form

//first name middle name, last name, email, age. address, role, phone. comment box, checkbox for term and condition,
