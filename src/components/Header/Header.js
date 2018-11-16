import React from 'react';
import './Header.css';

const Header = ({contentTypeCallback}) => (
  <div className='header'>
    <div className='logo' onClick={() => contentTypeCallback('home')} >
      <img src={require('../../resources/abc_logo.png')} alt={'abc_logo'}
           height={'45'} width={'45'}
      />
    </div>
    <h3 className='menu-item' onClick={() => contentTypeCallback('home')}> HOME </h3>
    <h4 className='menu-item' onClick={() => contentTypeCallback('words')}> WORDS </h4>
    <h4 className='menu-item' onClick={() => contentTypeCallback('learn')}> LEARN </h4>
    <h4 className='menu-item' onClick={() => contentTypeCallback('practice')}> PRACTICE </h4>
    <h4 className='menu-item' onClick={() => contentTypeCallback('test')}> TEST </h4>
  </div>
)

export default Header;
