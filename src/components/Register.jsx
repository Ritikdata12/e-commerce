import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

import "./Register.css";
import Header from './Header';


const Register = () => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[gender , setgender] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    if (!usernameRegex.test(name)) {
      setErrorMessage('Username must be 3-16 characters long and can only contain letters, numbers, and underscores.');
      return false;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }

    setErrorMessage(''); 
    return true;
  };

 

  return (
    <>
    <Header/>
    <div className="cont4">
        <Row className="justify-content-md-center">
          <Col md={6} style={{border: "2px solid blue" , height: "470px", background: "white"}}>
            <h3 className="text-center">Register</h3>

            {successMessage && <Alert variant="success">{successMessage}</Alert>}

            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Form>
  <Form.Group controlId="formUsername" className="mb-3">
    <Form.Label>name</Form.Label>
    <Form.Control
      type="text"
      name="name"
      value={name}
      onChange={(e) => setname(e.target.value)}
      placeholder="Enter username"
    />
  </Form.Group>

  <Form.Group controlId="formEmail" className="mb-3">
    <Form.Label>Email address</Form.Label>
    <Form.Control
      type="email"
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter email"
    />
  </Form.Group>

  <Form.Group controlId="formgender" className="mb-3">
    <Form.Label>Enter gender</Form.Label>
    <Form.Control
      type="text"
      name="gender"
      value={gender}
      onChange={(e) => setgender(e.target.value)}
      placeholder="Enter your gender"
    />
  </Form.Group>

  <Form.Group controlId="formPassword" className="mb-3">
    <Form.Label>Password</Form.Label>
    <Form.Control
      type="password"
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter password"
    />
  </Form.Group>

  <div className="d-flex justify-content-between">
    <Button variant="primary" type="submit" className="w-50">
      Register
    </Button>

    <Button
      variant="secondary"
      className="w-50 ms-3"
      onClick={() => window.location.href = "/login"}
    >
      Login
    </Button>
  </div>
</Form>

          </Col>
        </Row>
      </div>

    </>
  );
};

export default Register;