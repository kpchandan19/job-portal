import React, { useContext } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaMapMarkerAlt, FaRupeeSign, FaBriefcase } from 'react-icons/fa';
import { JobContext } from '../context/JobContext';

const JobCard = ({ job }) => {
    const { applyJob } = useContext(JobContext);

    return (
        <Card className="mb-3 shadow-sm border-0 hover-shadow transition-all">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                    <div>
                        <Card.Title className="fw-bold text-dark">{job.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                    </div>
                    {/* Placeholder for company logo if needed */}
                </div>

                <div className="d-flex flex-wrap gap-3 my-3 text-secondary">
                    <div className="d-flex align-items-center">
                        <FaBriefcase className="me-1" /> {job.type}
                    </div>
                    <div className="d-flex align-items-center">
                        <FaRupeeSign className="me-1" /> {job.salary}
                    </div>
                    <div className="d-flex align-items-center">
                        <FaMapMarkerAlt className="me-1" /> {job.location}
                    </div>
                </div>

                <div className="mb-3">
                    <div className="d-flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                            <Badge key={index} bg="light" text="dark" className="fw-normal border">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                    <small className="text-muted">{job.postedDate}</small>
                    <Button variant="outline-primary" size="sm" onClick={() => applyJob(job.id)}>
                        Apply Now
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default JobCard;
