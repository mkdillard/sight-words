import React from 'react';
import './Menu.css';

const MenuButton = ({name, description, cb}) => (
  <div className='menu-button' onClick={() => cb(name.toLowerCase())}>
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
);

export default MenuButton;
