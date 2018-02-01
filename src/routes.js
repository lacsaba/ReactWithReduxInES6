import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/courses" component={CoursesPage}/>
      <Route exact path="/course" component={ManageCoursePage}/>
      <Route exact path="/course/:id" component={ManageCoursePage}/>
      <Route exact path="/about" component={AboutPage} />
    </div>
  </Router>
);
