import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import InputField from '../components/InputField'
import CustomBtn from '../components/CustomBtn'

export default class ContactUs extends Component {
    render() {
        return (
            <div className="container pt-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-12 offset-lg-1 offset-md-1 ">
                        <h1 className="h1">Contact Us</h1>
                        <p><b>Fill out the form below, our team of professionals will get back to you.</b></p>
                        <form >
                            <InputField label="Name" type="text" inputHandler={this.handleUserName}
                                stateName="userName" placeholder="Enter name" />

                            <InputField label="Email" type="email" inputHandler={this.handleUserEmail}
                                stateName="userEmail" placeholder="Enter email" />

                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div className="d-flex justify-content-end">
                                <CustomBtn type="submit" btnHandler={this.handleLoginNowBtn} btnText="Submit" />
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 border-left">
                        <h2 className="h3">Get In Touch</h2>
                        <p>Have questions? Contact us and have your questions answered.</p>

                        <p className="h5">Toronto, CA</p>
                        <p>180 Dundas St. W., 25th Floor Toronto, ON M5G 1Z8</p>
                        <p className="h5">Local</p>
                        <p>+1 647 367 5417</p>
                    </div>
                </div>
            </div>
        );
    }
}
