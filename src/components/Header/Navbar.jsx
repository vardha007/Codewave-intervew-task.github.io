import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar  navbar-expand-lg  d-flex justify-content-evenly m-auto">
      <div className="container">
        <h3>
          <a className="navbar-brand fw-bold text-white" href="nav-link">
            <img
              className="image-3d"
              style={{ height: 30, width: 30, alignItems: "center" }}
              src="./images/3dlogo.png"
              alt=""
            />
            Hovas
          </a>
        </h3>

        <div class="" id="navbarToggleExternalContent">
          <ul className="navbar-nav m-auto text-center ">
            <li className="nav-item active ">
              <a className="nav-link fw-bold text-white" href="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-white" href="nav-link">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-white" href="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold text-white" href="nav-link">
                Contacts
              </a>
            </li>
          </ul>
        </div>

        <div className="btns">
          <button className="btnlogin">Login</button>
          <button className="btnlogin">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
