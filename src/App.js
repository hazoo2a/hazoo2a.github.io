import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import hazemPhoto from './hazem.jpg';

const App = () => {
  return (
    <Container>
      <Header>
        <h1>Hazem Zidan</h1>
        <p>Software Engineer | Cybersecurity Enthusiast</p>
        <SocialLinks>
          <a href="https://www.linkedin.com/in/hazem-e-zidan/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/hazoo2a" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:zidanhazem1@gmail.com">
            <FaEnvelope />
          </a>
        </SocialLinks>
      </Header>
      
      <Section>
        <h2>About Me</h2>
        <ProfileImage src={hazemPhoto} alt="Hazem Zidan" />
        <p>
          Motivated Computer Science student with hands-on experience in software development, quality assurance, and real-time video surveillance systems. Skilled in Python, Java, SQL, and modern frameworks like React. Proven ability to deliver high-quality solutions through collaboration and innovation. Seeking opportunities to leverage technical expertise in impactful projects.
        </p>
      </Section>
      
      <Section>
        <h2>Skills</h2>
        <SkillsList>
          <li><strong>Programming:</strong> Java, C++, HTML, CSS, JavaScript, Python, SQL</li>
          <li><strong>Frameworks & Tools:</strong> React, Node.js, Git, GitHub, GitLab, JIRA</li>
          <li><strong>Testing Tools:</strong> Selenium, JUnit, EclEmma, SpotBugs, SonarLint, PMD, NIST ACTS</li>
          <li><strong>Software:</strong> Eclipse IDE, Visual Studio Code, MySQL Workbench, Microsoft Office Suite</li>
          <li><strong>Operating Systems:</strong> Windows, Linux Ubuntu, macOS</li>
          <li><strong>Languages:</strong> Fluent in Arabic and English</li>
        </SkillsList>
      </Section>

      <Section>
        <h2>Experience</h2>
        <ExperienceItem>
          <h3>Software QA Intern</h3>
          <p><strong>Never Ending, Inc | Cleveland, OH | May 2024 – August 2024</strong></p>
          <p>
            Collaborated on code documentation and testing, utilized tools like EclEmma and SonarLint, and conducted feature testing in staging and production environments. Participated in code reviews, identified bugs, and resolved complex technical issues.
          </p>
        </ExperienceItem>
        <ExperienceItem>
          <h3>Educator</h3>
          <p><strong>Kelly Education | Baltimore, MD | August 2024 – Present</strong></p>
          <p>
            Provided quality instruction and maintained a positive learning environment. Adapted teaching strategies to diverse student needs and managed administrative tasks effectively.
          </p>
        </ExperienceItem>
        <ExperienceItem>
          <h3>Restaurant Manager</h3>
          <p><strong>Safa’s Pizza | Baltimore, MD | December 2019 – August 2024</strong></p>
          <p>
            Led a team, managed operations, and optimized daily activities to reduce costs. Improved customer satisfaction and oversaw hiring and training processes.
          </p>
        </ExperienceItem>
      </Section>

      <Section>
        <h2>Contact</h2>
        <ContactDetails>
          <li><FaEnvelope /> Email: zidanhazem1@gmail.com</li>
          <li><FaPhone /> Phone: (443) 460-8903</li>
          <li><FaGithub /> GitHub: <a href="https://github.com/hazoo2a">github.com/hazoo2a</a></li>
          <li><FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/hazem-e-zidan/">linkedin.com/in/hazem-e-zidan/</a></li>
        </ContactDetails>
      </Section>

      <Footer>&copy; 2024 Hazem Zidan. All rights reserved.</Footer>
    </Container>
  );
};

export default App;

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
`;

const Header = styled.header`
  text-align: center;
  background: linear-gradient(90deg, #0077b6, #00aaff);
  color: white;
  padding: 2rem;
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  a {
    margin: 0 1rem;
    font-size: 2rem;
    color: white;
    text-decoration: none;
    transition: transform 0.3s, color 0.3s;
  }
  a:hover {
    transform: scale(1.3);
    color: #ffe135;
  }
`;

const Section = styled.section`
  padding: 3rem 2rem;
  max-width: 900px;
  margin: auto;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
  margin: 1rem auto;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const SkillsList = styled.ul`
  text-align: left;
  margin: auto;
  max-width: 600px;
  list-style: none;
  padding: 0;
  li {
    margin: 1rem 0;
  }
`;

const ExperienceItem = styled.div`
  margin: 1.5rem 0;
  text-align: left;
  max-width: 800px;
  margin: auto;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0.5rem 0;
  }
`;

const ContactDetails = styled.ul`
  list-style: none;
  margin: auto;
  max-width: 400px;
  padding: 0;
  text-align: left;
  li {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  background: linear-gradient(90deg, #0077b6, #00aaff);
  color: white;
  font-size: 0.9rem;
`;
