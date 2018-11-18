import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import WordList from './components/WordList/WordList';
import Learn from './components/Learn/Learn';
import Words from './data/sightwords.json';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='appWrapper'>
          <Header />
          <Route exact path='/' render={(routerProps) => <Home {...routerProps} />} />
          <Route path='/wordlist' render={(routerProps) => <WordList {...routerProps} listA={Words.listA} listB={Words.listB} />} />
          <Route path='/learn' render={(routerProps) => <Learn {...routerProps} listA={Words.listA} listB={Words.listB} />} />
          {/*
            <Route path='/practice' component={Practice} />
            <Route path='/test' component={Test} />
          */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
