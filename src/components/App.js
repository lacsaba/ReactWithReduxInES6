import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {/*TODO What is this good for? Read about it.*/}
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};
