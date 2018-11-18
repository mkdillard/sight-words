import React from 'react';
import './Footer.css';

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div className='footerWrapper'>
      <div className='copyright'>
        <p>
          Copyright &copy; {year} Michael Dillard.
        </p>
      </div>
      <div className='iconAttribution'>
        <p>
          ABC icon created by <a href='https://en.wikiversity.org/wiki/it:User:Wim_b'>Wim b</a> at <a href='https://en.wikiversity.org/wiki/it:'>Italian Wikiversity</a>
        </p>
      </div>
    </div>
  );

}

export default Footer;
