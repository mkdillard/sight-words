import React from 'react';
import './Button.css';

const Button = ({name, description, cb}) => {

  return (
    <div className='menu-button' onClick={() => cb(name.toLowerCase())}>
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
  );
}

export default Button;
