import "./globals.css";

// BASE PATH FOR GITHUB PAGES
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// TECHNICAL SKILLS
const skills = [
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript", category: "Programming" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Git & GitHub", category: "Tools" },
];

// PROJECTS
const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website showcasing my skills, education, projects and professional profile.",
    technologies: ["Next.js", "React", "CSS"],
    github:
      "https://github.com/rajsavant8448-design/raj_portfolio",
  },
  {
    title: "React Application",
    description:
      "A modern React application demonstrating reusable components, state management and API integration.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/rajsavant8448-design",
  },
  {
    title: "Employee Management",
    description:
      "An employee management application designed to manage employee information using a PostgreSQL database.",
    technologies: ["Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/rajsavant8448-design",
  },
];

// CERTIFICATIONS
const certifications = [
  {
    title: "Core Java",
    institute: "Institute of Coding",
    date: "11 July 2026",
    file: "/Core_Java_Certificate.pdf",
  },
  {
    title: "C Programming",
    institute: "Institute of Coding",
    date: "7 November 2024",
    file: "/C_Programming_Certificate.pdf",
  },
  {
    title: "Android Programming",
    institute: "Institute of Coding",
    date: "5 April 2025",
    file: "/Android_Programming_Certificate.pdf",
  },
];

export default function Home() {
  return (
    <main>

      {/* NAVBAR */}

      <nav className="navbar">
        <a href="#home" className="logo">
          Raj<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <a
            href="https://github.com/rajsavant8448-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href={`${basePath}/Raj_Sawant_Resume.docx`}
            download="Raj_Sawant_Resume.docx"
          >
            Resume ↓
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section id="home" className="hero">
        <div className="hero-content">

          <p className="welcome">
            ✦ WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Raj Savant</span>
          </h1>

          <h2>Aspiring Full Stack Developer</h2>

          <p className="description">
            I am a passionate fresher interested in web development
            and modern technologies. I enjoy building responsive,
            user-friendly and modern web applications using React,
            Next.js and JavaScript.
          </p>

          <div className="buttons">

            <a href="#projects" className="btn">
              Explore My Work →
            </a>

            <a href="#contact" className="btn outline">
              Contact Me
            </a>

            <a
              href={`${basePath}/Raj_Sawant_Resume.docx`}
              download="Raj_Sawant_Resume.docx"
              className="btn"
            >
              Download Updated CV ↓
            </a>

          </div>

          <div className="hero-info">

            <div>
              <h3>09+</h3>
              <p>Technical Skills</p>
            </div>

            <div>
              <h3>03+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Learning Attitude</p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section id="about" className="section">

        <h2>
          About <span>Me</span>
        </h2>

        <div className="about-content card">

          <h3>Hello! I'm Raj Savant 👋</h3>

          <p>
            I am a fresher and an aspiring Full Stack Developer
            from Kolhapur, Maharashtra.
            <br /><br />

            I am currently pursuing B.Com in Computer Application
            and developing my technical skills in web development.
            <br /><br />

            I have learned HTML, CSS, JavaScript, React, Next.js,
            Node.js and PostgreSQL.
            <br /><br />

            I have completed Full Stack Web Development training
            at Oktacon Softwares.
            <br /><br />

            I enjoy solving programming problems, learning new
            technologies and creating practical projects.
            <br /><br />

            My goal is to start my career in the IT industry
            and become a skilled software developer.
          </p>

        </div>
      </section>

      {/* SKILLS SECTION */}

      <section id="skills" className="section dark">

        <h2>
          My Technical <span>Skills</span>
        </h2>

        <p>
          Technologies and tools I am learning and using
          to develop modern web applications.
        </p>

        <div className="grid">

          {skills.map((skill) => (
            <div className="card skill-card" key={skill.name}>
              <h3>{skill.name}</h3>
              <span>{skill.category}</span>
            </div>
          ))}

        </div>
      </section>

      {/* EDUCATION SECTION */}

      <section id="education" className="section">

        <h2>
          My <span>Education</span>
        </h2>

        <div className="education-timeline">

          <div className="card education-card">
            <span>Currently Pursuing</span>
            <h3>B.Com in Computer Application</h3>
            <p>Shivaji University, Kolhapur</p>
          </div>

          <div className="card education-card">
            <span>2020</span>
            <h3>Higher Secondary Certificate</h3>
            <p>Pune Board</p>
            <p>Percentage: 51.67%</p>
          </div>

          <div className="card education-card">
            <span>2018</span>
            <h3>Secondary School Certificate</h3>
            <p>Pune Board</p>
            <p>Percentage: 72.40%</p>
          </div>

        </div>
      </section>

      {/* TRAINING SECTION */}

      <section id="training" className="section dark">

        <h2>
          Professional <span>Training</span>
        </h2>

        <div className="card education-card">

          <span>Full Stack Web Development</span>

          <h3>Oktacon Softwares</h3>

          <p>
            Completed Full Stack Web Development training
            covering frontend and backend technologies.
          </p>

          <br />

          <p>
            Learned HTML5, CSS3, JavaScript, React.js,
            Next.js, Node.js and PostgreSQL.
          </p>

          <br />

          <p>
            Gained foundational knowledge of REST API
            integration, database management and Git/GitHub.
          </p>

        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}

      <section id="certifications" className="section">

        <h2>
          My <span>Certifications</span>
        </h2>

        <p>
          Professional certificates and completed courses.
        </p>

        <div className="grid">

          {certifications.map((certificate) => (

            <div
              className="card skill-card"
              key={certificate.title}
            >

              <div className="project-icon">🏆</div>

              <h3>{certificate.title}</h3>

              <p>{certificate.institute}</p>

              <span>{certificate.date}</span>

              <br /><br />

              <a
                href={`${basePath}${certificate.file}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate ↗
              </a>

            </div>

          ))}

        </div>
      </section>

      {/* CAREER OBJECTIVE */}

      <section id="objective" className="section dark">

        <h2>
          Career <span>Objective</span>
        </h2>

        <div className="card education-card">

          <h3>Aspiring Full Stack Developer</h3>

          <p>
            To begin my professional career in the IT industry
            as a fresher where I can apply my programming
            knowledge and technical skills.
          </p>

          <br />

          <p>
            I am interested in frontend and backend development.
            I want to improve my practical knowledge of React,
            Next.js, Node.js, Express.js and PostgreSQL.
          </p>

          <br />

          <p>
            I am enthusiastic about learning new technologies,
            working with experienced developers and contributing
            to real-world projects.
          </p>

        </div>
      </section>

      {/* PROJECTS SECTION */}

      <section id="projects" className="section">

        <h2>
          My Latest <span>Projects</span>
        </h2>

        <p>
          Some of my learning projects and practical
          development work.
        </p>

        <div className="grid">

          {projects.map((project) => (

            <div
              className="card project-card"
              key={project.title}
            >

              <div className="project-icon">💻</div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source Code ↗
              </a>

            </div>

          ))}

        </div>
      </section>

      {/* CONTACT SECTION */}

      <section id="contact" className="section dark">

        <h2>
          Get In <span>Touch</span>
        </h2>

        <p>
          I am looking for opportunities to start my career
          in the IT industry. Feel free to contact me.
        </p>

        <div className="contact-links">

          <a href="mailto:rajsavant8448@gmail.com">
            📧 Email Me
          </a>

          <a
            href="https://github.com/rajsavant8448-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a href="tel:+919075982006">
            📞 Call Me
          </a>

        </div>

        <div className="contact-details">

          <p>Email: rajsavant8448@gmail.com</p>
          <p>Phone: +91 9075982006</p>
          <p>Location: Kolhapur, Maharashtra</p>

        </div>
      </section>

      {/* FOOTER */}

      <footer>

        <h3>
          Raj<span>.</span>
        </h3>

        <p>Designed and developed by Raj Savant</p>

        <p>© 2026 All Rights Reserved.</p>

        <p>Built with Next.js, React and CSS.</p>

      </footer>

    </main>
  );
}