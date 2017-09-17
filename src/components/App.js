import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import Header from './common/Header';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
      </div>
    );
  }
}

App.propTypes = {
  
};