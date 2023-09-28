import React, { useState } from "react"
import InputField from "../component/inputField/InputField"
import "../Style/Form.css"
import TextArea from "../component/textArea/TextArea"
import FormButton from "../component/button/FormButton"
import { inputs } from "../utilities/inputDetails/InputDetails"
import SelectOption from "../component/selectOption/SelectOption"

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
    role: "",
  })

  const [errorData, setErrorData] = useState([])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const keys = Object.keys(data)
    for (let i = 0; i < keys.length; i++) {
      setTimeout(() => {
        handleOnBlur(keys[i])
      },1000);
    }
  }

  console.log(errorData,"------------------")

  const handleOnBlur = (e) => {
    // console.log("eeeeeeeeeeeeee", e)
    switch (e) {
      case "firstName":
        if (data.firstName.trim() === "") {
          console.log("fffffffffffirstname", e)
          setErrorData([...errorData, e])
        } else {
          setErrorData(errorData.filter((ele) => ele !== e))
        }
        break

      case "middleName":
        if (data.middleName.trim() === "") {
          setErrorData([...errorData, e])
          console.log("mmmmmmmmmmmiddlename")
        } else {
          setErrorData(errorData.filter((ele) => ele !== e))
        }
        break

      case "lastName":
        if (data.lastName.trim() === "") {
          setErrorData([...errorData, e])
          console.log("lllllllllllastname")
          console.log("fghsdfhd", e)
        } else {
          setErrorData(errorData.filter((ele) => ele !== e))
        }
        break

      case "email":
        if (data.email.trim() === "") {
          setErrorData([...errorData, e])
          console.log("eeeeeeeeeeeeemail")
        } else {
          setErrorData(errorData.filter((ele) => ele !== e))
        }
        break

      case "phone":
        if (data.phone.trim() === "") {
          setErrorData([...errorData, e])
          console.log("ppppppppppppppppphone")
        } else {
          setErrorData(errorData.filter((ele) => ele !== e))
        }
        break

      case "age":
        if (data.age.trim() === "") {
          setErrorData([...errorData, e])
          console.log("aaaaaaaage")
        } else {
          setErrorData(errorData.filter((ele) => ele !== e))
        }
        break

      case "role":
        if (data.role.trim() === "") {
          setErrorData([...errorData, e])
          console.log("rrrrrrrrole")
        } else {
          setErrorData(errorData.filter((ele) => ele !== e))
        }
        break

      default:
        e
        break
    }
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
              nam={input.name}
              onchange={handleChange}
              className={"form_input"}
              onBlur={() => handleOnBlur(input.name)}
              error={errorData.includes(input.name)}
              pattern={input.pattern}
            />
          )
        })}
        <SelectOption onchange={handleChange} />
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
