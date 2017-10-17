import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive.css'
import './App.css';
import logo from './img/logo.png';

import React, { Component } from 'react';
import ProductImage from './ProductImage';
import ProductConfigurator from './ProductConfigurator';

const productInfo = {
  name: "Bubble Gum",
  author: "Romina Ressia",
  dept: "Puisant son inspiration dans la peinture des maîtres anciens du XIVe au XVIIe siècle tels que Raphaël, Rembrandt ou encore Vermeer, Romina Ressia compose ses photographies comme un peintre construit son tableau. À travers l'étude précise des compositions et des décors, elle s'approprie les codes de représentation d'autrefois. Elle s'en distingue néanmoins par une approche extrêmement contemporaine en intégrant dans ses photographies des éléments de mise en scène issus du quotidien qui en troublent ostensiblement la lecture."
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
        <div className="Product-info pure-g">
          <div className="pure-u-sm-1-2 pure-u-1">
            <ProductImage  {...productInfo}  />
          </div> 
          <div className="pure-u-sm-1-2 pure-u-1">   
            <ProductConfigurator /> 
          </div>        
        </div>
        
      </div>
    );
  }
}

export default App;
