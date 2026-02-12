import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        { category: "Programming", skills: ["Java", "Python"] },
        { category: "Web Technologies", skills: ["HTML5", "CSS3", "JavaScript", "React"] },
        { category: "Database", skills: ["SQL", "MySQL"] },
        { category: "Tools", skills: ["Git", "GitHub", "VS Code", "Eclipse"] },
        { category: "Soft Skills", skills: ["Communication", "Teamwork", "Analytical Thinking", "Adaptability"] }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skillsData.map((category, index) => (
                        <motion.div className="skill-category" key={index} variants={itemVariants}>
                            <h3>{category.category}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, i) => (
                                    <span key={i}>{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
