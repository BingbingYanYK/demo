import React from 'react'; 
import productImgUrl from './img/1692.jpg';
import './ProductImage.css'
const ProductImage = ({name, author, dept})=>(
    <div className="ProductImage">
        <div className="ImageContainer">
            <img src={productImgUrl} alt={name} />            
        </div>
        <div>{author}</div>        
        <div>{name}</div>
    </div>
)
export default ProductImage;
