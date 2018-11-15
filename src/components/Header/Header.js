import React from 'react';
import './Header.css';

const Header = ({contentTypeCallback}) => (
  <div className='header'>
    <h3 className='menu-item' onClick={() => contentTypeCallback('menu')}> HOME </h3>
    <h4 className='menu-item' onClick={() => contentTypeCallback('words')}> WORDS </h4>
    <h4 className='menu-item' onClick={() => contentTypeCallback('learn')}> LEARN </h4>
    <h4 className='menu-item' onClick={() => contentTypeCallback('practice')}> PRACTICE </h4>
    <h4 className='menu-item' onClick={() => contentTypeCallback('test')}> TEST </h4>
  </div>
)

export default Header;
