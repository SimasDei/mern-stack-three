import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const UserRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

UserRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default UserRoute;
