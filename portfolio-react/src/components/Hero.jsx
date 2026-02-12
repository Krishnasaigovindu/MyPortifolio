import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Hi, I'm <span className="highlight">Krishna Sai Govindu</span>
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Aspiring Software Engineer
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Passionate about building scalable web applications and solving complex problems.
                </motion.p>
                <motion.div
                    className="cta-buttons"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <a href="#projects" className="btn primary">View My Work</a>
                    <a href="#contact" className="btn secondary">Contact Me</a>
                </motion.div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/krishna-sai-govindu-9b34b1252/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/Krishnasaigovindu" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="mailto:krishnasaigovindu789@gmail.com"><FaEnvelope /></a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
