import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../../resource/user/Containers/Home';
import AboutUs from '../../resource/user/Containers/About';
import ContactUs from '../../resource/user/Containers/Contact';
import Projects from '../../resource/user/Containers/Projects';
import Services from '../../resource/user/Containers/Services';
import Login from '../../resource/user/Containers/Login';
import Register from '../../resource/user/Containers/Register';

const customHistory = createBrowserHistory();

// User Routes For User Navigation
const UserRoutes = () => (    
    <Router history={customHistory}>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about-us' component={AboutUs}></Route>
            <Route path='/contact-us' component={ContactUs}></Route>
            <Route path='/projects' component={Projects}></Route>
            <Route path='/services' component={Services}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
    </Router>
)

export default UserRoutes