import React from 'react';
// import { Router, Route } from 'react-router-dom';
// import { createBrowserHistory } from 'history';

import AdminRoutes from "./adminRoutes";
import UserRoutes from "./userRoutes";

// Routes For Navigation
const MyRoutes = () => (
    <div>
        <AdminRoutes />
        <UserRoutes />
    </div>
)

export default MyRoutes