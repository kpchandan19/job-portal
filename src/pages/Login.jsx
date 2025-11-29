import React, { useState, useContext } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { JobContext } from '../context/JobContext';
import loginIllustration from '../assets/login_illustration.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(JobContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            login(email, password);
            navigate('/');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <Row className="g-0">
                    <Col md={6} className="d-none d-md-block">
                        <div className="auth-image-side h-100">
                            <img
                                src={loginIllustration}
                                alt="Login Illustration"
                                className="img-fluid"
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="auth-form-side">
                            <div className="mb-4">
                                <h2 className="fw-bold mb-2">Welcome Back!</h2>
                                <p className="text-muted">Please enter your details to sign in.</p>
                            </div>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-medium">Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="py-2"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-medium">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="py-2"
                                    />
                                </Form.Group>

                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <Form.Check
                                        type="checkbox"
                                        label="Remember me"
                                        id="remember-me"
                                    />
                                    <a href="#" className="text-decoration-none small">Forgot Password?</a>
                                </div>

                                <Button variant="primary" type="submit" className="w-100 py-2 mb-3 fw-bold">
                                    Sign In
                                </Button>

                                <div className="text-center mb-3">
                                    <span className="text-muted small">Or continue with</span>
                                </div>

                                <div className="d-flex gap-2 mb-4">
                                    <Button variant="outline-light" className="social-btn w-100 d-flex align-items-center justify-content-center gap-2">
                                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="20" height="20" />
                                        Google
                                    </Button>
                                    <Button variant="outline-light" className="social-btn w-100 d-flex align-items-center justify-content-center gap-2">
                                        <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" width="20" height="20" />
                                        LinkedIn
                                    </Button>
                                </div>

                                <div className="text-center">
                                    <p className="mb-0 text-muted">
                                        Don't have an account? <Link to="/register" className="fw-bold text-primary text-decoration-none">Register here</Link>
                                    </p>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Login;
