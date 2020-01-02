import React, { Component } from 'react';
import CustomChart from '../components/CustomChart'
import ContactUs from '../resource/ContactUs'
import AboutUs from '../resource/AboutUs'
import "../App.css"

// import 'antd/dist/antd.css';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            showDrawer: true,
            showTab1: false,
            showTab2: true,
            showTab3: false,
            showSecLogo: false,
            showChart: true,
            showContactForm: false,
            showAboutUs: false,

        };
    };



    handleLogoutBtn = () => {
        this.props.history.push('/')
    }

    handleDrawer = () => {
        const { showDrawer } = this.state;
        if (showDrawer) {
            this.setState({ showDrawer: false })
        } else {
            this.setState({ showDrawer: true })
        }
    };

    drawerShowSecLogo = () => {
        const { showSecLogo } = this.state;
        if (showSecLogo) {
            this.setState({ showSecLogo: false })
        } else {
            this.setState({ showSecLogo: true })
        }
    }

    _renderTabsMenu = () => {
        const { showTab1, showTab2, showTab3 } = this.state;
        return (
            <ul className="nav nav-tabs" >
                <li className="nav-item">
                    <a className={showTab1 ? "nav-link active" : "nav-link"}
                        id="tiles-tab"
                        data-toggle="tab"
                        href="#tiles"
                        role="tab"
                        aria-controls="tiles"
                        aria-selected={showTab1 ? "true" : "false"}
                        onClick={() => this.setState({ showTab1: true, showTab2: false, showTab3: false, })}
                    >Tiles</a>
                </li>
                <li className="nav-item">
                    <a className={showTab2 ? "nav-link active" : "nav-link"}
                        id="chart-tab"
                        data-toggle="tab"
                        href="#chart"
                        role="tab"
                        aria-controls="chart"
                        aria-selected={showTab2 ? "true" : "false"}
                        onClick={() => this.setState({ showTab1: false, showTab2: true, showTab3: false, })}
                    >Chart</a>
                </li>
                <li className="nav-item">
                    <a className={showTab3 ? "nav-link active" : "nav-link"}
                        id="pnl-tab"
                        data-toggle="tab"
                        href="#pnl"
                        role="tab"
                        aria-controls="pnl"
                        aria-selected={showTab3 ? "true" : "false"}
                        onClick={() => this.setState({ showTab1: false, showTab2: false, showTab3: true, })}
                    >P&amp;L</a>
                </li>
            </ul>
        )
    }

    _renderTab1Content = () => {
        const { showTab1, } = this.state;
        return (
            <div className={showTab1 ? "tab-pane fade show active" : "tab-pane fade"} id="tiles" role="tabpanel" aria-labelledby="tiles-tab">
                <div className="container">
                    <p>Tiles Tab</p>
                </div>
            </div>
        )
    }

    _renderTab2Content = () => {
        const { showTab2, } = this.state;
        return (
            <div className={showTab2 ? "tab-pane fade show active" : "tab-pane fade"} id="chart" role="tabpanel" aria-labelledby="chart-tab">
                <div className="container">
                    {/* <p>Chart Tab</p> */}
                    <CustomChart />
                </div>
            </div>
        )
    }

    _renderTab3Content = () => {
        const { showTab3 } = this.state;
        return (
            <div className={showTab3 ? "tab-pane fade show active" : "tab-pane fade"} id="pnl" role="tabpanel" aria-labelledby="pnl-tab">
                <div className="container">
                    <p>P&amp;L Tab</p>
                </div>
            </div>
        )
    }

    _renderTabs = () => {
        const { showTab1, showTab2, showTab3 } = this.state;
        return (
            <div className="container mt-4">
                {this._renderTabsMenu()}
                <div className="tab-content" >

                    {showTab1 ? this._renderTab1Content() : null}

                    {showTab2 ? this._renderTab2Content() : null}

                    {showTab3 ? this._renderTab3Content() : null}
                </div>
            </div>
        )
    }

    _renderDrawerHeader = () => {
        const { showDrawer, showSecLogo } = this.state;
        return (
            <div style={{ minHeight: "10%" }} className="shadow container-fluid bg-dark d-flex align-items-center justify-content-center">
                {showDrawer || showSecLogo ?
                    <h5 className="h2 text-center text-white text-uppercase a">Logo</h5> :
                    <img alt="" style={{ width: "32px", height: "32px" }} src={require('../images/icons8-flash-on-100.png')} />}
            </div>
        )
    }

    _renderDrawerContent = () => {

        return (
            <div className="ml-3 mt-4">
                <p style={{ cursor: "pointer" }}
                    onClick={() => this.setState({ showChart: true, showContactForm: false, showAboutUs: false })}
                    className="text-white"><b>Charts</b></p>

                <p style={{ cursor: "pointer" }}
                    onClick={() => this.setState({ showChart: false, showContactForm: true, showAboutUs: false })}
                    className="text-white"><b>Contact Us</b></p>

                <p style={{ cursor: "pointer" }}
                    onClick={() => this.setState({ showChart: false, showContactForm: false, showAboutUs: true })}
                    className="text-white"><b>About Us</b></p>
            </div>
        )
    }

    _renderDrawer = () => {
        const { showDrawer, showSecLogo } = this.state;
        return (
            <div
                onMouseEnter={this.drawerShowSecLogo}
                onMouseLeave={this.drawerShowSecLogo}
                style={{ minHeight: "100vh" }} className={showDrawer || showSecLogo ? "bg-secondary p-0 drawerOpen" : "bg-secondary p-0 drawerClose"}>
                {this._renderDrawerHeader()}
                {this._renderDrawerContent()}
            </div>
        )
    }

    _renderDashboardHeader = () => {
        return (
            <div style={{ minHeight: "10%" }} className="shadow container-fluid bg-primary d-flex align-items-center justify-content-between">
                <div className="row ml-2">
                    <img onClick={this.handleDrawer} alt="" style={{ width: "32px", height: "32px" }} src={require('../images/menu.png')} />
                </div>
                <div className="row mr-2">
                    <span className="text-white" onClick={this.handleLogoutBtn}><b>Logout</b></span>
                </div>
            </div>
        )
    }

    _renderDashboardContent = () => {
        const { showChart, showContactForm, showAboutUs } = this.state
        return (
            <div className="pb-2">
                {showChart ? this._renderTabs() : null}
                {showContactForm ? <ContactUs /> : null}
                {showAboutUs ? <AboutUs/> : null}

            </div>
        )
    }

    _renderDashboard = () => {
        const { showDrawer, showSecLogo, } = this.state;
        return (
            <div style={{ minHeight: "100vh" }} className={showDrawer || showSecLogo ? "bg-light p-0 dashboardShort" : "bg-light p-0 dashboardShort dashboardLong"}>

                {this._renderDashboardHeader()}

                {this._renderDashboardContent()}


            </div>
        )
    }

    render() {
        // const { showDrawer, } = this.state;
        // console.log(showDrawer, showTab1, showTab2, showTab3)
        return (
            <div className="container-fliud">
                <div className="row m-0">
                    {this._renderDrawer()}
                    {this._renderDashboard()}

                </div>
            </div>
        );
    }
}
