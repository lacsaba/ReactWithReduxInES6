import React from 'react';
import PropTypes from 'prop-types';
import AuthorListRow from './AuthorListRow';

const AuthorList = ({authors}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Author Id</th>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
      {authors.map(author =>
        <AuthorListRow key={author.id} author={author}/>)}
      </tbody>
    </table>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.arrayOf(Object)
};

export default AuthorList;
