import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

class Navbar extends Component {

  handleNavigation = (e) => {
    this.props.history.push(e)
    // console.log(this.props)
  }

  render() {
    return (
        <header>
          <div className="container-fluid bg-light">
            <div className="row">
              <div className="col-sm-4 h-logowidth"></div>
              <div className="topnav col-sm-8 text-center headz" id="myTopnav">
                <a href="#" className="" onClick={() => this.handleNavigation('/')}>HOME</a>
                <a href="#" className="" onClick={() => this.props.history.push('/about-us')}>ABOUT</a>
                <a href="#" className="" onClick={() => this.props.history.push('/services')}>SERVICES</a>
                <a href="#" className="" onClick={() => this.props.history.push('/projects')}>PROJECTS</a>
                <a href="#" className="" onClick={() => this.props.history.push('/contact-us')}>CONTACT US</a>
                <a href="#" className="" onClick={() => this.props.history.push('/login')}>LOGIN</a>
              </div>
            </div>
          </div>
        </header>
    );
  }
}

export default Navbar;
