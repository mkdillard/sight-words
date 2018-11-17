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
          <Link className='headerLink firstLink' to='/'>
            <img src={require('../../resources/abc_logo.png')} alt={'abc_logo'}
                 height={'45'} width={'45'}
            />
          </Link>
          <Link className='headerLink firstLink' to='/'>HOME</Link>
          <Link className='headerLink' to='/wordlists'>WORD LISTS</Link>
          <Link className='headerLink' to='/learn'>LEARN</Link>
          <Link className='headerLink' to='/practice'>PRACTICE</Link>
          <Link className='headerLink' to='/test'>TEST</Link>
        </div>
        {/*Mobile Navbar*/}
        <div className='navbar mobile'>
          <div className='mobileNavLeftWrapper'>
            <Link className='headerLink firstLink' to='/'>
              <img src={require('../../resources/abc_logo.png')} alt={'abc_logo'}
                   height={'45'} width={'45'}
              />
            </Link>
            <Link className='headerLink firstLink' to='/'>HOME</Link>
          </div>
          <div className='hamburger' onClick={this.toggleHidden}>
            {!this.state.isHidden &&
              <div className='hamburgerDropdown'>
                <Link className='headerLink dropdownLink' to='/wordlists'>WORD LISTS</Link>
                <Link className='headerLink dropdownLink' to='/learn'>LEARN</Link>
                <Link className='headerLink dropdownLink' to='/practice'>PRACTICE</Link>
                <Link className='headerLink dropdownLink' to='/test'>TEST</Link>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
