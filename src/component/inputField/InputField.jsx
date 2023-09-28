const InputField = (props) => {
  const { id, className, label, onchange, errormsg, error, ...input } = props

  return (
    <>
      <label className="form_label" htmlFor={label}>
        {label}
      </label>
      <input className={className} onChange={onchange} {...input} />
      <span>{error ? <p className="error">{label} is required.</p> : ""}</span>
    </>
  )
}

export default InputField
