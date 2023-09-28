import React from "react"
import { options } from "../../utilities/selectOptionDetails/SelectOptionDetails"

const SelectOption = (props) => {
  const { onchange } = props
  return (
    <>
      <label htmlFor="role" className="form_label">
        Role
      </label>
      <select
        name="role"
        className="form_input"
        onChange={onchange}
        defaultValue={"select"}
      >
        <option value="select" disabled="disabled">
          --select--
        </option>
        {options.map((option) => {
          return (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default SelectOption
