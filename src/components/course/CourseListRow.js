import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CourseListRow extends React.Component {
  constructor(props) {
    super(props);

    this.deleteCourse = this.deleteCourse.bind(this);
  }

  deleteCourse(event) {
    event.preventDefault();
    this.props.deleteCourse(this.props.course);
  }

  render () {
    const {course} = this.props;
    return (
      <tr>
        <td><a href={course.watchHref} target="_blank">Watch</a></td>
        <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
        <td>{course.length}</td>
        <td><button className="btn btn-danger" onClick={this.deleteCourse}>Delete Course</button></td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

export default CourseListRow;
