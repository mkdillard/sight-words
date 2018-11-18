import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render () {

    return (
      <div>
        {/*Desktop Navbar*/}
        <div className='navbar desktop' >
          <Link className='headerLink firstLink' to='/sight-words'>
            <img src={require('../../resources/abc_logo.png')} alt={'abc_logo'}
                 height={'45'} width={'45'}
            />
          </Link>
          <Link className='headerLink firstLink' to='/sight-words'>HOME</Link>
          <Link className='headerLink' to='/sight-words/wordlist'>WORD LIST</Link>
          <Link className='headerLink' to='/sight-words/learn'>LEARN</Link>
          <Link className='headerLink' to='/sight-words/practice'>PRACTICE</Link>
          <Link className='headerLink' to='/sight-words/test'>TEST</Link>
        </div>
        {/*
          Mobile Navbar
        */}
        <div className='navbar mobile'>
          <div className='mobileNavLeftWrapper'>
            <Link className='headerLink firstLink' to='/sight-words'>
              <img src={require('../../resources/abc_logo.png')} alt={'abc_logo'}
                   height={'45'} width={'45'}
              />
            </Link>
            <Link className='headerLink firstLink' to='/sight-words'>HOME</Link>
          </div>
          <div className='hamburger' onClick={this.toggleHidden}>
            {!this.state.isHidden &&
              <div className='hamburgerDropdown'>
                <Link className='headerLink dropdownLink' to='/sight-words/wordlist'>WORD LIST</Link>
                <Link className='headerLink dropdownLink' to='/sight-words/learn'>LEARN</Link>
                <Link className='headerLink dropdownLink' to='/sight-words/practice'>PRACTICE</Link>
                <Link className='headerLink dropdownLink' to='/sight-words/test'>TEST</Link>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
