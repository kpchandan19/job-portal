import React, { useContext } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { JobContext } from '../context/JobContext';
import JobCard from '../components/JobCard';

const Home = () => {
    const { filteredJobs, filters, setFilters } = useContext(JobContext);

    const handleSearchChange = (e) => {
        setFilters({ ...filters, search: e.target.value });
    };

    const handleLocationChange = (e) => {
        setFilters({ ...filters, location: e.target.value });
    };

    return (
        <div className="min-vh-100 d-flex flex-column">
            {/* Hero Section */}
            <div className="bg-primary py-5 text-white">
                <Container>
                    <Row className="justify-content-center text-center mb-4">
                        <Col md={8}>
                            <h1 className="fw-bold mb-3">Find your dream job now</h1>
                            <p className="lead mb-4">5 lakh+ jobs for you to explore</p>

                            <div className="bg-white p-2 rounded-pill shadow-lg d-flex flex-column flex-md-row gap-2">
                                <InputGroup className="border-0">
                                    <InputGroup.Text className="bg-transparent border-0 ps-3">
                                        <FaSearch className="text-secondary" />
                                    </InputGroup.Text>
                                    <Form.Control
                                        placeholder="Enter skills / designations / companies"
                                        className="border-0 shadow-none"
                                        value={filters.search}
                                        onChange={handleSearchChange}
                                    />
                                </InputGroup>

                                <div className="vr d-none d-md-block my-2"></div>

                                <InputGroup className="border-0">
                                    <InputGroup.Text className="bg-transparent border-0 ps-3">
                                        <FaMapMarkerAlt className="text-secondary" />
                                    </InputGroup.Text>
                                    <Form.Control
                                        placeholder="Enter location"
                                        className="border-0 shadow-none"
                                        value={filters.location}
                                        onChange={handleLocationChange}
                                    />
                                </InputGroup>

                                <Button variant="primary" className="rounded-pill px-4 fw-bold">
                                    Search
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Job Listings */}
            <Container className="py-5">
                <h3 className="fw-bold mb-4">Featured Jobs</h3>
                <Row>
                    <Col md={8}>
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map(job => (
                                <JobCard key={job.id} job={job} />
                            ))
                        ) : (
                            <div className="text-center py-5">
                                <h5>No jobs found matching your criteria.</h5>
                            </div>
                        )}
                    </Col>
                    <Col md={4}>
                        {/* Sidebar / Ad placeholder */}
                        <div className="bg-light p-4 rounded mb-3">
                            <h5 className="fw-bold mb-3">Get Personalised Recommendations</h5>
                            <p className="text-muted small">Registering gives you the benefit to browse & apply to variety of jobs based on your preferences</p>
                            <Button variant="outline-primary" className="w-100">Register Now</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
