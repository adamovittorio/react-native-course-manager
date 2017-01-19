import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const firebaseConfig = {
  apiKey: 'AIzaSyD7uxlKbEB105_3UyuWeG4-S7pmY_ckFcI',
  authDomain: 'manager-d7430.firebaseapp.com',
  databaseURL: 'https://manager-d7430.firebaseio.com',
  storageBucket: 'manager-d7430.appspot.com',
  messagingSenderId: '924310087301'
};

export default App;
