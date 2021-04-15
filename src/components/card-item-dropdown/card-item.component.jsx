import React from "react";
import './card-item.style.scss'
const CardItemDropDown = ({item:{imageUrl,name,price,quantity}}) => {
  return <div className='cart-item'>
  <img src={imageUrl}  alt='item'/>
  <div className='item-details'>
  <span className='name'>{name}</span>
  <span className='price'>{quantity} X ${price}</span>
  </div>
  </div>;
};

export default CardItemDropDown;
