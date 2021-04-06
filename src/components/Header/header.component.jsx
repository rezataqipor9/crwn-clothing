import React, { Component } from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
class HeaderComponent extends Component {
  state = {};
  render() {
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
          </div>
        </div>
      </>
    );
  }
}

export default HeaderComponent;
