const InputField = (props) => {
  const {
    id,
    errorMessage,
    className,
    label,
    onchange,
    validationMessages,
    ...input
  } = props

  return (
    <>
      <label className="form_label" htmlFor={label}>
        {label}
      </label>
      <input
        className={className}
        onChange={onchange}
        {...input}
      />
      <div>
        {/* {validationMessages.length > 0 && <span>Validation Summary</span>} */}
        <ul>
          {validationMessages.map((vm) => (
            <li key={vm}className="error">{vm}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default InputField
