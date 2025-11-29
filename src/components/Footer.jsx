import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5 mt-auto">
            <Container>
                <Row>
                    <Col md={3} className="mb-4">
                        <h5 className="fw-bold text-primary mb-3">JobPortal</h5>
                        <p className="text-secondary">
                            Connect with the best employers and find your dream job today.
                        </p>
                    </Col>
                    <Col md={3} className="mb-4">
                        <h6 className="fw-bold mb-3">For Candidates</h6>
                        <ul className="list-unstyled text-secondary">
                            <li><a href="#" className="text-decoration-none text-secondary">Browse Jobs</a></li>
                            <li><a href="#" className="text-decoration-none text-secondary">Browse Companies</a></li>
                            <li><a href="#" className="text-decoration-none text-secondary">Career Advice</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-4">
                        <h6 className="fw-bold mb-3">For Employers</h6>
                        <ul className="list-unstyled text-secondary">
                            <li><a href="#" className="text-decoration-none text-secondary">Post a Job</a></li>
                            <li><a href="#" className="text-decoration-none text-secondary">Employer Login</a></li>
                            <li><a href="#" className="text-decoration-none text-secondary">Pricing Plans</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-4">
                        <h6 className="fw-bold mb-3">Follow Us</h6>
                        <div className="d-flex gap-3">
                            <FaFacebook size={20} className="text-secondary cursor-pointer" />
                            <FaTwitter size={20} className="text-secondary cursor-pointer" />
                            <FaLinkedin size={20} className="text-secondary cursor-pointer" />
                            <FaInstagram size={20} className="text-secondary cursor-pointer" />
                        </div>
                    </Col>
                </Row>
                <hr className="border-secondary" />
                <div className="text-center text-secondary">
                    <small>&copy; 2025 JobPortal. All rights reserved.</small>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
