import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase.util";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect} from "react-redux";
import ShoppingIcon from '../shppingIcon/shoppingIcon'
import CardDropDown from '../card-dropdown/card-dropdown'
import {selectToggle} from '../../redux/user/cart.selector'
import {selectUser} from '../../redux/user/user-selector'
import {createStructuredSelector} from 'reselect'
const HeaderComponent = ({ currentUser,isShow }) => {
  
  return (
    <>
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            Shope
          </Link>
          <Link className="option" to="/contact">
            Contact
          </Link>
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SignOut
            </div>
          ) : (
            <Link className="option" to="/signin">
              SignIn
            </Link>

          )}
          <ShoppingIcon />
          </div>
         {isShow?<CardDropDown/>:"" }  
      </div>
    </>
  );
};
const MapStateToProps =createStructuredSelector ({
  currentUser: selectUser,
  isShow:selectToggle
});

export default connect(MapStateToProps)(HeaderComponent);
