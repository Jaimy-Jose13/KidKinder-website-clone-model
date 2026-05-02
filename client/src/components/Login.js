import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

// react-bootstrap
import { Card, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';

// third party
import FeatherIcon from 'feather-icons-react';

export const Login = () => {

    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Example admin credentials
    if (email === "admin@gmail.com" && password === "admin123") {
    localStorage.setItem("isAdmin", "true");
    navigate("/dashboard/classes-list");   // 🔥 Redirect here
    } else {
      alert("Invalid Credentials");
    }
      
  };
  useEffect(() => {
  if (localStorage.getItem("isAdmin") === "true") {
    navigate("/dashboard/classes-list");
  }
}, []);


  return (
     <div className="auth-wrapper">
      <div className="auth-content text-center">
        <Form onSubmit={handleLogin}>
        <Card className="borderless">
          <Row className="align-items-center text-center">
            <Col>
              <Card.Body className="card-body">
                {/* <img src={logoDark} alt="" className="img-fluid mb-4" /> */}
                <h4 className="mb-3 f-w-400">Signin</h4>
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FeatherIcon icon="mail" />
                  </InputGroup.Text>
                  <Form.Control type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FeatherIcon icon="lock" />
                  </InputGroup.Text>
                  <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </InputGroup>
                <Form.Group>
                  <Form.Check type="checkbox" className="text-left mb-4 mt-2" label="Save Credentials." defaultChecked />
                </Form.Group>
                <Button className="btn btn-block btn-primary mb-4" type="submit">Signin</Button>
                <p className="mb-2 text-muted">
                  Forgot password?{' '}
                  <NavLink to="#" className="f-w-400">
                    Reset
                  </NavLink>
                </p>
                <p className="mb-0 text-muted">
                  Don’t have an account?{' '}
                  <NavLink to="/register" className="f-w-400">
                    Signup
                  </NavLink>
                </p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        </Form>
      </div>
    </div>
  )
}
