
import { connect } from 'react-redux';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import InputField from '../../../../components/InputField';
import CustomBtn from '../../../../components/CustomBtn';
import { Images } from "../../../theme";
import { request as userLogin } from '../../../../redux/actions/Login';
import CryptoJS from 'crypto-js';
import SecretKey from '../../../../config/SecretKeys';
// import { authenticate } from "../../../../redux/actions/Authenticate";


class Login extends Component {
    constructor() {
        super()
        this.state = {
            userEmail: "",
            userPasswod: "",
        }
    }
    
    encrypt = (value) => {
        const encryptUserData = CryptoJS.AES.encrypt(JSON.stringify(value), SecretKey);
        return encryptUserData;
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.login) {
            if (
                !nextProps.login.failure &&
                !nextProps.login.isFetching &&
                nextProps.login.data
            ) {
                this.setState({ isloading: false, password: "" }, () => {
                    const userData = nextProps.login.data.user;
                    console.log("DATA WITHOUT ENCRYPTION ==> ", userData)
                    localStorage.setItem('ADMIN_DATA', this.encrypt(userData));
                    console.log("nextProps.history.push ==> ", nextProps)
                    nextProps.history.push('/admin/dashboard')
                });
            } else if (nextProps.login.failure && !nextProps.login.isFetching) {
                this.setState({ isloading: false });
            }
        }
    }

    handleUserEmail = (e, state) => {
        this.setState({
            [state]: e,
        }, () => {
            // console.log(this.state.userEmail)
        });
    }

    handleUserPasswod = (e, state) => {
        this.setState({
            [state]: e,
        }, () => {
            // console.log(this.state.userPasswod)
        });
    }

    handleLoginNowBtn = () => {
        const { userEmail, userPasswod } = this.state

        let payload = { email: userEmail, password: userPasswod, device_type: "web", device_token: "string" };
        this.props.userLogin(payload);

    }

    handleRegisterNowBtn = () => {
        this.props.history.push('/admin/register')
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
                    <form >
                        <InputField label="Email" type="email" inputHandler={this.handleUserEmail}
                            stateName="userEmail" placeholder="Enter email" />

                        <InputField label="Password" type="password" inputHandler={this.handleUserPasswod}
                            stateName="userPasswod" placeholder="Password" />

                        <div className="d-flex justify-content-end">
                            <CustomBtn type="button" btnHandler={this.handleLoginNowBtn} btnText="Log In" />
                        </div>

                        <small id="emailHelp" className="form-text text-muted mb-2">Haven't account yet? <strong onClick={this.handleRegisterNowBtn} style={{ color: '#27aae1', cursor: 'pointer' }}>Register here</strong></small>
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

const mapStateToProps = (state) => ({ login: state.login });

const action = { userLogin, };

export default connect(mapStateToProps, action)(Login);