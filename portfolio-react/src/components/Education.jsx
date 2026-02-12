import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            degree: "B.Tech in Computer Science and Engineering",
            institution: "Vignan’s Lara Institute of Technology and Science, AP",
            year: "2021 – 2025",
            grade: "CGPA: 7.6 / 10"
        },
        {
            degree: "Intermediate (MPC)",
            institution: "Sri Chaitanya Junior College, Andhra Pradesh",
            year: "2019 – 2021",
            grade: "CGPA: 7.49 / 10"
        },
        {
            degree: "High School (SSC)",
            institution: "Oxford Concept School, Andhra Pradesh",
            year: "2018 – 2019",
            grade: "CGPA: 9.3 / 10"
        }
    ];

    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="timeline">
                    {educationData.map((item, index) => (
                        <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-content">
                                <h3>{item.degree}</h3>
                                <p className="institution">{item.institution}</p>
                                <span className="date">{item.year}</span>
                                <p className="grade">{item.grade}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
