import React from 'react'

const Select = ({id, label, value, setValue, options, valueKey = 'id', labelKey = 'name', placeholder = 'Select ...' }) => {

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className="form-select"
        value={value}
        onChange={handleChange}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.id} value={option[valueKey]}>
            {option[labelKey]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select