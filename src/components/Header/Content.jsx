import React from "react";
import "../Style.css";
import "./Navbar.css";

const Content = () => {
  return (
    <div className="herosection">
      <div className="content-container m-auto">
        <div className="content">
          <div className="image-nft">
            <img src="./images/nft-image.png" alt="" />
          </div>
          <div className="main-content-heading d-flex flex-column">
            <div className="mainheading">
              <h5 className="text-white">Criptocurrency</h5>
              <h6 className="text-white">Just Got Even Better</h6>
              <p className="text-white">
                Best nft collection freelance services online. outsource your
                nft collection project and get it quickly done and delievered
                remotely online.
              </p>
            </div>

            <div className="video-icon d-flex gap-3 justify-content-end">
              <div className="icon ml-5">
                <img src="./images/video-icon.png" alt="" width={50} />
              </div>
              <div className="video-content text-white">
                <h5>Lets get it started!</h5>
                <p>
                  watch this quick demo video <br />
                  to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
