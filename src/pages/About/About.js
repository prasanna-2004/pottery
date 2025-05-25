import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>Our Story</h1>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>The ClayCraft Journey</h2>
          <p>
            Founded in 2015 by master potter Elena Rodriguez, ClayCraft began 
            as a small studio in the mountains of New Mexico. What started as 
            a passion project quickly grew into a thriving community of artisans 
            dedicated to preserving traditional pottery techniques.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Process</h2>
          <p>
            Each piece is handcrafted using locally sourced clay and natural 
            glazes. We use wheel-throwing, hand-building, and slip-casting 
            techniques to create functional art that brings beauty to everyday life.
          </p>
          <ul className="process-steps">
            <li>Clay preparation and wedging</li>
            <li>Forming on the wheel or by hand</li>
            <li>Drying and first firing (bisque)</li>
            <li>Glazing and final firing</li>
            <li>Quality inspection</li>
          </ul>
        </div>

        <div className="about-section team-section">
          <h2>Meet the Artisans</h2>
          <div className="team-members">
            <div className="team-member">
              <div className="member-image placeholder-1"></div>
              <h3>Elena Rodriguez</h3>
              <p>Founder & Master Potter</p>
            </div>
            <div className="team-member">
              <div className="member-image placeholder-2"></div>
              <h3>Marcus Chen</h3>
              <p>Glazing Specialist</p>
            </div>
            <div className="team-member">
              <div className="member-image placeholder-3"></div>
              <h3>Sophie Williams</h3>
              <p>Hand-Building Artist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;