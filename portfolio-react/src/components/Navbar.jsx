import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="navbar">
            <div className="container nav-container">
                <div className="logo">Krishna Sai</div>

                {/* Desktop Nav */}
                <ul className="nav-links desktop-nav">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <div className="burger" onClick={toggleNav}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            className="nav-links mobile-nav"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 100 }}
                        >
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={toggleNav}>{link.name}</a>
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
