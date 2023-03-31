import React from "react";
import "./Header.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <div style={{ backgroundColor: '#2a2a2a', color : 'white'}}>
      <div className="navbar navbar-expand-md navbar-dark cyborg-navbar navbar-fixed-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
            <Form className="ps-4 d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 bg-dark text-light m-3"
                aria-label="Search"
              />
            </Form>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Discover
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/browse" className="nav-link">
                  Browse
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/wishlist" className="nav-link">
                  Wishlist
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
