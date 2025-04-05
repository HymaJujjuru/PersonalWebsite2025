import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="section home" id="home">
      <h2>Welcome to My Personal Website</h2>
      <p>Hi, I'm [Your Name], a Computer Science major with a passion for coding and technology!</p>
    </div>
  );
}

function Resume() {
  return (
    <div className="section resume" id="resume">
      <h2>Resume</h2>
      <ul className="skills-list">
        <li>Programming Languages: Python, JavaScript, C++, Java</li>
        <li>Web Development: HTML, CSS, React, Node.js</li>
        <li>Machine Learning & AI: PyTorch, TensorFlow, Scikit-learn</li>
        <li>Data Management: SQL, MongoDB, PostgreSQL</li>
        <li>Tools: Git, Docker, Kubernetes, AWS</li>
      </ul>

      <div className="resume-section">
        <h3>Resume</h3>
        
        <div className="resume-item">
          <h4>Education</h4>
          <p><strong>Bachelor of Science in Computer Science</strong></p>
          <p>University of [Your University] — [Year Started] to [Expected Graduation Year]</p>
          <p>Relevant Coursework: Data Structures, Algorithms, Machine Learning, Web Development</p>
        </div>

        <div className="resume-item">
          <h4>Experience</h4>
          <div>
            <p><strong>Software Engineering Intern</strong> — [Company Name]</p>
            <p>[Month/Year] - [Month/Year]</p>
            <ul>
              <li>Worked on a team to develop and optimize web applications</li>
              <li>Collaborated with cross-functional teams to integrate new features</li>
              <li>Contributed to the development of a real-time database system</li>
            </ul>
          </div>

          <div>
            <p><strong>Research Assistant</strong> — [Department Name], [University Name]</p>
            <p>[Month/Year] - [Month/Year]</p>
            <ul>
              <li>Developed machine learning models for natural language processing tasks</li>
              <li>Assisted in analyzing large datasets using Python and SQL</li>
              <li>Published research paper in [Journal Name]</li>
            </ul>
          </div>
        </div>

        <div className="resume-item">
          <h4>Projects</h4>
          <div>
            <p><strong>Real-time Speech-to-Text System</strong></p>
            <ul>
              <li>Developed a deep learning-based model for speech recognition</li>
              <li>Integrated system into a Python application for real-time transcription</li>
            </ul>
          </div>

          <div>
            <p><strong>Personal Finance Tracker</strong></p>
            <ul>
              <li>Built a full-stack web application to track and manage finances</li>
              <li>Used React for the frontend and Node.js for the backend</li>
              <li>Deployed the app using AWS EC2 and S3</li>
            </ul>
          </div>
        </div>

        <div className="resume-item">
          <h4>Certifications</h4>
          <ul>
            <li>Certified Python Developer — [Issuing Organization], [Year]</li>
            <li>AWS Certified Solutions Architect — [Issuing Organization], [Year]</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="section about" id="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm [Your Name], a passionate Computer Science major with a focus on Artificial Intelligence and Machine Learning. I’m deeply interested in solving real-world problems using technology and am always looking to learn new skills.
      </p>
      <p>
        Throughout my academic journey, I have developed strong skills in programming, data analysis, and web development. I’ve had the opportunity to work on various projects that involved machine learning algorithms, real-time systems, and web applications.
      </p>
      <p>
        Outside of coding, I enjoy cooking, playing chess, and exploring new technological innovations. I believe that technology can empower individuals and transform the way we live and work.
      </p>
    </div>
  );
}

function Projects() {
  return (
    <div className="section projects" id="projects">
      <h2>Projects</h2>
      <ul>
        <li>Machine Learning Algorithm for Image Classification</li>
        <li>Personal Finance Tracker Web App</li>
        <li>Real-time Speech-to-Text using Deep Learning</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="section contact" id="contact">
      <h2>Contact</h2>
      <p>Email: your.email@example.com</p>
      <p>GitHub: <a href="https://github.com/yourprofile">github.com/yourprofile</a></p>
    </div>
  );
}

function App() {
  const [activeLink, setActiveLink] = useState('/');

  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/" onClick={() => setActiveLink('/')}>Home</Link></li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">About</button>
                <div className="dropdown-content">
                  <Link to="/about" onClick={() => setActiveLink('/about')}>About Me</Link>
                  <Link to="/resume" onClick={() => setActiveLink('/resume')}>Resume</Link>
                </div>
              </div>
            </li>
            <li><Link to="/projects" onClick={() => setActiveLink('/projects')}>Projects</Link></li>
            <li><Link to="/contact" onClick={() => setActiveLink('/contact')}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
