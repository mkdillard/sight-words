import React from 'react';
import './Menu.css';

const Button = ({styleClass, name, description, cb, cbParam}) => (
  <div className={styleClass} onClick={() => cb(cbParam}>
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
);

export default Button;
