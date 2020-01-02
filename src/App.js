import React, { Component } from 'react';
import MyRoutes from './config/routes/routes'
import { Provider } from 'react-redux';

import Store from './redux/store'

const store = Store();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <MyRoutes />
        </div>
      </Provider>
    );
  }
}
