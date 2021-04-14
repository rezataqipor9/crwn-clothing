import React from "react";
import {connect} from 'react-redux'
import { ReactComponent as Shppingicon } from "../../assets/11.2 shopping-bag.svg";
import {isDropDown} from '../../redux/user/user-action'
import "./shoppingIcon_style.scss";
const ShoppingIcon = ({isDropDown}) => {
  return (
    <div className="cart-icon" onClick={isDropDown}>
      <Shppingicon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};
// const  MapDispatchToProps =(dispatch)=>({
//   isDropDown:()=>dispatch(isDropDown())
// })
const MapStateToProps = ({isShow:{isShow}}) => ({
  
  isShow
});
export default connect(MapStateToProps,{isDropDown})(ShoppingIcon);
