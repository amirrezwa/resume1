import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const About = () => {
  useEffect(() => {
    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srRight.reveal(".skills-box", { delay: 100 });
  }, []);

  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "ReactJs",
    "NextJs",
    "shadCN",
    "material UI",
    "TailwindCss",
  ];

  const backendSkills = ["NodeJs", "ExpressJs", "NestJs", "LoopBack", "Docker"];

  const databaseSkills = ["SQLServer", "PostgresSQL", "MongoDB", "Jest"];

  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              Full-Stack JavaScript Developer with hands-on experience in
              building scalable backend applications using NestJS, Express, and
              PostgreSQL. Strong understanding of authentication & authorization
              (JWT, RBAC), RESTful API design, database modeling, and writing
              unit/integration tests. Experienced in working with Prisma ORM,
              relational databases, and implementing real-world features such as
              file uploads, role-based access control, and secure login systems.
              On the frontend side, familiar with React, Next.js, and modern UI
              libraries, with a strong focus on clean architecture and
              maintainable code. Passionate about continuous learning, clean
              code principles, and building structured, production-ready
              applications.
            </p>
            <div className="about-btn">
              <button className="btn">
                Download CV <i className="uil uil-import"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              {databaseSkills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
