import React, { Component } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import SightWords from './components/SightWords/SightWords';
import WordLists from './components/WordLists/WordLists';
import Words from './data/sightwords.json';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentType: 'home'
    };
  }

  setContentType = (componentName) => {
    console.log(componentName);
    this.setState({
      contentType: componentName
    });
  }

  getContentComponent = () => {
    if (this.state.contentType === 'words') {
      return <WordLists styleClass={'col-8'}
                        listA={Words.listA}
                        listB={Words.listB}
                        callback={this.setContentType} />;
    } else if (this.state.contentType === 'learn' ||
               this.state.contentType === 'practice' ||
               this.state.contentType === 'test') {
      return <SightWords styleClass={'col-8'}
                         type={this.state.contentType}
                         listA={Words.listA}
                         listB={Words.listB}
                         callback={this.setContentType} />;
    }
    //Default back to Menu
    return <Menu styleClass={'col-8'}
                 callback={this.setContentType} />;
  };

  render() {
    return (
      <div>
        <div className='row'>
          <Header styleClass={'col-12'} contentTypeCallback={this.setContentType}/>
        </div>
        <div className='row'>
          <div className='col-2' />
            {this.getContentComponent()}
          <div className='col-2' />
        </div>
        <div className='row'>
          <Footer styleClass={'col-12'}/>
        </div>
      </div>
    );
  }
}

export default App;
