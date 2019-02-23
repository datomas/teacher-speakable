import React, { Component, Fragment } from 'react';

class Login extends Component {
  state = {
    isSending: false,
    form: {
      email: '',
      password: '',
      rememberMe: false
    }
  }

  render() {
    return (
      <Fragment>
        Login form
      </Fragment>
    )
  }
}

export default (Login);