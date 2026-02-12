import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>
                <motion.p
                    className="about-text"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    I am a recent Computer Science graduate (2025) from Vignan’s Lara Institute of Technology & Science.
                    I am an aspiring software engineer with skills in Java and hands-on experience in web development.
                    I am a quick learner, a team player, and eager to grow in a tech-driven environment.
                </motion.p>
            </div>
        </section>
    );
};

export default About;
