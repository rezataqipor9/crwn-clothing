import React from "react";
import "./checkOut.style.scss";
import {connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCardItems,selectCartTotal} from '../../redux/user/cart.selector'
import CheckOutItem from '../../components/checkout-item/checkout-item'
import StripeButton from '../../components/stripe-button/stripe-button'
const CheckOut = ({cardItems,totalPrice}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cardItems.map(item=><CheckOutItem key={item.id} carditem={item} />)}
      <div className='total'>
     TOTAL:$ {totalPrice}
      </div>
      <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
      <StripeButton price={totalPrice}/>
      
    </div>
  );
};
const MapStateToProps=createStructuredSelector({
    cardItems:selectCardItems,
    totalPrice:selectCartTotal

})

export default connect(MapStateToProps) (CheckOut);
