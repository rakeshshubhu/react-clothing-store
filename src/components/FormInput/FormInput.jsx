import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ onHandleChange, label, type, name, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      type={type}
      name={name}
      onChange={onHandleChange}
      required
    />
    {label && (
      <label
        className={(otherProps.value.length && "shrink") || "form-input-label"}
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
