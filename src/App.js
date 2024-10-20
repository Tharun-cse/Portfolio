import React from 'react';
import './App.css';
import Particles from "@tsparticles/react";  // Use the updated package name
import { loadFull } from "tsparticles";      // This remains the same
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ParticlesComponent from './components/particle';
import EducationItem from './components/education';
import SkillsItem from './components/skills';
import Projects from './components/projects';
import ExperienceItem from './components/experience';
import ContactMe from './components/contactme';
import Footer from './components/footer';
import { ReactTyped } from 'react-typed';
import pic from './images/profile.jpg';
import { useState } from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar = () => {
    const navBarHeight = 40; // Adjust this value according to your actual navbar height

    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);

        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navBarHeight - 20; // Adding extra offset for better visibility

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span style={{ color: '#66FCF1', fontFamily: 'Luminari, fantasy', fontSize: '32px' }}> {`< Tharun />`}</span>
            </div>
            <div className="navbar-middle">
                <div className="middle-container">
                    <ul className="nav-list">
                        <li className="nav-item" onClick={() => handleScrollToSection('home')}>Home</li>
                        <li className="nav-item" onClick={() => handleScrollToSection('education')}>Education</li>
                        <li className="nav-item" onClick={() => handleScrollToSection('skills')}>Skills</li>
                        <li className="nav-item" onClick={() => handleScrollToSection('experience')}>Experience</li>
                        <li className="nav-item" onClick={() => handleScrollToSection('projects')}>Projects</li>
                    </ul>
                </div>
            </div>
            <div className="navbar-right">
                <button className="contact-button" onClick={() => handleScrollToSection('Contact')}>Contact Me</button>
            </div>
        </nav>
    );
};

const Intro = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <div style={styles.intro} className="main-text">
            <div className="main-text-sub1">
            <div style={styles.staticText}>
                <span style={styles.hi}>Hey!</span> <span style={styles.name}>I'm Tharun Gangaraju</span>
            </div>
            <div style={styles.typedText}>
                <ReactTyped
                    strings={[
                        `<span style="color: #FFFFFF;">Full stack</span> <span style="color: #66FCF1;">Developer.</span>`,
                        `<span style="color: #FFFFFF;">ML/AI</span> <span style="color: #66FCF1;">Engineer.</span>`,
                        `<span style="color: #66FCF1;">Coding</span> <span style="color: #FFFFFF;">Aficionado.</span>`,
                        `<span style="color: #FFFFFF;">Anime</span> <span style="color: #66FCF1;">Fan.</span>`,
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    startDelay={500}
                    backDelay={1000}
                    loop={true}
                    showCursor={true}
                    cursorChar="|"
                    smartBackspace={true}
                />
            </div>
            <div style={styles.buttonContainer} className='button-container'>
                <button style={styles.button} onClick={() => window.location.href = '/Tharun_Resume.pdf'} className='dw-cv'>
                    Download Resume
                </button>
                <button style={styles.button} onClick={handleFlip} className='abt-me'>
                    About Me
                </button>
            </div>
            </div>
            <div className="main-text-sub2">
                <div className="flip-card"><HexagonImage isFlipped={isFlipped} /></div>
            </div>
        </div>
    );
};

// Basic Styling
const styles = {
    intro: {
        textAlign: 'center',
    },
    staticText: {
        fontSize: '57px',  // Font size for the static text
        fontFamily: 'Georgia, sans-serif',
        color: '#ffffff',
        marginBottom: '3%', // Spacing between the static and animated text
        marginRight: '-6%',
    },
    hi: {
        color: '#66FCF1', // Color for "Hi,"
    },
    name: {
        color: '#ffffff', // Color for "I am Tharun"
    },
    typedText: {
        fontSize: '45px',  // Font size for the animated text
        fontFamily: 'DejaVu Sans Mono, monospace',
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '18px',
        fontFamily: 'Luminari, fantasy',
        backgroundColor: '#66FCF1',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

const HexagonImage = ({ isFlipped }) => {
    return (
    <>
        <div className="hexagon-container">
            <div className={`hexagon ${isFlipped ? 'flipped' : ''}`}>
                <div className="hexagon-front">
                    <img
                        src={pic} // Replace with the path to your image
                        alt="Tharun"
                        className="hexagon-image"
                    />
                </div>
                <div className="hexagon-back">
                    <p
                        className="about-text"
                        style={{
                            wordBreak: "break-word",
                            whiteSpace: "normal",
                            padding: "10px",
                            color: '#EEEEEE',
                            fontWeight: "500",
                            fontFamily: "DejaVu Sans Mono, monospace",
                            fontSize: '13.55px',
                        }}
                    >
                    <span style={{ color: '#66FCF1' }}>function</span> Tharun () &#123;<br />
                        <div style={{ paddingLeft: '20px' }}>
                            <span style={{ paddingLeft: '0px' }}>
                                <span style={{ color: '#66FCF1' }}> int </span> age = <span style={{ color: '#D6D5A8' }}>22</span>;<br />
                                <span style={{ color: '#66FCF1' }}>while</span> (age) &#123;<br />
                                <div style={{ paddingLeft: '40px' }}>
                                    field = <span style={{ color: '#D6D5A8' }}>"Computer Science Major"</span><br />
                                    roles = [<span style={{ color: '#D6D5A8' }}>"Full Stack Development"</span>, <span style={{ color: '#D6D5A8' }}>"AI & ML Engineer"</span>]<br />
                                    learningHabit = [<span style={{ color: '#D6D5A8' }}>"Problem Solving"</span>, <span style={{ color: '#D6D5A8' }}>"Always exploring something new"</span>]<br />
                                    enjoyment = <span style={{ color: '#D6D5A8' }}>"Solving coding problems"</span><br />
                                    funFact = <span style={{ color: '#D6D5A8' }}>"Tells lame jokes, surprisingly gets laughs"</span><br />
                                    entertainment = [<span style={{ color: '#D6D5A8' }}>"Anime Fan"</span>, <span style={{ color: 'D6D5A8' }}>"Movie Lover"</span>]<br /><br />
                                    age++;<br />
                                </div>
                                &#125;<br />
                            </span>
                        </div>
                    &#125;<br />
                    <span style={{ color: '#66FCF1' }}>Tharun ()</span>;
                    </p>
                </div>

            </div>
        </div>
    </>
    );
};


function App() {

  return (
    <div className="App" id = "home">
      {/* Navigation Bar */}
      <ParticlesComponent id="particles" />
      <div className = "app-nav-maine">
          <div className="navi">
              <NavBar />
          </div>
          <div className = "maine">
              <Intro />
          </div>
          <div className="centered-text">
              <span style={{ color: '#EEEEEE' }}>CODE. </span>
              <span style={{ color: '#66FCF1' }}>GRIND. </span>
              <span style={{ color: '#EEEEEE' }}>REPEAT.</span>
          </div>
      </div>
      <div className="education-tab" id="education">
        <EducationItem />
      </div>
      <div className="skills-tab" id="skills">
        <SkillsItem />
      </div>
      <div className="experience-tab" id="experience">
         <ExperienceItem />
       </div>
       <div className="projects-tab" id="projects">
          <Projects />
      </div>
      <div className="contact-me-tab" id="Contact">
          <ContactMe />
      </div>
      <Footer />
    </div>
  );
}



export default App;
