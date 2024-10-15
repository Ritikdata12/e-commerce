import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { UserContext } from '../App'; 

import "./Register.css";


const Login = () => {
  const { user , setUser } = useContext(UserContext);  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
   
    setErrorMessage('');
    return true;
  };



  return (
    <>
      <div className="cont4">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6} style={{border: "2px solid blue" , height: "350px", background: "white"}}>
            <h3 className="text-center">Login</h3>

            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Form>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </Form.Group>

             

              <div className="d-flex justify-content-between">
                <Button 
                  variant="primary" 
                  className="w-50"
                  onClick={() => window.location.href = "/Register"}
                >
                  Register
                </Button>

                <Button
                  variant="secondary"
                  className="w-50 ms-3"
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
        </div>
    </>
  );
};

export default Login;