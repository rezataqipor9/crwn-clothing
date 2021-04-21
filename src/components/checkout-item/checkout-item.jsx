import React from "react";
import "./checkout-item.scss";
import {
  ClearItemFromCart,
  EliminateCart,
  addItem,
} from "../../redux/user/user-action";
import { connect } from "react-redux";
import StripeButton from '../stripe-button/stripe-button'
const CheckOutItem = ({  carditem,EliminateCart,addItem,
  ClearItemFromCart
}) => {
  const {name, price, imageUrl, quantity, id} =carditem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => EliminateCart( carditem)} className="arrow">
          {" "}
          &#10096;
        </div>

        <span className="value"> {quantity}</span>

        <div  onClick={() => addItem( carditem)} className="arrow"> &#10097;</div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => ClearItemFromCart({ id })} className="remove-button">
        {" "}
        &#10060;
        </div>
        <StripeButton price={price}/>
      </div>
  );
};

export default connect(null, { ClearItemFromCart, EliminateCart, addItem })(
  CheckOutItem
);
