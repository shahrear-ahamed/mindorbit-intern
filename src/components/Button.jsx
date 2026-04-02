import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', // 'primary', 'outline', 'social'
  type = 'button',
  fullWidth = false,
  icon: Icon,
  disabled = false,
  ...props 
}) => {
  return (
    <button
      className={`btn btn-${variant} ${fullWidth ? 'btn-full' : ''}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && <span className="btn-icon"><Icon /></span>}
      {children}
    </button>
  );
};

export default Button;
