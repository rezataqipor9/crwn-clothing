import React from 'react';
import CustomButton from '../custom-button/custom-button'
import './card-dropdown.style.scss'
const CardDropDown = () => {
    return (  
        <div className='cart-dropdown'> 
        <div className='cart-items'/>
        <CustomButton>Go To CheackOut</CustomButton>
        </div>
    );
}
 
export default CardDropDown;