import React, { useEffect, useRef, useState } from 'react';
import './education.css';
import buffalo from '../images/buffalo.png';
import ceg from '../images/CEG.png';

const EducationItem = () => {
  const [visibleSections, setVisibleSections] = useState([false, false]);
  const sectionRefs = [useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.findIndex(ref => ref.current === entry.target);
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const newVisibleSections = [...prev];
              newVisibleSections[index] = true;
              return newVisibleSections;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  return (
    <div className="education-wrapper" id="education">
      <h2 className="education-heading">
        <span style={{ color: '#EEEEEE' }}>My</span>
        <span style={{ color: '#66FCF1' }}> Education</span>
      </h2>

      {/* First Education Item */}
      <div
        className={`education-section ${visibleSections[0] ? 'slide-up' : ''}`}
        ref={sectionRefs[0]}
      >
        <div className="education-logo">
          <img src={buffalo} alt="Education Logo" className="logo-image" />
        </div>
        <div className="education-content">
          <h2 style={{ color: '#66FCF1' }}>State University Of New York At Buffalo</h2>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
            <p style={{ fontWeight: 'Bold', margin: 0, fontFamily: 'DejaVu Sans Mono, monospace' , color: '#EEEEEE' }}>Degree:</p>
            <p style={{ margin: '0 0 0 8px', fontFamily: 'monospace, fantasy', color: '#E6F5FF' }}>Master's in Computer Science</p>
          </div>
          <div style={{ marginTop: '15px' }}>
            <span style={{ fontWeight: 'Bold', margin: 0, fontFamily: 'DejaVu Sans Mono, monospace', color: '#EEEEEE' }}>Related Coursework:</span>
            <span style={{ margin: '0 0 0 8px', fontFamily: 'monospace, fantasy', color: '#E6F5FF' }}>[Analysis in Algorithms, Operating Systems, Computer Security, Data Modeling and Query Language, Machine Learning, Deep Learning, Computer Vision and Image Processing, Big Data]</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
            <p style={{ fontWeight: 'Bold', margin: 0, fontFamily: 'DejaVu Sans Mono, monospace', color: '#EEEEEE' }}>CGPA:</p>
            <p style={{ margin: '0 0 0 8px', fontFamily: 'monospace, fantasy', color: '#E6F5FF' }}> [3.85]</p>
          </div>
        </div>
      </div>

      {/* Second Education Item */}
      <div
        className={`education-section ${visibleSections[1] ? 'slide-up' : ''}`}
        ref={sectionRefs[1]}
        style={{ marginTop: '70px' }}
      >
        <div className="education-logo">
          <img src={ceg} alt="Second University Logo" className="logo-image" />
        </div>
        <div className="education-content">
          <h2 style={{ color: '#66FCF1' }}>College Of Engineering Guindy, Anna University</h2>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
            <p style={{ fontWeight: 'Bold', margin: 0, fontFamily: 'DejaVu Sans Mono, monospace', color: '#EEEEEE' }}>Degree:</p>
            <p style={{ margin: '0 0 0 8px', fontFamily: 'monospace, fantasy', color: '#E6F5FF' }}>Bachelor Of Engineering in Computer Science</p>
          </div>
          <div style={{ marginTop: '15px' }}>
            <span style={{ fontWeight: 'Bold', margin: 0, fontFamily: 'DejaVu Sans Mono, monospace', color: '#EEEEEE' }}>Related Coursework:</span>
            <span style={{ margin: '0 0 0 8px', fontFamily: 'monospace, fantasy', color: '#E6F5FF' }}>[Programming in C, Java Programming, Computer Networks, Operating Systems, Web Development, Application Development, Database Management Systems, Modern Networking Concepts, Cryptography and Network Security, Social Network Analysis, Information Security, Machine Learning, Natural Language Processing, Deep Learning, Artificial Intelligence, Game Development, Compiler Design, Computer Architecture, Object Oriented Analysis and design, Supply Chain Management]</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
            <p style={{ fontWeight: 'Bold', margin: 0, fontFamily: 'DejaVu Sans Mono, monospace', color: '#EEEEEE' }}>CGPA:</p>
            <p style={{ margin: '0 0 0 8px', fontFamily: 'monospace, fantasy', color: '#E6F5FF' }}> [8.85]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
