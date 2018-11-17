import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <div className='row'>
            <Header className='col-12 col-s-12' />
          </div>
          <div className='row'>
            <p>Content goes here someday</p>
          </div>
          <div className='row'>
            <Footer className='col-12 col-s-12' />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
