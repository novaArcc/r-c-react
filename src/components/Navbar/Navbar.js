import React, { useRef } from "react";
import logoSmallScreen from "./navbarImages/logo2.jpg";
import logoBigScreen from "./navbarImages/logo4.jpg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  const closeNavbar = () => {
    if (navRef.current && navRef.current.classList.contains("show")) {
      navRef.current.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-xl bg-body-tertiary pb-3 pt-3 fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
          <img className="logo2 d-xl-none" src={logoSmallScreen} alt="Logo small screen" />
        </a>
        <div className="logo-container d-xl-block d-none">
          <NavLink className="navbar-brand" to="/">
            <img className="logo d-xl-block d-none" src={logoBigScreen} alt="Logo big screen" />
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" ref={navRef}>
          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeNavbar} exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeNavbar} exact>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeNavbar} exact>
                Contact
              </NavLink>
            </li>
            <li className="nav-item ms-0 ms-xl-auto">
              <NavLink className="nav-link" to="/menus" onClick={closeNavbar} exact>
                Menus
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/events" onClick={closeNavbar} exact>
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery" onClick={closeNavbar} exact>
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
