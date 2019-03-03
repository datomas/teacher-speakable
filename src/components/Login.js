import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button

} from "reactstrap";
import { connect } from 'react-redux';
import { authenticate } from '../store/actions/user';
import "assets/scss/login.scss";

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
        const { authenticate } = this.props;
        await authenticate(form);
        this.setState({ isSending: false });
      });
    }
  }

  render() {
    const { form, isSending } = this.state;
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <Col sm="12" md={{ size: 6 }}>
          <Card className="card-user">
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
            </CardHeader>
            <CardBody>
              <Form className="form" onSubmit={this.onSubmit}>
                <Col>
                  <FormGroup>
                    <Label for="email">Email </Label>
                    <Input
                      value={form.email}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      onChange={this.inputChange} />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      value={form.password}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="****"
                      onChange={this.inputChange} />
                  </FormGroup>
                </Col>
                <Col className="remember-me">
                  <FormGroup>
                    <Label for="checkbox" check>
                      <Input
                        type="checkbox"
                        name="checkbox"
                        onClick={() => this.setState({
                          form: {
                            ...form,
                            rememberMe: !form.rememberMe
                          }
                        })} />{' '}
                      Remember Me
                    </Label>
                  </FormGroup>
                </Col>
                <Button disabled={isSending} color="primary" round>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Container>
    )
  }
}

export default connect(null, { authenticate })(Login);