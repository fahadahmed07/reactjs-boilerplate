import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Register from '../../resource/admin/Containers/Register';
import Login from '../../resource/admin/Containers/Login';
import Dashboard from '../../resource/admin/Containers/Dashboard';
import TestPage from '../../resource/admin/Containers/TestPage';
import CryptoJS from 'crypto-js';
import SecretKey from '../SecretKeys';

const customHistory = createBrowserHistory();


const isUser = { isAuthenticated: false }

const decrypt = (value) => {
    let bytes = CryptoJS.AES.decrypt(value, SecretKey);
    let decryptedUserData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedUserData;
};

const isUserAuthenticate = () => {
    const userData = localStorage.getItem('ADMIN_DATA');
    if (userData) {
        const decryptedUserData = decrypt(userData)
        if (!decryptedUserData.access_token) {
            isUser.isAuthenticated = false;
        } else {
            isUser.isAuthenticated = true;
        }
    } else {
        isUser.isAuthenticated = false;
    }
};
isUserAuthenticate();


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            isUser.isAuthenticated === true
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/admin/login',
                    state: { from: props.location },
                }} />
        )} />
    );
}


// Admin Routes For Admin Navigation
const AdminRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Route exact path='/admin/login' component={Login}></Route>
            <Route path='/admin/register' component={Register}></Route>
            <PrivateRoute path='/admin/dashboard' component={Dashboard}></PrivateRoute>
            <PrivateRoute path='/admin/test' component={TestPage}></PrivateRoute>
        </div>
    </Router>
)

export default AdminRoutes