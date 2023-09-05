import React from 'react'

const Input = ({ id, label, value, setValue, type="text" }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input"
      />
    </div>
  )
}

export default Input