import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthorListRow = ({author}) => {
  return (
    <tr>
      <th><Link to={"https://www.pluralsight.com/authors/" + author.id}>Profile page</Link></th>
      <td>{author.firstName}</td>
      <td>{author.lastName}</td>
      <td>{author.id}</td>
      <td>{author.skills.map(skill => <span key={skill}>{skill}, </span>)}</td>
    </tr>
  );
};

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired
};

export default AuthorListRow;
