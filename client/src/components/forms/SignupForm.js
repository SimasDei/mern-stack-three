import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
import { Form, Button } from 'semantic-ui-react';

class SignupForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};

    if (!isEmail(data.email)) errors.email = 'Invalid Email';
    if (!data.password) errors.password = "Can't be blank";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onsubmit={this.onsubmit} loading={loading}>
        <Button primary>Sign Up</Button>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={data.email}
            onChange={this.placeholder}
          />
        </Form.Field>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
