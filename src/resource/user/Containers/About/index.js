import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.css";
import Navbar from "../../../../components/Navbar/Navbar";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar {...this.props} />
        <div className="container-fluid">
          <div
            className="row blue f1-blue"
            style={{
              fontfamily: "Calibri",
              color: "white",
              backgroundColor: "#2453ce"
            }}
          >
            <div className="col-sm-12 text-center font-weight-bolder when f1-when">
              WHEN IT MUST BE DONE
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row aboutbg s2">
            <div className="container">
              <div
                className="row about f2-about s2-about"
                style={{ backgroundColor: "white" }}
              >
                <div className="col-sm-6">
                  <div className="col-sm-12 font-weight-bold abt">
                    <div className="col-sm-12">
                      <div className="col-sm-12">About</div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="col-sm-12">
                      <div
                        className="col-sm-12 ourleader f2-ourleader"
                        style={{ color: "#808080", fontfamily: "Calibri" }}
                      >
                        Our Leadership Team brings over five decades of
                        experience in the National Security and Defense
                        Industries. We are committed to fostering deep, trusted
                        relationships with our client in support of meeting
                        their most criticial challenges. We are also committed
                        to developing our employees and providing opportunities
                        for them to achieve excellence in their careers.
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{ fontsize: 22, fontfamily: "Calibri" }}
                  >
                    <div className="col-sm-12">
                      <div className="col-sm-12">
                        <div className="col-sm-12">
                          <div className="col-sm-12">
                            <span
                              className="moreinfo f2-moreinfo"
                              style={{
                                border: "2px solid #2453ce",
                                background: "#e8e8e8"
                              }}
                            >
                              MORE INFO --->
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div>
                    {/* <img
                      src={img}
                      class="chashmish s2-chashmish s3-chashmish f_med"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row bgc bgc3 f3-bgc s2-bgc">
            <div className="container">
              <div className="row">
                <div
                  className="col-sm-12 text-center font-weight-bold ourservices f3-ourservices s2-ourservices"
                  style={{ fontfamily: "Calibri" }}
                >
                  OUR SERVICES
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  {" "}
                  <br />{" "}
                </div>
              </div>
              <div className="row">
                <div
                  className="col-sm-12 text-center"
                  style={{
                    fontfamily: "Calibri",
                    fontsize: 18,
                    margintop: "-10"
                  }}
                >
                  Imperative's mission is to enable the National Security
                  Community to achieve their critical missions effectively,{" "}
                  <br /> efficiently and securely.
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <br />
                  <br /> <br />{" "}
                </div>
              </div>
              <div className="row" style={{ textalign: "center" }}>
                <div className="col-sm-1">
                  {/* <img
                    src={img1}
                    style={{ height: "80px" }}
                    className="s2-mcc-logo s3-mcc-logo "
                  /> */}
                </div>
                <div
                  className="col-sm-3 font-weight-bold f3-mission"
                  style={{ fontfamily: "Calibri", fontsize: 31 }}
                >
                  <div className="mcc-first"> MISSION SUPPORT </div>
                  <div className="mcc-second"> SERVICES</div>
                  <div className="font-weight-normal services s2-mcc">
                    Imperative provides mission support services for government
                    operations worldwide. Our roots in the clandestine and
                    special operations.
                  </div>
                  <span
                    className="btnx s2-btnx font-weight-normal s2-mcc"
                    style={{ fontsize: 16 }}
                  >
                    VIEW DETAILS
                  </span>
                </div>
                <div className="col-sm-1">
                  {/* <img
                    src={img1}
                    style={{ height: 80 }}
                    class="s2-mcc-logo s3-mcc-logo"
                  /> */}
                </div>
                <div
                  className="col-sm-3 font-weight-bold f3-mission"
                  style={{ fontfamily: "Calibri", fontsize: 31 }}
                >
                  <div className="mcc-first"> CRITICAL </div>
                  <div className="mcc-second"> INFRASTRUCTURE </div>
                  <div className="font-weight-normal services s2-mcc">
                    Imperative provides a full suite of services to protect
                    critical infrastructure from across the physical, technical
                    and logical security domains.
                  </div>
                  <span
                    className="btnx s2-btnx font-weight-normal s2-mcc"
                    style={{ fontsize: 16 }}
                  >
                    VIEW DETAILS
                  </span>
                </div>
                <div className="col-sm-1">
                  {/* <img
                    src={img1}
                    style={{ height: 80 }}
                    className="s2-mcc-logo s3-mcc-logo"
                  /> */}
                </div>
                <div
                  className="col-sm-3 font-weight-bold f3-mission"
                  style={{ fontfamily: "Calibri", fontsize: 31 }}
                >
                  <div className="mcc-first"> CONSULTING </div>
                  <div className="mcc-second"> SERVICES </div>
                  <div className="font-weight-normal services s2-mcc">
                    Imperatvie enables organizations to undertake strategic
                    endeavors by providing a range of advisory and consulting
                    services.
                  </div>
                  <span
                    className="btnx s2-btnx font-weight-normal s2-mcc"
                    style={{ fontsize: 16 }}
                  >
                    VIEW DETAILS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container bgc ourprojectbg s2-ourprojectbg">
          <div class="row">
            <div
              className="col-sm-12 text-center font-weight-bold s2-ourproject"
              style={{
                color: "#505050",
                margintop: 60,
                fontsize: 46,
                fontfamily: "Calibri"
              }}
            >
              OUR PROJECTS
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              {" "}
              <br />{" "}
            </div>
          </div>
          <div className="row">
            <div
              className="col-sm-12 text-center s2-ourproject"
              style={{
                fontfamily: "Calibri",
                fontsize: 18,
                margintop: "-10px",
                color: "#808080"
              }}
            >
              Imperative's mission is to enable the National Security Community
              to achieve their critical missions effectively, efficiently and
              securely.
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {" "}
              <br />
              <br />{" "}
            </div>
          </div>
          <div className="row s2-ourproject">
            <div className="col-sm-4">
              {/* <img src={img1} style={{ width: "" }} /> */}
            </div>
            <div className="col-sm-4">
              {/* <img src={img1} style={{ width: "" }} /> */}
            </div>
            <div className="col-sm-4">
              {/* <img src={img1} style={{ width: "" }} /> */}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center last f4-last s2-opview">
              <span
                className="btnx f4-btnx font-weight-normal"
                style={{ color: "white" }}
              >
                VIEW DETAILS
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
