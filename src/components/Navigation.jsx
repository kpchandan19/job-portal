import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { JobContext } from '../context/JobContext';
import { FaUserCircle } from 'react-icons/fa';

const Navigation = () => {
    const { user, logout } = useContext(JobContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold text-primary fs-3">
                    JobPortal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
                        <Nav.Link as={Link} to="/companies">Companies</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    </Nav>
                    <Nav>
                        {user ? (
                            <Dropdown align="end">
                                <Dropdown.Toggle variant="light" id="dropdown-basic" className="d-flex align-items-center border-0">
                                    <FaUserCircle size={24} className="me-2 text-secondary" />
                                    <span className="d-none d-md-inline">{user.name}</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/profile">My Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <>
                                <Button as={Link} to="/login" variant="outline-primary" className="me-2 rounded-pill px-4">
                                    Login
                                </Button>
                                <Button as={Link} to="/register" variant="primary" className="rounded-pill px-4">
                                    Register
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
