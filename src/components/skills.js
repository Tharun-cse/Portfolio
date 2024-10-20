import React, { useState } from 'react';
import './skills.css'; // Import a CSS file for styles
import buffalo from '../images/buffalo.png';
import ceg from '../images/CEG.png';
import aws from '../images/aws.svg';
import azure from '../images/microsoft-azure.svg';
import clang from '../images/c1.png';
import cpp from '../images/c-plusplus.svg';
import css from '../images/css-3.svg';
import docker from '../images/docker-icon.svg';
import express from '../images/express.png';

import figma from '../images/figma.svg';
import git from '../images/git-icon.svg';
import hadoop from '../images/hadoop.svg';
import html from '../images/html-5.svg';
import java from '../images/java.svg';
import js from '../images/javascript.svg';

import kali from '../images/kali2.png';
import keras from '../images/keras.png';
import matplotlib from '../images/matplotlib.png';
import metasploit from '../images/m2.png';
import mongo from '../images/mongodb-icon.svg';

import mysql from '../images/mysql.svg';
import node from '../images/nodejs-icon.svg';
import nosql from '../images/nosql1.png';
import numpy from '../images/numpy.png';
import cv from '../images/opencv.svg';
import pandas from '../images/pandas.png';
import postgres from '../images/postgresql.svg';
import php from '../images/php.svg';
import pyspark from '../images/spark.png';
import python from '../images/python.svg';
import pytorch from '../images/pytorch-icon.svg';
import react from '../images/react.svg';

import scikit from '../images/sklearn.png';
import spring from '../images/spring-icon.svg';
import tf from '../images/tensorflow.svg';


const SkillsItem = () => {
  // State to track the currently active skills category
  const [activeCategory, setActiveCategory] = useState('development');

  // Function to handle button clicks
  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? '' : category); // Toggle category
  };

  const getButtonClass = (category) => {
      return activeCategory === category ? 'skills-button active' : 'skills-button';
  };

  return (
    <div className="skills-wrapper">
      <h2 className="skills-heading">
        <span style={{ color: '#66FCF1' }}>Technical</span>
        <span style={{ color: '#FFFFFF' }}> Skills</span>
      </h2>

      <div className="skills-buttons">
          <button className={getButtonClass('development')} onClick={() => handleCategoryClick('development')}>
            Development
          </button>
          <button className={getButtonClass('languages')} onClick={() => handleCategoryClick('languages')}>
            Languages
          </button>
          <button className={getButtonClass('machine-learning')} onClick={() => handleCategoryClick('machine-learning')}>
            Machine Learning
          </button>
          <button className={getButtonClass('cloud-virtualization')} onClick={() => handleCategoryClick('cloud-virtualization')}>
            Cloud & Virtualization
          </button>
      </div>

      <div className="skills-logos">
        {/* Logos for Machine Learning */}
        {activeCategory === 'machine-learning' && (
          <div className="skills-category" id="machine-learning">
            <div className="logo-container">
              <div className="skill-logo-container">
                <span className="tooltip">Pytorch</span>
                <img src={pytorch} alt="Pytorch" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Numpy</span>
                <img src={numpy} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Pandas</span>
                <img src={pandas} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Matplotlib</span>
                <img src={matplotlib} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Scikit-Learn</span>
                <img src={scikit} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Tensorflow</span>
                <img src={tf} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Keras</span>
                <img src={keras} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Pyspark</span>
                <img src={pyspark} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Open-CV</span>
                <img src={cv} alt="ML Logo 2" className="skill-logo" />
              </div>
              {/* Add more logos as needed */}
            </div>
          </div>
        )}

        {/* Logos for Languages */}
        {activeCategory === 'languages' && (
          <div className="skills-category" id="languages">
            <div className="logo-container">
              <div className="skill-logo-container">
                <span className="tooltip">C</span>
                <img src={clang} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">C++</span>
                <img src={cpp} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Java</span>
                <img src={java} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Python</span>
                <img src={python} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Java Script</span>
                <img src={js} alt="ML Logo 2" className="skill-logo" />
              </div>
              {/* Add more logos as needed */}
            </div>
          </div>
        )}

        {/* Logos for Frameworks */}
        {activeCategory === 'development' && (
          <div className="skills-category" id="development">
            <div className="logo-container">
              <div className="skill-logo-container">
                <span className="tooltip">React JS</span>
                <img src={react} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Node JS</span>
                <img src={node} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Express JS</span>
                <img src={express} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">MongoDB</span>
                <img src={mongo} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Spring Boot</span>
                <img src={spring} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Figma</span>
                <img src={figma} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">PHP</span>
                <img src={php} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Hadoop</span>
                <img src={hadoop} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">HTML</span>
                <img src={html} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">CSS</span>
                <img src={css} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">MySQL</span>
                <img src={mysql} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">NoSQL</span>
                <img src={nosql} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Postgres SQL</span>
                <img src={postgres} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Git</span>
                <img src={git} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Docker</span>
                <img src={docker} alt="ML Logo 2" className="skill-logo" />
              </div>
              {/* Add more logos as needed */}
            </div>
          </div>
        )}

        {/* Logos for Virtual Machines */}
        {activeCategory === 'cloud-virtualization' && (
          <div className="skills-category" id="cloud-virtualization">
            <div className="logo-container">
              <div className="skill-logo-container">
                <span className="tooltip">Kali Linux</span>
                <img src={kali} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Metasploitable VM</span>
                <img src={metasploit} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">AWS</span>
                <img src={aws} alt="ML Logo 2" className="skill-logo" />
              </div>
              <div className="skill-logo-container">
                <span className="tooltip">Azure</span>
                <img src={azure} alt="ML Logo 2" className="skill-logo" />
              </div>
              {/* Add more logos as needed */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsItem;
