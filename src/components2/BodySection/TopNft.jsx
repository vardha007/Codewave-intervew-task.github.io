import React from "react";
import "../BodySection/TopNft.css";

const TopNft = () => {
  return (
    <div className="top-nfet-section bg-primary">
      <div className="container pt-5">

       <div className="bothsections">
         {/* topbar */}
        <div className="both-section d-flex  justify-content-between align-items-center">
          <div className="heading d-flex flex-column gap--3">
            <div className="title d-flex flex-row fs-5">
              <p className="text-white">New Collection</p>
            </div>
            <div className="second-title d-flex flex-row">
              <p className="text-white"> Weekly Top NFT's</p>
            </div>
            <div className="third-title d-flex flex-row">
              <p className="text-white">
                outsource your nft collection project and get it quickly done.{" "}
              </p>
              <span className="d-flex flex-row text-white">
                and delievered remotely online.
              </span>
            </div>
          </div>
          <div className="d-flex gap-1">
            <div className="button1">
              <img src="./images/Button1.png" alt="" />
            </div>
            <div className="button2">
              <img src="./images/Button 2.png" alt="" />
            </div>
          </div>
        </div> 
              {/* cards */}
         <div className="cards d-flex justify-content-between">
          <div className="card">
            <div className="main-image">
              <img src="./images/first.png" alt="" />
            </div>
            <div className="bottom-card bg-dark">
              <div className="title-name text-white">
                <div>
                  <p>Splash Statue</p>
                  <div className="d-flex gap-2">
                    <img
                      src="./images/price-logo.png"
                      alt=""
                      style={{ backgroundColor: "gold" }}
                      width={30}
                      height={30}
                    />
                    <h5 className="">3.2 ETH</h5>
                  </div>
                </div>
                <div className="image">
                  <img
                    src="./images/people2.png"
                    alt=""
                    width={150}
                    height={100}
                    style={{ marginLeft: 50 }}
                  />
                </div>
              </div>
              <div>
                <button className="bidnow pe-2 ps-2 pt-2 pb-2 b-none">
                  Bid Now
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="main-image">
              <img src="./images/second.png" alt="" />
            </div>
            <div className="bottom-card bg-dark">
              <div className="title-name text-white">
                <div>
                  <p>Splash Statue</p>
                  <div className="d-flex gap-2">
                    <img
                      src="./images/price-logo.png"
                      alt=""
                      style={{ backgroundColor: "gold" }}
                      width={30}
                      height={30}
                    />
                    <h5 className="">3.2 ETH</h5>
                  </div>
                </div>
                <div className="image">
                  <img
                    src="./images/people2.png"
                    alt=""
                    width={150}
                    height={100}
                    style={{ marginLeft: 50 }}
                  />
                </div>
              </div>
              <div>
                <button className="bidnow pe-2 ps-2 pt-2 pb-2 b-none">
                  Bid Now
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="main-image">
              <img src="./images/third.png" alt="" />
            </div>
            <div className="bottom-card bg-dark">
              <div className="title-name text-white">
                <div>
                  <p>Splash Statue</p>
                  <div className="d-flex gap-2">
                    <img
                      src="./images/price-logo.png"
                      alt=""
                      style={{ backgroundColor: "gold" }}
                      width={30}
                      height={30}
                    />
                    <h5 className="">3.2 ETH</h5>
                  </div>
                </div>
                <div className="image">
                  <img
                    src="./images/people2.png"
                    alt=""
                    width={150}
                    height={100}
                    style={{ marginLeft: 50 }}
                  />
                </div>
              </div>
              <div>
                <button className="bidnow pe-2 ps-2 pt-2 pb-2 b-none p-5">
                  Bid Now
                </button>
              </div>
            </div>
          </div>
          </div>
       </div>
        
        
        
      </div>
    </div>
  );
};

export default TopNft;
