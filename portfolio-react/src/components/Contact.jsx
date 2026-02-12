import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <div className="contact-info">
                    <p><FaPhone className="icon" /> +91 9603213209</p>
                    <p><FaEnvelope className="icon" /> krishnasaigovindu789@gmail.com</p>
                    <p><FaMapMarkerAlt className="icon" /> Guntur, Andhra Pradesh, India</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
