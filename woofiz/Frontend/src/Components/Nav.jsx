import React from "react";
import "../Scss/nav.scss";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import Profile from "../Assets/Profile.svg";
import Cart from "../Assets/Cart.svg";
import Logo from "../Assets/Logo.svg";

const Nav = () => {
  return (
    <>
      <div className="main-nav">
        <div className="nav-contents">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="searchbar">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </div>
          <div className="other-items">
            <div className="login">
              <h2>Login</h2>
              <img src={Profile} alt="" />
            </div>
            <div className="cart">
              <img src={Cart} alt="" />
              <div>
                <h2>0</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="second-nav">
          <div className="sec-nav-items">
            <NavLink>Home appliances</NavLink>
            <NavLink>Kitchen</NavLink>
            <NavLink>Electric</NavLink>
            <NavLink>Motorbikes</NavLink>
            <NavLink>Clothes</NavLink>
			<NavLink>Furniture</NavLink>
            <NavLink>Others</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
