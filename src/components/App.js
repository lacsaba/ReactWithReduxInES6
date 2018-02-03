import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        {/*TODO What is this good for? Read about it.*/}
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
