import React from "react";
import {connect} from 'react-redux'
import { ReactComponent as Shppingicon } from "../../assets/11.2 shopping-bag.svg";
import {isDropDown} from '../../redux/user/user-action'
import "./shoppingIcon_style.scss";
const ShoppingIcon = ({isDropDown,isShow,cardItem}) => {
  return (
    <div className="cart-icon" onClick={isDropDown}>
    
      <Shppingicon className='shopping-icon' />
      <span className='item-count'>{cardItem.length}</span>
    </div>
  );
};
// const  MapDispatchToProps =(dispatch)=>({
//   isDropDown:()=>dispatch(isDropDown())
// })
const MapStateToProps = (state) => ({
  
  isShow:state.isShow.isShow,
  cardItem:state.isShow.cardItem

});
export default connect(MapStateToProps,{isDropDown})(ShoppingIcon);
