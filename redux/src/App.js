import React from 'react';
import { Router } from 'react-router-dom';
import history from './server/history.js';
import Routes from './routes';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}
