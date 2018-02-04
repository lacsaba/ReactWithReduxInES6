import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading, courseCount}) => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/courses">Courses</Link>
        {" | "}
        <Link to="/authors">Authors</Link>
        {" | "}
        <Link to="/about">About</Link>
        {loading && <LoadingDots interval={100} dots={20}/>}
      </nav>
      <span>We have {courseCount ? courseCount : ''} courses! Check them out!</span>
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
