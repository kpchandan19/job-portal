import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import signupIllustration from '../assets/signup_illustration.png';

const Register = () => {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <Row className="g-0">
                    <Col md={6} className="d-none d-md-block">
                        <div className="auth-image-side h-100">
                            <img
                                src={signupIllustration}
                                alt="Signup Illustration"
                                className="img-fluid"
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="auth-form-side">
                            <div className="mb-4">
                                <h2 className="fw-bold mb-2">Create Account</h2>
                                <p className="text-muted">Start your job search journey today.</p>
                            </div>

                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter full name" className="py-2" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">Mobile Number</Form.Label>
                                            <Form.Control type="tel" placeholder="Enter mobile number" className="py-2" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-medium">Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" className="py-2" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-medium">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Create password" className="py-2" />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-medium d-block mb-2">Work Status</Form.Label>
                                    <div className="d-flex gap-3 p-3 border rounded bg-light">
                                        <Form.Check
                                            type="radio"
                                            label="I'm Experienced"
                                            name="workStatus"
                                            id="experienced"
                                            className="fw-medium"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="I'm a Fresher"
                                            name="workStatus"
                                            id="fresher"
                                            className="fw-medium"
                                        />
                                    </div>
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100 py-2 mb-3 fw-bold">
                                    Register Now
                                </Button>

                                <div className="text-center mb-3">
                                    <span className="text-muted small">Or sign up with</span>
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
                                        Already have an account? <Link to="/login" className="fw-bold text-primary text-decoration-none">Login here</Link>
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

export default Register;
