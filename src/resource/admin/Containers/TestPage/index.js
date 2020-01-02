
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CryptoJS from 'crypto-js';
import SecretKey from '../../../../config/SecretKeys';

export default class Login extends Component {

    handleNavigation = (e) => {
        this.props.history.push(e)
        // console.log(this.props)
    }

    render() {
        return (
            <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
                <div className="row shadow mx-1 my-3">
                    <span onClick={() => this.handleNavigation('/admin/dashboard')} className="nav-link">Go to dashboard</span>
                </div>
            </div>
        );
    }
}