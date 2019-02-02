import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import WordList from './components/WordList/WordList';
import Learn from './components/Learn/Learn';
import Timed from './components/Timed/Timed';
import Words from './data/sightwords.json';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter basename='/sight-words'>
        <div className='appWrapper'>
          <Header />
          <Route exact path='/' className='router' render={(routerProps) => <Home {...routerProps} />} />
          <Route path='/wordlist' className='router' render={(routerProps) => <WordList {...routerProps} listA={Words.listA} listB={Words.listB} listC={Words.listC} listD={Words.listD}/>} />
          <Route path='/learn' className='router' render={(routerProps) => <Learn {...routerProps} listA={Words.listA} listB={Words.listB} listC={Words.listC} listD={Words.listD}/>} />
          <Route path='/timed' className='router' render={(routerProps) => <Timed {...routerProps} listA={Words.listA} listB={Words.listB} listC={Words.listC} listD={Words.listD}/>} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
