import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';

class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {authors, actions} = this.props;
    return (
      <div>
        <h1>Authors</h1>
        <AuthorList authors={authors} />
      </div>
    );
  }
}

AuthorsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  authors: PropTypes.arrayOf(Object).isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    authors: state.authors
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
