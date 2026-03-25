import React, { useState } from 'react';
import './Input.css';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  id, 
  name, 
  value, 
  onChange, 
  error, 
  required = false, 
  icon: Icon,
  rightLink,
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="input-field">
      <div className="input-labels">
        {label && <label htmlFor={id} className="label">{label}</label>}
        {rightLink && (
          <a href={rightLink.href} className="right-link">
            {rightLink.text}
          </a>
        )}
      </div>
      
      <div className={`input-container ${error ? 'input-error' : ''}`}>
        {Icon && <span className="input-icon"><Icon /></span>}
        <input
          className={`input ${Icon ? 'with-icon' : ''} ${isPassword ? 'with-eye' : ''}`}
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
            onClick={togglePassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
        )}
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Input;
