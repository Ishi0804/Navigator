
import React from 'react';
import '../App.css'; 

function About() {
    return (
        <div className="about-container">
            <h2 className="about-title">Welcome to the About Page</h2>
            <p className="about-description">
                This application is designed to provide an overview of our services and offerings.
                We are committed to delivering the best experience for our users.
            </p>
            <div className="mission-vision">
                <h3 className="about-subtitle">Our Mission</h3>
                <p className="about-text">
                    To innovate and deliver high-quality products that meet the needs of our customers.
                </p>
                <h3 className="about-subtitle">Our Vision</h3>
                <p className="about-text">
                    To be a leader in the industry, recognized for our dedication to excellence.
                </p>
            </div>
        </div>
    );
}

export default About;
