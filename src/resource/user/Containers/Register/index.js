import { connect } from 'react-redux';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Register.css";
import Navbar from "../../../../components/Navbar/Navbar";

class Signup extends Component {

  handleRegisterNowBtn = () => {
    this.props.history.push('/login')
  }


  render() {
    return (
      <div className="conatiner">
        <Navbar {...this.props} />
        <div className="row pt-5">
          <div className="col-md-6 offset-1">
            <h2 className="display-4">User Register</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="col-md-3 offset-1">
            <form>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="Enter full name" />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
              </div>
              <button type="button" className="btn btn-primary btn-block mb-2">Register</button>
              <span className="">Already have an account? <span onClick={this.handleRegisterNowBtn} style={{cursor: "pointer"}} className="text-primary">Login</span></span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const action = {};

export default connect(mapStateToProps, action)(Signup);