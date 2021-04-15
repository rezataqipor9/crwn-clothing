import React from 'react';
import CustomButton from '../custom-button/custom-button'
import './card-dropdown.style.scss'
const CardDropDown = () => {
    return (  
        <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    );
}
 
export default CardDropDown;