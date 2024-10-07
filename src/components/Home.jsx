import React from 'react';
import '../App.css';

function Home() {
    return (
        <div className="home-container">
            <h2 className="home-title">Home Page</h2>
            <p className="home-description">
                Welcome to our application! Here you can find the latest updates and features we offer.
            </p>
            <div className="home-content">
                <h3>Features</h3>
                <ul className="feature-list">
                    <li>Feature 1: User-friendly interface</li>
                    <li>Feature 2: Responsive design</li>
                    <li>Feature 3: High performance</li>
                    <li>Feature 4: Customizable options</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
