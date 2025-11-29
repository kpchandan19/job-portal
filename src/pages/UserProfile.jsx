import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { JobContext } from '../context/JobContext';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPen } from 'react-icons/fa';

const UserProfile = () => {
    const { user } = useContext(JobContext);

    if (!user) {
        return (
            <Container className="py-5 text-center">
                <h3>Please login to view your profile</h3>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <Row>
                <Col md={4}>
                    <Card className="border-0 shadow-sm text-center p-4 mb-4">
                        <div className="mb-3">
                            <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '100px', height: '100px' }}>
                                <FaUser size={40} className="text-secondary" />
                            </div>
                        </div>
                        <h4 className="fw-bold">{user.name}</h4>
                        <p className="text-muted">Frontend Developer</p>
                        <div className="d-flex justify-content-center gap-2 mb-3">
                            <Button variant="outline-primary" size="sm">Update Profile</Button>
                        </div>
                        <hr />
                        <div className="text-start">
                            <div className="mb-2"><FaEnvelope className="me-2 text-secondary" /> {user.email}</div>
                            <div className="mb-2"><FaPhone className="me-2 text-secondary" /> +91 98765 43210</div>
                            <div className="mb-2"><FaMapMarkerAlt className="me-2 text-secondary" /> Bangalore, India</div>
                        </div>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card className="border-0 shadow-sm p-4 mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="fw-bold">Resume</h5>
                            <Button variant="link" className="text-decoration-none">Update</Button>
                        </div>
                        <div className="p-3 bg-light rounded border border-dashed text-center">
                            <p className="mb-0 text-muted">Chand_Resume.pdf - Uploaded on Nov 20, 2025</p>
                        </div>
                    </Card>

                    <Card className="border-0 shadow-sm p-4 mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="fw-bold">Key Skills</h5>
                            <FaPen className="text-primary cursor-pointer" />
                        </div>
                        <div className="d-flex flex-wrap gap-2">
                            {['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Git'].map((skill) => (
                                <Badge key={skill} bg="white" text="dark" className="border p-2 fw-normal">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </Card>

                    <Card className="border-0 shadow-sm p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="fw-bold">Employment</h5>
                            <FaPen className="text-primary cursor-pointer" />
                        </div>
                        <div>
                            <h6 className="fw-bold">Senior Frontend Developer</h6>
                            <p className="text-muted mb-1">Tech Solutions Inc. | Full Time</p>
                            <small className="text-muted">Jun 2022 - Present</small>
                            <p className="mt-2 text-secondary">
                                Leading the frontend team and developing scalable web applications using React.
                            </p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default UserProfile;
