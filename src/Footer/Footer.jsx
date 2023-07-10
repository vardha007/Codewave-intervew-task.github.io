import React from "react";
import "./Footer.css";
// import { faFacebook } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
// import {  faTwitter  } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div>
      <section className="mainfooter1">
        <div className="container p-5">
          <div className="mainfooter">
            {/* Header */}

            <div className="header1 d-flex flex-column">
              <div className="logo d-flex flex-row gap-3">
                <h5>
                  <img
                    src="./images/3dlogo.png"
                    alt=""
                    width={28}
                    height={28}
                  />
                  Hovas
                </h5>
              </div>
              <div className="words d-flex flex-row">
                <h4 className="fw-bold fs-5 mb-2">Start Working With Us</h4>
              </div>
              <div className="input d-flex flex-row fs-15">
                <input type="text" placeholder="Enter your Email address" />
                <button className=" login p-2">Get Started</button>
              </div>
            </div>

            {/* // footer */}

            <div className="footer d-flex">
              <div className="d-flex flex-column mt-2">
                <p>
                  High level experience in crypto currinces and NFT'S <br />
                </p>

                <h6 className="d-flex flex-row fw-bold">Follow Us</h6>
                <div className="d-flex f-column gap-3">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-square-instagram"></i>
                  <i class="fa-solid fa-circle-play"></i>
                </div>
              </div>

              <div className=" footer-last d-flex gap-5">
                <div className="d-flex flex-column justify-content-between">
                  <a className="nav-link" href="nav-link">
                    About
                  </a>
                  <a className="nav-link" href="nav-link">
                    Features
                  </a>
                  <a className="nav-link" href="nav-link">
                    Price
                  </a>
                  <a className="nav-link" href="nav-link">
                    Gallery
                  </a>
                </div>
                <div className="d-flex flex-column justify-content-between nav-link">
                  <a className="nav-link" href="nav-link">
                    Bussiness
                  </a>
                  <a className="nav-link" href="nav-link">
                    SEO
                  </a>
                  <a className="nav-link" href="nav-link">
                    Blog
                  </a>
                  <a className="nav-link" href="nav-link">
                    Partners
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
