import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import { connect } from 'react-redux';
import { authenticate } from '../store/actions/user';

class Login extends Component {
  state = {
    isSending: false,
    form: {
      email: '',
      password: '',
      rememberMe: false
    }
  }

  static propTypes = {
    authenticate: PropTypes.func.isRequired
  }

  inputChange = (e) => {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [e.target.name]: e.target.value
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { form, isSending } = this.state;

    if (!isSending) {
      this.setState({
        isSending: true
      }, async () => {
        console.log('firing up authenticate...', form)
        const { authenticate } = this.props;
        await authenticate(form);
        this.setState({ isSending: false });
      });
    }
  }

  render() {
    const { form, isSending } = this.state;
    return (
      <Fragment>
        <form
          className="form-container"
          onSubmit={this.onSubmit}>
          <input
            value={form.email}
            name="email"
            type="text"
            className="form-input"
            placeholder="Email"
            onChange={this.inputChange}
          />
          <input
            value={form.password}
            name="password"
            type="password"
            className="form-input"
            placeholder="Password"
            onChange={this.inputChange}
          />
          <button
            type="button"
            className={`form-input form-input__small ${form.rememberMe ? 'form-input__small__active' : ''}`}
            onClick={() => this.setState({
              form: {
                ...form,
                rememberMe: !form.rememberMe
              }
            })}>
            Remember Me
          </button>
          <button
            type="submit"
            className={`form-input form-input__button ${isSending ? 'form-input__button__loading' : ''}`}
            disabled={isSending}>
            Login
          </button>
        </form>
      </Fragment>
    )
  }
}

export default connect(null, { authenticate })(Login);