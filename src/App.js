import 'purecss/build/pure.css';
import React, { Component } from 'react';
import logo from './logo.png';
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
        </header>
        <div className="Product-info">
          <div className="Product-image">Product image</div>
          <div className="Product-detail">Product detail</div>          
        </div>
      </div>
    );
  }
}

export default App;
