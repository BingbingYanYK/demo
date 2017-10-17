import React, { Component } from 'react'; 
import VariantSection from './VariantSection';

const formatAttributeValue = [
    {   
        id: 1,
        Name: 'icon',
        icon: ''
    },
    {   
        id: 2,
        Name: 'Classique',
        icon: ''
    },
    {   
        id: 3,
        Name: 'colorful',
        icon: ''
    },
    {   
        id: 4,
        Name: 'grand',
        icon: ''
    },
    {   
        id: 5,
        Name: 'géant',
        icon: ''
    },
    {   
        id: 6,
        Name: 'collector',
        icon: ''
    },
    {   
        id: 7,
        Name: 'Exception',
        icon: ''
    }
]
const finitionAttributeValue = [
    {   
        id: 1,
        Name: 'origin',
        icon: ''
    },
    {   
        id: 2,
        Name: 'blackout',
        icon: ''
    },
    {   
        id: 3,
        Name: 'nude',
        icon: ''
    },
    {   
        id: 4,
        Name: 'simple',
        icon: ''
    },
    {   
        id: 5,
        Name: 'Verre acrylique',
        icon: ''
    }
]
const frameAttributeValue = [
    {   
        id: 1,
        Name: 'Aluminium Noir',
        icon: ''
    },
    {   
        id: 2,
        Name: 'Acajou Mat',
        icon: ''
    },
    {   
        id: 3,
        Name: 'Bois Blanc',
        icon: ''
    },
    {   
        id: 4,
        Name: 'Aluminium Brossé',
        icon: ''
    },
    {   
        id: 5,
        Name: 'Noir Boisé',
        icon: ''
    },
    {   
        id: 6,
        Name: 'Noir Sainte',
        icon: ''
    },
    {   
        id: 7,
        Name: 'Noyer',
        icon: ''
    },
    {   
        id: 8,
        Name: 'Blanc Sainte',
        icon: ''
    },{   
        id: 9,
        Name: 'chêne',
        icon: ''
    }
]
const attributeArray = [formatAttributeValue, finitionAttributeValue, frameAttributeValue];

const productVariants = [
    {
        id : 1,
        formatId: 1,
        finitionId: 5,
        cardreId: null,
        price: 64,
        promoPrice: 54,
        currency: '$',
        size: "13x19 cm",
        dept: "Edition limitée à 50 exemplaires"
    },
    {
        id : 2,
        formatId : 2,
        finitionId: 1,
        cardreId: null,
        price: 84,
        promoPrice: 74,
        currency: '$',
        size: "13x19 cm",
        dept: "Edition limitée à 50 exemplaires"
    },
    {
        id : 3,
        formatId : 2,
        finitionId: 2,
        cardreId: null,
        price: 84,
        promoPrice: 74,
        currency: '$',
        size: "13x19 cm",
        dept: "Edition limitée à 50 exemplaires"
    },
    {
        id : 2,
        formatId : 3, //colorful
        finitionId: 5,
        cardreId: null,
        price: 84,
        promoPrice: 74,
        currency: '$',
        size: "13x19 cm",
        dept: "Edition limitée à 50 exemplaires"
    },
    {
        id : 5,
        formatId : 4, 
        finitionId: 3,
        cardreId: null,
        price: 84,
        promoPrice: 74,
        currency: '$',
        size: "13x19 cm",
        dept: "Edition limitée à 50 exemplaires"
    },
    {
        id : 6,
        formatId : 4, 
        finitionId: 4,
        cardreId: 5,
        price: 84,
        promoPrice: 74,
        currency: '$',
        size: "13x19 cm",
        dept: "Edition limitée à 50 exemplaires"
    },
    {
        id : 7,
        formatId : 4, 
        finitionId: 5,
        cardreId: 5,
        price: 84,
        promoPrice: 74,
        currency: '$',
        size: "13x19 cm",
        dept: "Edition limitée à 50 exemplaires"
    },
    {
        id : 8,
        formatId : 4, 
        finitionId: 5,
        cardreId: 6,
        price: 84,
        promoPrice: 74,
        currency: '$',
        size: "13x19 cm",
        dept: "Edition limitée à 50 exemplaires"
    },
    {
        id : 9,
        formatId : 4, 
        finitionId: 5,
        cardreId: 7,
        price: 84,
        promoPrice: 74,
        currency: '$',
        size: "13x19 cm",
        dept: "Edition limitée à 50 exemplaires"
    },
    {
        id : 10,
        formatId : 4, 
        finitionId: 5,
        cardreId: 8,
        price: 84,
        promoPrice: 74,
        currency: '$',
        size: "13x19 cm",
        dept: "Edition limitée à 50 exemplaires"
    },
    {
        id : 11,
        formatId : 4, 
        finitionId: 5,
        cardreId: 9,
        price: 84,
        promoPrice: 74,
        currency: '$',
        size: "13x19 cm",
        dept: "Edition limitée à 50 exemplaires"
    },
    {
        id : 12,
        formatId : 7, //colorful
        finitionId: 5,
        cardreId: null,
        price: 84,
        promoPrice: 74,
        currency: '$',
        size: "13x19 cm",
        dept: "Edition limitée à 50 exemplaires"
    },
];

class ProductConfigurator extends Component {
    constructor(props) {
        super(props);
        this.state= {
            variantArray: Array(3).fill(0), 
            currentStep: 0
        }
    }
    render(){
        let currentVariants = productVariants.filter(
            (variant)=>{
                if(this.state.currentStep === 1 && !this.state.variantArray[0]) 
                    return variant.formatId=== this.state.variantArray[0];
                else if(this.state.currentStep === 2 && !this.state.variantArray[1]){
                    return variant.finitionId=== this.state.variantArray[1];
                }
                return 1;
            }
        );
        let currentAttribute = attributeArray[this.state.currentStep];
        let currentSection = <VariantSection currentAttribute={currentAttribute} />
        //let AddToCart = (currentVariants.length===1)?<AddToCart />:'';
        return(
            <div className="ProductConfigurator">
                {currentSection}
                
            </div>
        );
    }
   
}

export default ProductConfigurator;
