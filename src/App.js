import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const productInfo = {

};
const optionSelected = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state= {productInfo, optionSelected}
  }
  selectOption(optionId){
    this.setState ({ optionSelected : optionId});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to demo</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;