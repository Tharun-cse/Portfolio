import React, { useEffect, useRef, useState } from 'react';
import './project.css';
import proj1 from '../images/proj1.png';
import proj2 from '../images/proj2.png';
import proj3 from '../images/proj3.png'; // Image for project 3
import proj4 from '../images/proj4.png'; // Image for project 4
import proj5 from '../images/proj5.png'; // Image for project 5
import proj6 from '../images/proj6.png'; // Image for project 6
import proj7 from '../images/proj7.png'; // Image for project 7
import proj8 from '../images/proj8.png'; // Image for project 8

const Projects = () => {
  const [firstVisible, setFirstVisible] = useState(false);
  const [secondVisible, setSecondVisible] = useState(false);
  const [thirdVisible, setThirdVisible] = useState(false);
  const [fourthVisible, setFourthVisible] = useState(false);
  const [fifthVisible, setFifthVisible] = useState(false);
  const [sixthVisible, setSixthVisible] = useState(false);
  const [seventhVisible, setSeventhVisible] = useState(false);
  const [eighthVisible, setEighthVisible] = useState(false);

  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);
  const fifthSectionRef = useRef(null);
  const sixthSectionRef = useRef(null);
  const seventhSectionRef = useRef(null);
  const eighthSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === firstSectionRef.current && entry.isIntersecting) {
            setFirstVisible(true);
          }
          if (entry.target === secondSectionRef.current && entry.isIntersecting) {
            setSecondVisible(true);
          }
          if (entry.target === thirdSectionRef.current && entry.isIntersecting) {
            setThirdVisible(true);
          }
          if (entry.target === fourthSectionRef.current && entry.isIntersecting) {
            setFourthVisible(true);
          }
          if (entry.target === fifthSectionRef.current && entry.isIntersecting) {
            setFifthVisible(true);
          }
          if (entry.target === sixthSectionRef.current && entry.isIntersecting) {
            setSixthVisible(true);
          }
          if (entry.target === seventhSectionRef.current && entry.isIntersecting) {
            setSeventhVisible(true);
          }
          if (entry.target === eighthSectionRef.current && entry.isIntersecting) {
            setEighthVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (firstSectionRef.current) {
      observer.observe(firstSectionRef.current);
    }
    if (secondSectionRef.current) {
      observer.observe(secondSectionRef.current);
    }
    if (thirdSectionRef.current) {
      observer.observe(thirdSectionRef.current);
    }
    if (fourthSectionRef.current) {
      observer.observe(fourthSectionRef.current);
    }
    if (fifthSectionRef.current) {
      observer.observe(fifthSectionRef.current);
    }
    if (sixthSectionRef.current) {
      observer.observe(sixthSectionRef.current);
    }
    if (seventhSectionRef.current) {
      observer.observe(seventhSectionRef.current);
    }
    if (eighthSectionRef.current) {
      observer.observe(eighthSectionRef.current);
    }

    return () => {
      if (firstSectionRef.current) {
        observer.unobserve(firstSectionRef.current);
      }
      if (secondSectionRef.current) {
        observer.unobserve(secondSectionRef.current);
      }
      if (thirdSectionRef.current) {
        observer.unobserve(thirdSectionRef.current);
      }
      if (fourthSectionRef.current) {
        observer.unobserve(fourthSectionRef.current);
      }
      if (fifthSectionRef.current) {
        observer.unobserve(fifthSectionRef.current);
      }
      if (sixthSectionRef.current) {
        observer.unobserve(sixthSectionRef.current);
      }
      if (seventhSectionRef.current) {
        observer.unobserve(seventhSectionRef.current);
      }
      if (eighthSectionRef.current) {
        observer.unobserve(eighthSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="projects-wrapper" id="projects">
      <h2 className="projects-heading">
        <span style={{ color: '#FFFFFF' }}>My</span>
        <span style={{ color: '#66FCF1' }}> Projects</span>
      </h2>

      {/* Project 1 - Image on the Left */}
      <div
        className={`project-section ${firstVisible ? 'slide-in-left' : ''}`}
        ref={firstSectionRef}
      >
        <div className="project-card">
          <div className="project-image">
            <img src={proj1} alt="Project Thumbnail 1" className="project-thumbnail" />
          </div>
          <div className="project-details">
            <div className="project-number">01</div>
            <h3 className="project-title">Calorie Estimation Of Food Images
                <a
                  href="https://github.com/your_github_username/your_repository" // Replace with your GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '10px', color: '#E85A4F' }} // Adjust styles as needed
                >
                  <i className="fab fa-github"></i>
                </a>
            </h3>
            <p className="project-description">
              Implemented object detection using YOLO to identify and label food items in images with bounding boxes and confidence scores, and utilized the MiDaS model for depth estimation. Created stereo images and performed 3D reconstruction, calculating disparity maps, generating 3D point clouds, and constructing a convex hull to estimate food volume and calories by using predefined food density values.
            </p>
            <div className="tech-stack">
              <div className="tech-item">Computer Vision</div>
              <div className="tech-item">Python</div>
              <div className="tech-item">Depth Estimation</div>
              <div className="tech-item">MiDaS</div>
              <div className="tech-item">YOLO</div>
              <div className="tech-item">3d Reconstruction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 - Image on the Right */}
      <div
        className={`project-section ${secondVisible ? 'slide-in-right' : ''}`}
        ref={secondSectionRef}
      >
        <div className="project-card reverse-layout">
          <div className="project-details">
            <div className="project-number">02</div>
            <h3 className="project-title">Deep Fake News Detection
                <a
                  href="https://github.com/your_github_username/your_repository" // Replace with your GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '10px', color: '#E85A4F' }} // Adjust styles as needed
                >
                  <i className="fab fa-github"></i>
                </a>
            </h3>
            <p className="project-description">
              Used advanced techniques to detect deep fake content. Implemented an AI model to differentiate between real and manipulated news using various text and image analysis methods.
              Implemented multiple advanced models for classification, including ResNet, GRU, Transformers, Deep
              BERT, BERT-CNN, and BERT-CNN-LSTM (Hybrid) and used NLP for pre=processing the data
              Applied GloVe embeddings for word representations in combination with transformer-based architectures.
            </p>
            <div className="tech-stack">
              <div className="tech-item">Machine Learning</div>
              <div className="tech-item">MiDaS</div>
              <div className="tech-item">Pytorch</div>
              <div className="tech-item">Matplotlib</div>
              <div className="tech-item">Tensorflow</div>
              <div className="tech-item">Flask</div>
            </div>
          </div>
          <div className="project-image">
            <img src={proj2} alt="Project Thumbnail 2" className="project-thumbnail" />
          </div>
        </div>
      </div>

      {/* Project 3 - Image on the Left */}
      <div
        className={`project-section ${thirdVisible ? 'slide-in-left' : ''}`}
        ref={thirdSectionRef}
      >
        <div className="project-card">
          <div className="project-image">
            <img src={proj3} alt="Project Thumbnail 3" className="project-thumbnail" />
          </div>
          <div className="project-details">
            <div className="project-number">03</div>
            <h3 className="project-title">Cloud Intrusion Detection System
                <a
                  href="https://github.com/your_github_username/your_repository" // Replace with your GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '10px', color: '#E85A4F' }} // Adjust styles as needed
                >
                  <i className="fab fa-github"></i>
                </a>
            </h3>
            <p className="project-description">
              Created a dataset by collecting network traffic by generating attacks from Kali Linux VM to Metasploitable 2
              VM and storing the data in a CSV file.
              Developed a hybrid ensemble model (with a genetic algorithm), combination of Decision Tree and LSTM to predict
              incoming packets coming from the cloud (Microsoft Azure), and deployed the model in Azure Cloud.
            </p>
            <div className="tech-stack">
              <div className="tech-item">Kali Linux</div>
              <div className="tech-item">Metasploitable</div>
              <div className="tech-item">Machine Learning</div>
              <div className="tech-item">Python</div>
              <div className="tech-item">Virtual Machine</div>
              <div className="tech-item">Azure</div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 4 - Image on the Right */}
      <div
        className={`project-section ${fourthVisible ? 'slide-in-right' : ''}`}
        ref={fourthSectionRef}
      >
        <div className="project-card reverse-layout">
          <div className="project-details">
            <div className="project-number">04</div>
            <h3 className="project-title">College Media
                <a
                  href="https://github.com/Tharun-cse/College-media" // Replace with your GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '10px', color: '#E85A4F' }} // Adjust styles as needed
                >
                  <i className="fab fa-github"></i>
                </a>
            </h3>
            <p className="project-description">
              Designed a chat web application tailored for CEG students, featuring individual and group chat functionalities to facilitate communication with peers and seniors. The platform also serves as a hub for learning about college events and clubs, fostering a sense of community. I contributed to the backend by implementing a robust database using PHPMyAdmin, ensuring efficient data storage and retrieval. On the frontend, I focused on enhancing the user experience with responsive styling and interactive elements using HTML, CSS, Bootstrap, JavaScript, and jQuery. The project integrates PHP and MySQL to enable real-time messaging and dynamic content updates.
            </p>
            <div className="tech-stack">
              <div className="tech-item">PHP</div>
              <div className="tech-item">PHPMyAdminL</div>
              <div className="tech-item">JavaScript</div>
              <div className="tech-item">jQuery</div>
              <div className="tech-item">HTML</div>
              <div className="tech-item">CSS</div>
              <div className="tech-item">Bootstrap</div>
            </div>
          </div>
          <div className="project-image">
            <img src={proj4} alt="Project Thumbnail 4" className="project-thumbnail" />
          </div>
        </div>
      </div>

      {/* Project 5 - Image on the Left */}
      <div
        className={`project-section ${fifthVisible ? 'slide-in-left' : ''}`}
        ref={fifthSectionRef}
      >
        <div className="project-card">
          <div className="project-image">
            <img src={proj5} alt="Project Thumbnail 5" className="project-thumbnail" />
          </div>
          <div className="project-details">
            <div className="project-number">05</div>
            <h3 className="project-title">Chrome Extension
                <a
                  href="https://github.com/Tharun-cse/GPA-CALCULATOR" // Replace with your GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '10px', color: '#E85A4F' }} // Adjust styles as needed
                >
                  <i className="fab fa-github"></i>
                </a>
            </h3>
            <p className="project-description">
              Developed a Chrome extension to automate GPA calculations for CEG students by fetching grades directly from the university portal. It computes GPA based on set criteria, handles errors for incomplete results, and integrates with Chrome notifications for updates, streamlining academic performance tracking.
            </p>
            <div className="tech-stack">
              <div className="tech-item">JavaScript</div>
              <div className="tech-item">jQuery</div>
              <div className="tech-item">Chrome Extension API</div>
              <div className="tech-item">HTML</div>
              <div className="tech-item">CSS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 6 - Image on the Right */}
      <div
        className={`project-section ${sixthVisible ? 'slide-in-right' : ''}`}
        ref={sixthSectionRef}
      >
        <div className="project-card reverse-layout">
          <div className="project-details">
            <div className="project-number">06</div>
            <h3 className="project-title">Chat Bot
                <a
                  href="https://github.com/Tharun-cse/Chatbot" // Replace with your GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '10px', color: '#E85A4F' }} // Adjust styles as needed
                >
                  <i className="fab fa-github"></i>
                </a>
            </h3>
            <p className="project-description">
               Built an emotion recognition chatbot using a generative model (GPT) to analyze user sentiment and generate responses. It processes text with NLP techniques, detects emotions, and tailors replies accordingly. Neutral queries are handled by querying a database for accurate answers
            </p>
            <div className="tech-stack">
              <div className="tech-item">Python</div>
              <div className="tech-item">NLTK</div>
              <div className="tech-item">Pytorch</div>
              <div className="tech-item">GPT-2</div>
              <div className="tech-item">Flask</div>
              <div className="tech-item">DialogFlow</div>
            </div>
          </div>
          <div className="project-image">
            <img src={proj6} alt="Project Thumbnail 6" className="project-thumbnail" />
          </div>
        </div>
      </div>

      {/* Project 7 - Image on the Left */}
      <div
        className={`project-section ${seventhVisible ? 'slide-in-left' : ''}`}
        ref={seventhSectionRef}
      >
        <div className="project-card">
          <div className="project-image">
            <img src={proj7} alt="Project Thumbnail 7" className="project-thumbnail" />
          </div>
          <div className="project-details">
            <div className="project-number">07</div>
            <h3 className="project-title">Garbage Classification
                <a
                  href="https://github.com/Tharun-cse/GarbageClassification" // Replace with your GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '10px', color: '#E85A4F' }} // Adjust styles as needed
                >
                  <i className="fab fa-github"></i>
                </a>
            </h3>
            <p className="project-description">
              Developed a machine learning model for garbage classification by gathering and organizing trash images into specific categories to create a comprehensive dataset. I deployed various machine learning algorithms to evaluate their performance and determined the most effective one for accurately classifying the dataset. Using the best algorithm, I conducted in-class classification to identify the predominant type of garbage present in the analyzed images
            </p>
            <div className="tech-stack">
              <div className="tech-item">Python</div>
              <div className="tech-item">Numpy</div>
              <div className="tech-item">Pandas</div>
              <div className="tech-item">Tensorflow</div>
              <div className="tech-item">Pytorch</div>
              <div className="tech-item">Matplotlib</div>
              <div className="tech-item">scikit-learn</div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 8 - Image on the Right */}
      <div
        className={`project-section ${eighthVisible ? 'slide-in-right' : ''}`}
        ref={eighthSectionRef}
      >
        <div className="project-card reverse-layout">
          <div className="project-details">
            <div className="project-number">08</div>
            <h3 className="project-title">Portfolio Website
                <a
                  href="https://your-deployed-project-url.com" // Replace with your deployed project URL
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '10px', color: '#E85A4F' }} // Adjust styles as needed
                >
                  <i className="fas fa-link"></i> {/* Link icon */}
                </a>
            </h3>
            <p className="project-description">
              Developed a personal portfolio website to showcase my projects and skills. Implemented responsive design and smooth transitions for an enhanced user experience.
            </p>
            <div className="tech-stack">
              <div className="tech-item">React.js</div>
              <div className="tech-item">CSS</div>
              <div className="tech-item">HTML</div>
            </div>
          </div>
          <div className="project-image">
            <img src={proj8} alt="Project Thumbnail 8" className="project-thumbnail" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
