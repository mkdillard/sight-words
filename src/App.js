import React, { Component } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentType: 'home'
    };
  }

  setContentType = (componentName) => {
    // console.log(this.state.contentType);
    this.setState({
      contentType: componentName
    });
    // console.log('I am here');
    // console.log(this.state.contentType);
    // this.forceUpdate();
  }

  render() {
    return (
      <div className='App'>
        <Header contentTypeCallback={this.setContentType}/>
        <Content contentType={this.state.contentType} menuCallback={this.setContentType}/>
        <Footer />
      </div>
    );
  }
}

export default App;
