import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="section home" id="home">
      <h2>Welcome to My Personal Website</h2>
      <p>
        Hi, I'm Hyma Jujjuru, a passionate Computer Science major with a passion for Machine Learning, especially Deep Reinforcement Learning and Large Language Models.
      </p>
      <p>
      I am an aspiring computer science student who loves to take on a challenge, has great communication and problem-solving skills, and
      passionate about machine learning and AI and analyzing data.
      </p>

      <p>
        I’m deeply interested in solving real-world problems using technology and am always looking to learn new skills.
      </p>

      <p>
        I’m deeply interested in solving real-world problems using technology and am always looking to learn new skills.
        Throughout my academic journey, I have developed strong skills in programming, data analysis, and web development. I’ve had the opportunity to work on various projects that involved machine learning algorithms, real-time systems, and web applications.
      </p>

      <p>
        Outside of coding, I enjoy cooking, listening to music, and exploring new technological innovations. I believe that technology can empower individuals and transform the way we live and work. I am a very social person and give importance to every relationship I make in life.
      </p>
    </div>
  );
}

function Resume() {
  return (
    <div className="section resume" id="resume">
      <h2>Resume</h2>
      <ul className="skills-list">
        <li>Programming Languages: Python, JavaScript, C++</li>
        <li>Web Development: HTML, CSS, React, Node.js, Handlebars</li>
        <li>Machine Learning & AI: PyTorch, TensorFlow, Transformers, Whisper</li>
        <li>Data Management: SQL, MongoDB, PostgreSQL</li>
        <li>Tools: Git, Docker, Expo, MATLAB, JupyterLab, Latex, Figma</li>
      </ul>

      <div className="resume-section">
        <h3>Resume</h3>
        
        <div className="resume-item">
          <h4>Education</h4>
          <p><strong>Bachelor of Science in Computer Science</strong></p>
          <p>University of Colorado Boulder — 2023 to 2027</p>
          <p>Relevant Coursework: Database Systems, Principles of Programming Languages, Algorithms, Data Structures, Computer Systems, Software
          Development and Tools, Intro to Probability Theory, Linear Algebra, Cybersecurity, FastAI Practical Deep Reinforcement Learning Course</p>
        </div>

        <div className="resume-item">
          <h4>Experience</h4>

          <div>
            <p><strong>Break Through Tech Sprintern</strong> — Google Cloud Boulder</p>
            <p> May 2025</p>
            <ul>
              <li>Coming Soon</li>
            </ul>
          </div>

          <div>
            <p><strong>Undergraduate Research Assistant </strong> — Human Interaction and Robotics Group, University of Colorado Boulder</p>
            <p> October 2024 - Present</p>
            <ul>
              <li>Learning and contributing to research projects utilizing Machine Learning, PyTorch, and Deep Reinforcement Learning to research topics 
                like a human-agent model that can transfer across multiple devices and creating flows that use prompt engineering between multiple models.</li>
              
              <li>Analyzing research papers related to human-robot and human-agent models to analyze the current trends in the industry so that I could
              produce research papers that are relevant to society now or in the near future.</li>

            </ul>
          </div>

          <div>
            <p><strong>Resident Advisor </strong> — Residence Life, University of Colorado Boulder</p>
            <p> October 2024 - Present</p>
            <ul>
              <li>Learning and contributing to research projects utilizing Machine Learning, PyTorch, and Deep Reinforcement Learning to research topics 
                like a human-agent model that can transfer across multiple devices and creating flows that use prompt engineering between multiple models.</li>
              
              <li>Analyzing research papers related to human-robot and human-agent models to analyze the current trends in the industry so that I could
              produce research papers that are relevant to society now or in the near future.</li>
              
            </ul>
          </div>

        </div>

        <div className="resume-item">
          <h4>Extracurricular/Involvement</h4>
          <div>
            <p><strong>CS Director of Professional Relations </strong> - Tau Beta Pi CO Beta Chapter, University of Colorado Boulder</p>
            <p> December 2024 - Present</p>
            <ul>
              <li>Organized career development events, including a resume workshop event and a mock interview event, to equip Tau Beta Pi 
                members with strategies to enhance their resumes and improve job prospects, resulting in 
                increased confidence and preparedness for career opportunities.</li>
              
            </ul>
          </div>

          <div>
            <p><strong>Developer </strong> - Blueprint Boulder, University of Colorado Boulder</p>
            <p> March 2024 - Present</p>
            <ul>
              <li>Empowering students to work on projects for local non-profit organizations and apply their technical skills to complete them so that they
              can employ the skills learned in the industry.</li>
              <li>Developing an app and a website called Women Nexus for female-identifying students to connect and support each other on campus
              through Expo using React and React Native. The skills learned from this project can help contribute to work done in the industry.</li>
              
            </ul>
          </div>

          <div>
            <p><strong>Board Member </strong> - Engineering Excellence Fund, University of Colorado Boulder</p>
            <p> August 2023 - Present</p>
            <ul>
              <li>Managing annual funds of $500,000 to develop leadership qualities while making unbiased decisions regarding proposal funding based on
              the necessity and use of the proposal to promote the club/organization’s participation.</li>
              <li>Committing to a passion for advancing the engineering industry by providing financial support to engineering clubs and projects to increase
              the effectiveness of clubs’ missions.</li>
              
            </ul>
          </div>

          <div>
            <p><strong>Logistics Board Member </strong> - HackCU, University of Colorado Boulder</p>
            <p> August 2023 - Present</p>
            <ul>
              <li>Corresponding with sponsors and students, so students can be better prepared for jobs after graduating by allowing students to show off
              their skill sets and apply their knowledge from classes.</li>
              <li>Promoting the hackathon and receive funding for various elements like reservations, food, equipment, etc to make the hackathon experience
              more enjoyable.</li>
            </ul>
          </div>

        </div>

        <div className="resume-item">
          <h4>Projects</h4>
          <div>
            <p><strong></strong></p>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="resume-item">
          <h4>Organizaions</h4>
          <div>
            <ul>
              <li>Society Of Women Engineers - since 2023</li>
              <li>Business and Engineering Women in Technology - since 2023</li>
              <li>Rocky Mountain Artificial Intelligence Interest Group (RMAIIG) - since 2023</li>
              <li>Tau Beta Pi - since 2024</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="section projects" id="projects">
      <h2>Projects</h2>
      <ul>
        <li>Machine Learning Algorithm for Facial Expression Classification <a href="https://github.com/HymaJujjuru/FacialRecognition">Link to GitHub Repo</a></li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="section contact" id="contact">
      <h2>Contact</h2>
      <p>Email: cherryhyma@gmail.com</p>
      <p>GitHub: <a href="https://github.com/HymaJujjuru">https://github.com/HymaJujjuru</a></p>
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
            <li><Link to="/resume" onClick={() => setActiveLink('/resume')}>Resume</Link></li>
            <li><Link to="/projects" onClick={() => setActiveLink('/projects')}>Projects</Link></li>
            <li><Link to="/contact" onClick={() => setActiveLink('/contact')}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
