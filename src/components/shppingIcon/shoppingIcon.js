import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Shppingicon } from "../../assets/11.2 shopping-bag.svg";
import { isDropDown } from "../../redux/user/user-action";
import "./shoppingIcon_style.scss";
import { selectCardCount } from "../../redux/user/cart.selector";
const ShoppingIcon = ({ isDropDown, cardItem }) => {
  return (
    <div className="cart-icon" onClick={isDropDown}>
      <Shppingicon className="shopping-icon" />
      <span className="item-count">{cardItem}</span>
    </div>
  );
};
// const  MapDispatchToProps =(dispatch)=>({
//   isDropDown:()=>dispatch(isDropDown())
// })
const MapStateToProps = (state) => {
  
  return {
    cardItem: selectCardCount(state)
  };
};
export default connect(MapStateToProps, { isDropDown })(ShoppingIcon);
