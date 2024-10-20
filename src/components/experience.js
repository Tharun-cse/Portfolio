import React, { useState, useEffect, useRef } from 'react';
import './experience.css';

const ExperienceItem = () => {
  const [showMore, setShowMore] = useState(false);
  const experienceRef = useRef(null);

  const handleViewMore = () => {
    setShowMore(prev => !prev);

    setTimeout(() => {
      const moreContent = document.getElementById('more-content');
      if (moreContent && !showMore) {
        const yOffset = -640;
        const y = moreContent.getBoundingClientRect().bottom + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });
      }
    }, 0);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div className="experience-wrapper" id="experience">
      <h2 className="experience-heading">
        <span style={{ color: '#FFFFFF' }}>My</span>
        <span style={{ color: '#66FCF1' }}> Experience</span>
      </h2>
      <div className="experience-section" ref={experienceRef}>
        <div className="company-info">
          <div className="vertical-line"></div>
          <h3 className="company-name">YOURO</h3>
        </div>
        <div className="role-details">
          <p className="role-title">Full Stack Developer</p>
          <div className="company-infoss">
            <p className="company-full-name">Youro Health, Buffalo, New York, USA</p>
          </div>
          <p className="role-duration">August 2024 - Present</p>
          <ul className="role-description">
            <li>
              <span className="description">Designed and developed a health platform using Java Spring Boot and React, connecting urologists and patients for efficient diagnosis and communication, and created wireframes for web and mobile pages using Figma to ensure mobile responsiveness.</span>
            </li>
            <li>
              <span className="description">Implemented dynamic forms for customized follow-up questions, enhancing diagnostic accuracy based on patient responses and integrated real-time chat using WebSockets for smooth communication, including message delivery, read receipts, and integrated Google Meet for video consultations.</span>
            </li>
            {showMore && (
              <div id="more-content">
                <li>
                  <span className="description">Incorporating e-prescriptions for pharmacy integration, streamlining prescription management for patients.</span>
                </li>
              </div>
            )}
          </ul>
          <button className="more-info-button" onClick={handleViewMore}>
            {showMore ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
