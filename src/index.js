import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import {loadCourses} from "./actions/courseActions";
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
