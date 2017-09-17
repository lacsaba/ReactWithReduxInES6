import React from 'react';
import PropTypes from 'prop-types';

export default class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

    this.state = {
      course: { title: '' }
    };

    
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave() {
    alert(`Saving ${this.state.course.title}`);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
        <input type="submit" value="Save" onClick={this.onClickSave} />
      </div>
    );
  }
}