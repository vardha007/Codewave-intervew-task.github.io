import React from "react";
import "./Creator.css";

const Creator = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="maincreator">
            <div className="main-content d-flex justify-content-between p-5">
              <h4 className="fw-bold d-flex text-white">
                View Creator's Collections
              </h4>
              <div className="right-left-arrow d-flex gap-2">
                <img src="./images/Button1.png" alt="" width={35} />
                <img src="./images/Button 2.png" alt="" width={35} />
              </div>
            </div>

            <div className="creator-cards d-flex justify-content-between pt-5">
              {/* image card */}
              <div className="d-flex flex-column gap-1">
                <div className="main-card">
                  <div className="card">
                    <div className="">
                      <img
                        className=""
                        src="./images/creator-image1.png"
                        alt=""
                        width={300}
                      />
                    </div>
                  </div>

                  {/* inner image card */}
                  <div className="text p-1 fw-bold text-white p-1 d-flex justify-content-center">
                    <p>Michael Joe</p>
                    <div className="totalearned d-flex flex-column">
                      <p>Total Earned</p>
                      <h6 className="earnedimage fw-bold fs-10 d-flex flex-row gap-2">
                        <img
                          src="./images/price-logo.png"
                          alt=""
                          width={15}
                          height={20}
                        />{" "}
                        320 ETH
                      </h6>
                    </div>
                    <div className="total-spent d-flex flex-column">
                      <p>Total Spent</p>
                      <h6 className="earnedimage fw-bold fs-10 d-flex flex-row gap-2">
                        <img
                          src="./images/price-logo.png"
                          alt=""
                          width={15}
                          height={20}
                        />
                        50 ETH
                      </h6>
                    </div>
                  </div>
                </div>
                <button className="btn-below">View Collection</button>
              </div>

              {/* // second card */}

              {/* image card */}
              <div className="d-flex flex-column gap-1">
                <div className="main-card">
                  <div className="card">
                    <div className="">
                      <img
                        className=""
                        src="./images/creator-image2.png"
                        alt=""
                        width={300}
                      />
                    </div>
                  </div>

                  {/* inner image card */}
                  <div className="text p-1 fw-bold text-white p-1 d-flex justify-content-center">
                    <p>Julia Cortez</p>
                    <div className="totalearned d-flex flex-column">
                      <p>Total Earned</p>
                      <h6 className="earnedimage fw-bold fs-10 d-flex flex-row gap-2">
                        <img
                          src="./images/price-logo.png"
                          alt=""
                          width={15}
                          height={20}
                        />{" "}
                        500 ETH
                      </h6>
                    </div>
                    <div className="total-spent d-flex flex-column">
                      <p>Total Spent</p>
                      <h6 className="earnedimage fw-bold fs-10 d-flex flex-row gap-2">
                        <img
                          src="./images/price-logo.png"
                          alt=""
                          width={15}
                          height={20}
                        />
                        100 ETH
                      </h6>
                    </div>
                  </div>
                </div>
                <button className="btn-below">View Collection</button>
              </div>
              {/* third card */}

              {/* image card */}
              <div className="d-flex flex-column gap-1">
                <div className="main-card">
                  <div className="card">
                    <div className="">
                      <img
                        className=""
                        src="./images/creator-image3.png"
                        alt=""
                        width={300}
                      />
                    </div>
                  </div>

                  {/* inner image card */}
                  <div className="text p-1 fw-bold text-white p-1 d-flex justify-content-center">
                    <p>Hamza Malik</p>
                    <div className="totalearned d-flex flex-column">
                      <p>Total Earned</p>
                      <h6 className="earnedimage fw-bold fs-10 d-flex flex-row gap-2">
                        <img
                          src="./images/price-logo.png"
                          alt=""
                          width={15}
                          height={20}
                        />{" "}
                        435 ETH
                      </h6>
                    </div>
                    <div className="total-spent d-flex flex-column">
                      <p>Total Spent</p>
                      <h6 className="earnedimage fw-bold fs-10 d-flex flex-row gap-2">
                        <img
                          src="./images/price-logo.png"
                          alt=""
                          width={15}
                          height={20}
                        />
                        150 ETH
                      </h6>
                    </div>
                  </div>
                </div>
                <button className="btn-below">View Collection</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creator;
