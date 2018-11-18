import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import WordList from './components/WordList/WordList';
import Learn from './components/Learn/Learn';
import Practice from './components/Practice/Practice';
import Test from './components/Test/Test';
import Words from './data/sightwords.json';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='appWrapper'>
          <Header />
          <Route exact path='/sight-words' className='router' render={(routerProps) => <Home {...routerProps} />} />
          <Route path='/sight-words/wordlist' className='router' render={(routerProps) => <WordList {...routerProps} listA={Words.listA} listB={Words.listB} />} />
          <Route path='/sight-words/learn' className='router' render={(routerProps) => <Learn {...routerProps} listA={Words.listA} listB={Words.listB} />} />
          <Route path='/sight-words/practice' className='router' render={(routerProps) => <Practice {...routerProps} listA={Words.listA} listB={Words.listB} />} />
          <Route path='/sight-words/test' className='router' render={(routerProps) => <Test {...routerProps} listA={Words.listA} listB={Words.listB} />} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
