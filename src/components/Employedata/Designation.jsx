import React from "react";

const Designation = () => {
  return (
    <div className="thirs-page bg-dark">
      <div className="container2 p-5">
        <div className=" third-page d-flex flex-column justify-content-between">
          <div className="employe-title d-flex fw-bold text-white mr-5">
            <h4>Our Top Creator's Words</h4>
          </div>

          <div className="card-card-details d-flex justify-content-around">
            <div className="emp-card p-2 mt-3">
              <div className="d-flex justify-content-between">
                <div className="name">
                  <p className="fw-bold text-white">Jason Roy</p>
                  <p className="fw-bold text-white">Senior designer</p>
                </div>

                <div className="badge">
                  <img src="./images/badge.png" alt="" width={100} />
                  <h5 className="text-dark text-white">EXPERT</h5>
                </div>
              </div>
            </div>
            <div className="emp-details-rating d-flex flex-column">
              <div className="emp-details">
                <p className="fw-bold text-white">
                  NFT will open thousands of new opportunities for <br />
                  this new generation. i feel very proud and blessed. <br />
                  that i have seen and taken advantage of many have <br />
                  great opportinites in this world before millions of <br />{" "}
                  people i have seen him.
                </p>
              </div>
              <div className="stars">
                <img src="./images/stars.png" alt="" />
              </div>
            </div>
          </div>
          <div className="bottom-images mt-5"> 
           <img src="./images/bottomimages.png" alt="" /> 
           </div>
        </div>
      </div>
    </div>
  );
};

export default Designation;
