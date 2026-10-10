import {personalData, education} from './personalDetails.mjs';
import {projects} from './personalProjects.mjs';
import parse from 'html-react-parser';
import { Fragment } from 'react';

function Header({name, phone, email, homeTown, github, linkedIn}) {
  const githubText = github.split("//")[1];
  const linkedInText = linkedIn.split("www.")[1] ?? linkedIn.split("//")[1];
  // ?? is the nullish coalescing operator. It means: “use the left side, unless it’s null or undefined, in which case use the right side.”
  return(
    <header id="personal-data">
      <h1 className='heading' id="name">{name}</h1>
      <div className="contact-grid">
            <div><strong>Phone:</strong> {phone}</div>
            <div><strong>Email:</strong> {email}</div>
            <div><strong>LinkedIn:</strong> <a href={linkedIn}>{linkedInText}</a></div>
            <div><strong>Github:</strong> <a href={github}>{githubText}</a></div>
            <div><strong>Hometown:</strong> {homeTown}</div>
        </div>
      <p>Recent <strong>CSE graduate</strong> with hands-on experience in <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>full-stack web development</strong>, backed by practical projects spanning backend systems and desktop-based <strong>GUIs</strong>. Looking to contribute as a full time <strong>Software Development Engineer</strong>.</p>
    </header>
  );
};

function Skills() {
  return (
    <section id="skills">
        <ol>
            <li>Languages: <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>HTML5</strong>, <strong>SQL</strong> </li>
            <li>Frameworks: <strong>Express</strong>, <strong>Tailwind CSS</strong>, <strong>Electron</strong></li>
            <li>Libraries: <strong>React</strong>, <strong>Zod</strong>, <strong>Passport</strong>, <strong>EJS</strong>, <strong>bcrypt</strong>, <strong>mysql2</strong>, <strong>Cors</strong>, <strong>D3</strong></li>
            <li>Tools: <strong>Git</strong>, <strong>Playwright</strong>, <strong>ESLint</strong>, <strong>npm</strong>, <strong>Vite</strong></li>
            <li>Database and Runtime: <strong>MySQL</strong>, <strong>Node.js</strong> </li>
        </ol>
    </section>
  );
};

function ProjectData({id, name, stack, date, points, github}) {
  return(
    <section className="project-block">
      <p className="project-header">
        <span><strong>{id}. {name}</strong> | <em>{stack}</em></span>
        <span className="project-date">{date}</span>
      </p>
      <ul className="project-lists">
        {points.map((html, i) => (
          <Fragment key={`point-${i}`}>{parse(html)}</Fragment>
        ))}
        {/* <>...</> will not accept any argument so we cannot use key there instead we use Fragment */}
      </ul>
      {github && (
        <p>Github: <a href={github}>{github}</a></p>
      )}
    </section>
  );
};

function Education({study, university, address, marks}) {
  return(
    <>
      <p>
        <strong>{study}</strong><br />
        <span>{university} - {address}</span>
      </p>
      <p className="marks"><strong>{marks}</strong> <br /></p>
    </>
  );
};

function Certificates() {
  return(
    <section id="certificates">
      <ol>
        <li><strong>The Complete Full-Stack Web Development Bootcamp</strong> by Dr. Angela Yu, Udemy (2026) - <a href="https://ude.my/UC-d1613fb2-83d9-4e96-bd05-9628a1f3ffd0">View certificate</a> </li>
        <li>Participated in <strong> IEEE Xtreme 18.0</strong> (October 2024), a 24-hour global competitive programming hackathon organized by IEEE</li>
      </ol>
    </section>
  );
};

function MainContent() {
  return (
    <main id="main-content">
      <h2 className='heading'>TECHNICAL SKILLS</h2>
      <Skills />

      <hr />

      <h2 className='heading'>PROJECTS</h2>
      {projects.map(project => (
        <ProjectData key={project.id} {...project} />
      ))}

      <hr />

      <h2 className="heading">EDUCATION</h2>
      <section id="education">
      {education.map(educ => (
        <Education key={educ.id} {...educ}/>
      ))}
      </section>

      <hr />

      <h2 className='heading'>CERTIFICATIONS &amp; INVOLVEMENT</h2>
      <Certificates />
    </main>
  );
};


export default function App() {
  return (
    <>
      <Header {...personalData}/>
      <hr />
      <MainContent />
    </>
  );
};