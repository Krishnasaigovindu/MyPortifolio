import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    const projectsData = [
        {
            title: "Advanced Fraud Detection in Android Applications",
            tech: "Python, TensorFlow, Scikit-learn, Androguard, MySQL",
            date: "Dec 2024 – Apr 2025",
            details: [
                "Developed a model to classify Android apps as safe or suspicious based on permission data analysis.",
                "Assisted in dataset preparation, preprocessing, and testing model accuracy on real-world APK samples.",
                "Supported report generation and documentation for performance results."
            ]
        },
        {
            title: "Hostel Room Booking & Management Web App",
            tech: "HTML, CSS, JavaScript, MySQL",
            date: "Sept 2023",
            details: [
                "Designed interface for booking and approval modules to simplify hostel allocation.",
                "Maintained booking records and generated reports, reducing manual tracking time by 85%.",
                "Collaborated with team to test database connectivity and form validations."
            ]
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3>{project.title}</h3>
                            <p className="tech-stack">{project.tech}</p>
                            <p className="date">{project.date}</p>
                            <ul>
                                {project.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
