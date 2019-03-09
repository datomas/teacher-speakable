import React, { Component, useState, useEffect } from 'react';
import {
  Alert,
  Container,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { Redirect } from 'react-router';
import "assets/scss/login.scss";
import { useStore, useActions, thunk } from 'easy-peasy';

function Login () {

  const [loggedIn, setLoggedIn] = useState(false)

  const [error, setError] = useState({isError: false, message: ''})
  
  const [form, setForm] = useState({email: '', password: '', rememberMe: false })

  const [isSending, setIsSending] = useState(false)
 
  const login = useActions(action => action.user.login);

  const saveData = useActions (action => action.user.save)

  const setAuthenticated = useActions(action => action.user.setAuthenticated)

  const auth = useStore(state => state.user.authenticated)

  const userData = useStore(state => state.user.items);

  const inputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // useEffect triggers when isSending state has changed
  useEffect(()=>{
    if(isSending === true)
    {
      (async () => {
        await login(form).then(
          (data) => {
            if(data.success === true){
              saveData(data.result);
              setAuthenticated(true);
            }
            else{
              setError({error: data.result, message: data.message})
            }
          }
        );
      })()
    }
  }, [isSending]);

  const onSubmit = (e) => {
    e.preventDefault();
    if(!isSending)
    {
      setIsSending(true)
    }
  }

  if(auth === true)
  {
    // console.log(userData);
    // console.log("is authenticated ", auth);
    return <Redirect to="/entities" />
  }
    

  return <Container className="d-flex justify-content-center align-items-center">
      <Col sm="12" md={{ size: 6, order: 2 }}>
        <Card className="card-user">

          <CardHeader>
            <Col>
              <CardTitle>Sign In</CardTitle>
            </Col>
          </CardHeader>

          <CardBody>
            <Form className="form" onSubmit={onSubmit}>
              <Col>
                <Alert isOpen={error.isError} color="danger">
                  <b>Error: </b>{error.message}
                </Alert>
                <FormGroup>
                  <Label for="email">Email </Label>
                  <Input
                    value={form.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    onChange={inputChange}
                    />
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
                    onChange={inputChange}
                    />
                </FormGroup>
              </Col>
              <Col className="remember-me">
                <FormGroup>
                  <Label for="checkbox" check>
                    <Input
                      type="checkbox"
                      name="checkbox"
                      onClick={() => setForm({rememberMe: !form.rememberMe})} />{' '}
                    Remember Me
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <Button disabled={isSending} color="primary">Submit</Button>
              </Col>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Container>
}

export default Login;