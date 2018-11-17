import React from 'react';
import './Footer.css';

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div className='wrapper'>
      <div className='float-left'>
        <p>
          Copyright &copy; {year} Michael Dillard.
        </p>
      </div>
      <div className='float-right'>
        <p>
          ABC icon created by <a href='https://en.wikiversity.org/wiki/it:User:Wim_b'>Wim b</a> at <a href='https://en.wikiversity.org/wiki/it:'>Italian Wikiversity</a>
        </p>
      </div>
    </div>
  );

}

export default Footer;
