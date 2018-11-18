import React from 'react';
import './Button.css';

const Button = ({name, description, active, cb, cbParam}) => {
  console.log('name:', name, 'active:', active)
  console.log(active ? `menu-button ${active}` : 'menu-button');
  return (
    <div className={(active ? `menu-button ${active}` : 'menu-button')} onClick={() => {return (cb ? cb(cbParam) : null) }}>
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
  );
}

export default Button;
