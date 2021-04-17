import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./card-dropdown.style.scss";
import CardItemDropDown from "../card-item-dropdown/card-item.component";
import { connect } from "react-redux";
import { selectCardItems } from "../../redux/user/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { isDropDown } from "../../redux/user/user-action";
const CardDropDown = ({ cardItem, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cardItem.length ? (
          cardItem.map((item) => <CardItemDropDown key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your Card Is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/CheckOut");
          dispatch(isDropDown())
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};
const MapStateToProps = createStructuredSelector({
  cardItem: selectCardItems,
});
export default withRouter(connect(MapStateToProps)(CardDropDown));
