import React, { Component } from "react";
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar2 from "../../../../components/Navbar/Navbar2";
import ImageSlider from "../../Components/ImageSlider";
import { Images } from "../../../theme"



export default class Home2 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Navbar2 />
                <ImageSlider />
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-4 offset-1">
                            <h1 className="text-uppercase display-4">
                                <strong> Welcom to <br />
                                    <span className="display-2">Imperative <br /> Systems</span>
                                </strong>
                            </h1>
                            <p className="text-secondary">Imperative's mission is to enable the
                                National Security Community to achieve their critical missions effectively,
                                efficiently and securely</p>
                            <button type="button" class="btn btn-primary btn-lg text-uppercase">Get a free demo</button>
                        </div>
                        <div className="col-3">
                            <img
                                style={{ maxWidth: '100%', display: 'block', verticalAlign: 'middle' }}
                                src={Images.work} />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row d-flex align-items-center justify-content-center p-5 bg-primary">
                        <p className="text-uppercase h1"><strong>When it must be done</strong></p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-4 offset-1 py-5">
                            <p className=" h2 text-uppercase">Home</p>
                            <p className="text-secondary">
                                Our Leadership Team brings over five decades of experience in
                            the National Security and Defense Industries.
                            We are committed to fostering deep, trusted relationships with
                            our client in support of meeting their most criticial challenges.
                            We are also committed to developing our employees and providing opportunities
                            for them to achieve excellence in their careers.</p>
                            <button type="button" class="btn btn-primary btn-lg text-uppercase">More Info</button>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-primary">
                    <div className="col-12 text-center pt-5 pb-2">
                        <p className=" h1 text-uppercase text-white">OUR SERVICES</p>
                        <p className="text-white">Imperative's mission is to enable the National
                            Security Community to achieve their critical missions effectively, efficiently and securely.</p>
                    </div>
                    <div className="row text-center d-flex justify-content-between align-items-center p-5">
                        <div className="col-3">
                            <p className="h5 text-uppercase text-white">MISSION SUPPORT SERVICES</p>
                            <p className="text-white">
                                Imperative provides mission support services
                                for government operations worldwide.
                                Our roots in the clandestine and special operations.</p>
                            <button type="button" class="btn btn-outline-light btn-lg text-uppercase">View Details</button>
                        </div>
                        <div className="col-3">
                            <p className="h5 text-uppercase text-white">CRITICAL INFRASTRUCTURE</p>
                            <p className="text-white">Imperative provides a full suite of services
                            to protect critical infrastructure from across the physical,
                            technical and logical security domains.</p>
                            <button type="button" class="btn btn-outline-light btn-lg text-uppercase">View Details</button>
                        </div>
                        <div className="col-3">
                            <p className="h5 text-uppercase text-white">CONSULTING SERVICES</p>
                            <p className="text-white">Imperatvie enables organizations to undertake strategic
                            endeavors by providing a range of advisory and consulting services.</p>
                            <button type="button" class="btn btn-outline-light btn-lg text-uppercase">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row d-flex align-items-center justify-content-center p-5 bg-primary">
                        <p className="text-uppercase h1"><strong>OUR PROJECTS</strong></p>
                        <p className="text-uppercase h1">Imperative's mission is to enable the National Security
                        Community to achieve their critical missions effectively,
                        efficiently and securely.</p>
                        <button type="button" class="btn btn-outline-light btn-lg text-uppercase">View Details</button>
                    </div>
                </div>
            </div>
        );
    }
}


