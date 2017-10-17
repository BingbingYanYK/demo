import React, { Component } from 'react'; 

//show variation of an attribute, The only variation would be selected by default
class VaraintSection extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        let attributeValues = this.props.currentAttribute.map((current, index)=>
            <div key={current.id}>
                {current.Name}
            </div>
        )
        return(
            <div>
                {attributeValues}
            </div>
        );
    }
   
}

export default VaraintSection;
