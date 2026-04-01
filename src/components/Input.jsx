import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import './Input.css';

const Input = ({ label, type = 'text', placeholder, id, name, value, onChange, required, rightLink, error, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;
  const errorClass = error ? 'input-error' : '';

  return (
    <div className={`input-field ${errorClass}`.trim()}>
      <div className="input-labels">
        {label && <label htmlFor={id} className="label">{label}</label>}
        {rightLink && <a href={rightLink.href} className="right-link">{rightLink.text}</a>}
      </div>
      <div className="input-container">
        <input
          className={`input ${isPassword ? 'with-eye' : ''}`}
          id={id}
          type={inputType}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className="eye-toggle"
            onClick={() => setShowPassword(!showPassword)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {showPassword ? <IoEyeOffOutline size={18} /> : <IoEyeOutline size={18} />}
          </button>
        )}
      </div>
      {error && <span className="error-message">{error.message}</span>}
    </div>
  );
};

export default Input;