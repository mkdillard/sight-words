import React, { Component } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentType: 'home'
    };
  }

  setContentType = (componentName) => {
    this.setState({
      contentType: componentName
    });
  }

  render() {
    return (
      <div className="App">
        <Header contentTypeCallback={this.setContentType}/>
        <Content contentType={this.state.contentType} menuCallback={this.setContentType}/>
      </div>
    );
  }
}

export default App;
