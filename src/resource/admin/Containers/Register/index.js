import { connect } from 'react-redux';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import InputField from '../../../../components/InputField'
import CustomBtn from '../../../../components/CustomBtn'
import { Images } from "../../../theme"


class Register extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            userEmail: "",
            userPasswod: "",

        }
        this.handleRegisterNowBtn = this.handleRegisterNowBtn.bind(this);
        this.handleLoginNowBtn = this.handleLoginNowBtn.bind(this);
    }

    handleUserName = (e, state) => {
        this.setState({
            [state]: e,
        }, () => {
            console.log(this.state.userName)
        });
    }

    handleUserEmail = (e, state) => {
        this.setState({
            [state]: e,
        }, () => {
            console.log(this.state.userEmail)
        });
    }

    handleUserPasswod = (e, state) => {
        this.setState({
            [state]: e,
        }, () => {
            console.log(this.state.userPasswod)
        });
    }

    handleRegisterNowBtn = () => {
        const { userEmail, userPasswod, userName } = this.state
        console.log(userEmail, userPasswod, userName);
        this.props.history.push('/admin/dashboard')
    }

    handleLoginNowBtn = () => {
        this.props.history.push('/admin/login')
    }

    _renderImageSection = () => {
        return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0">
                <img alt=""
                    style={{ maxWidth: '100%', display: 'block', verticalAlign: 'middle' }}
                    src={Images.formBackground} />
            </div>
        )
    }

    _renderFormSection = () => {
        return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 border">
                <div className="text-center my-3">
                    <img alt="" src={Images.logo} />
                </div>
                <div>
                    <form>
                        <InputField label="Name" type="text" inputHandler={this.handleUserName}
                            stateName="userName" placeholder="Enter name" />

                        <InputField label="Email" type="email" inputHandler={this.handleUserEmail}
                            stateName="userEmail" placeholder="Enter email" />

                        <InputField label="Password" type="password" inputHandler={this.handleUserPasswod}
                            stateName="userPasswod" placeholder="Password" />

                        <div className="d-flex justify-content-end">
                            <CustomBtn type="button" btnHandler={this.handleRegisterNowBtn} btnText="Register" />
                        </div>

                        <small id="emailHelp" className="form-text text-muted mb-2">Already have an account? <strong onClick={this.handleLoginNowBtn} style={{ color: '#27aae1', cursor: 'pointer' }}>Login here</strong></small>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
                <div className="row shadow mx-1 my-3">

                    {this._renderImageSection()}

                    {this._renderFormSection()}

                </div>
            </div>
        );
    }
}

const mapStateToProps = () => ({})

const action = {};

export default connect(mapStateToProps, action)(Register)