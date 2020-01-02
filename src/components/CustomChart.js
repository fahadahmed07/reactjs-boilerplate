import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class CustomChart extends Component {
    render() {
        return (
            <div>
                <div className="row py-3">
                    <div className="col-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="" block style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#6c757d' }} id="dropdown-basic">
                                Period: Today / Yesterday /
                                </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="col-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="" block style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#6c757d' }} id="dropdown-basic">
                                All Products
                                </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                    <div className="col-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="" block style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#6c757d' }} id="dropdown-basic">
                                All Marketplaces
                                </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                    <div className="col-3">
                        <button type="button" className="btn btn-primary btn-block">Filter</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3 px-0">
                        <div className="chartBorder text-center">
                            <p className="mb-0 text-success"><b>Gross Sales($)</b></p>
                            <p className="mb-0"><b>12408</b></p>
                        </div>
                        <div style={{ height: "80px", }} className="chartBorder py-4">
                        </div>
                        <div style={{ height: "80px", }} className="chartBorder py-4">
                        </div>
                        <div style={{ height: "80px", position: "relative" }} className="chartBorder pt-4 px-2 bg-danger">
                            <div style={{ height: "150px", position: "absolute", bottom: 0 }} className="bg-secondary">

                            </div>
                        </div>
                    </div>
                    <div className="col-3 px-0">
                        <div className="chartBorder text-center">
                            <p className="mb-0 text-danger"><b>Cost($)</b></p>
                            <p className="mb-0"><b>-8268</b></p>
                        </div>
                        <div className="chartBorder py-4">
                            sadsaddsadsad
                            </div>
                        <div className="chartBorder py-4">
                            sadsaddsadsad
                            </div>
                        <div className="chartBorder py-4">
                            sadsaddsadsad
                            </div>
                    </div>
                    <div className="col-3 px-0">
                        <div className="chartBorder text-center">
                            <p className="mb-0 text-primary"><b>Profit($)</b></p>
                            <p className="mb-0"><b>-8268</b></p>
                        </div>
                        <div className="chartBorder py-4">
                            sadsaddsadsad
                            </div>
                        <div className="chartBorder py-4">
                            sadsaddsadsad
                            </div>
                        <div className="chartBorder py-4">
                            sadsaddsadsad
                            </div>

                    </div>
                    <div className="col-3">

                    </div>

                </div>

                <div className="row">
                    <div className="col-3">
                        <div className="d-flex justify-content-between">
                            <span className="text-muted"><b>Units</b></span>
                            <span className="text-muted"><b>773</b></span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="text-muted"><b>Orders</b></span>
                            <span className="text-muted"><b>558</b></span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="d-flex justify-content-between">
                            <span className="text-muted"><b>Promos</b></span>
                            <span className="text-muted"><b>11</b></span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="d-flex justify-content-between">
                            <span className="text-muted"><b>Margins</b></span>
                            <span className="text-muted"><b>33</b></span>
                        </div>
                    </div>
                    {/* <div className="col-3">

                        </div> */}

                </div>
            </div>
        );
    }
}
