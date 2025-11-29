import React, { createContext, useState, useEffect } from 'react';

export const JobContext = createContext();

const mockJobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Solutions Inc.",
        location: "Bangalore, India",
        salary: "₹8,00,000 - ₹12,00,000 PA",
        description: "We are looking for a skilled React developer to join our team.",
        skills: ["React", "JavaScript", "CSS", "Bootstrap"],
        postedDate: "2 days ago",
        type: "Full Time"
    },
    {
        id: 2,
        title: "Backend Engineer",
        company: "Data Systems Ltd.",
        location: "Hyderabad, India",
        salary: "₹10,00,000 - ₹15,00,000 PA",
        description: "Experience with Node.js and MongoDB is required.",
        skills: ["Node.js", "Express", "MongoDB", "AWS"],
        postedDate: "1 day ago",
        type: "Full Time"
    },
    {
        id: 3,
        title: "UI/UX Designer",
        company: "Creative Minds",
        location: "Remote",
        salary: "₹6,00,000 - ₹9,00,000 PA",
        description: "Design intuitive user interfaces for mobile and web apps.",
        skills: ["Figma", "Adobe XD", "Prototyping"],
        postedDate: "5 days ago",
        type: "Contract"
    },
    {
        id: 4,
        title: "Full Stack Developer",
        company: "Startup Hub",
        location: "Pune, India",
        salary: "₹12,00,000 - ₹18,00,000 PA",
        description: "Join a fast-paced startup environment.",
        skills: ["React", "Node.js", "PostgreSQL"],
        postedDate: "Just now",
        type: "Full Time"
    },
    {
        id: 5,
        title: "DevOps Engineer",
        company: "Cloud Corp",
        location: "Bangalore, India",
        salary: "₹15,00,000 - ₹22,00,000 PA",
        description: "Manage cloud infrastructure and CI/CD pipelines.",
        skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
        postedDate: "3 days ago",
        type: "Full Time"
    }
];

export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState(mockJobs);
    const [user, setUser] = useState(null); // { name: 'Chand', email: 'chand@example.com' }
    const [filters, setFilters] = useState({
        search: '',
        location: '',
        type: ''
    });

    const login = (email, password) => {
        // Mock login
        setUser({ name: 'Demo User', email });
        return true;
    };

    const logout = () => {
        setUser(null);
    };

    const applyJob = (jobId) => {
        alert(`Applied to job ID: ${jobId}`);
    };

    const filterJobs = () => {
        return jobs.filter(job => {
            const matchTitle = job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                job.company.toLowerCase().includes(filters.search.toLowerCase());
            const matchLocation = job.location.toLowerCase().includes(filters.location.toLowerCase());
            const matchType = filters.type ? job.type === filters.type : true;
            return matchTitle && matchLocation && matchType;
        });
    };

    return (
        <JobContext.Provider value={{
            jobs,
            user,
            login,
            logout,
            filters,
            setFilters,
            filteredJobs: filterJobs(),
            applyJob
        }}>
            {children}
        </JobContext.Provider>
    );
};
