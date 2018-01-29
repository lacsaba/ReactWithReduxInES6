import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/courses">Courses</Link>
      {" | "}
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Header;