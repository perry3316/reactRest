import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-section">
      <h1>About Me</h1>
      <p>Hi, I'm John Doe, a web developer based in Ludhiana, Punjab. I have a passion for creating beautiful and responsive websites using React.js and other modern technologies.</p>
      <p>I have more than 3 years of experience in web development, working on various projects for clients and personal use. Some of the skills I specialize in are:</p>
      <ul>
        <li>HTML, CSS, and JavaScript</li>
        <li>React.js and Redux</li>
        <li>Node.js and Express</li>
        <li>MongoDB and Firebase</li>
        <li>Bootstrap and Material-UI</li>
      </ul>
      <p>If you want to know more about me, you can check out my <Link to="/#projects">projects</Link> or <Link to="/#contact">contact me</Link>. I would love to hear from you and collaborate on some exciting ideas.</p>
    </div>
  );
}

export default About;
