import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase.util";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const HeaderComponent = ({ currentuser }) => {
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
          {currentuser ? (
            <div className="option" onClick={()=>auth.signOut()}>
              SignOut
            </div>
          ) : (
            <Link className="option" to="/signin">
              SignIn
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
