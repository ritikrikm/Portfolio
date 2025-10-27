import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Exp.css';

import techSaviLor from '../assets/tech.webp';
import rbcLor from '../assets/rbc.webp';

const experiences = [
  {
    lorImgSrc: techSaviLor,
    title: "Full Stack Developer",
    company: "Tech Savi (Contract - PartTime)",
    location: "Toronto, Canada",
    date: "January 2025 – June 2025",
    points: [
      "Tech Stack: HTML, CSS, JavaScript, ReactJS, Angular, Node.js, Python, Azure, Git, JIRA, Confluence.",
      "Designed and integrated RESTful APIs with Node.js, enabling seamless communication between front-end and back-end services and ensuring scalable system architecture",
      "Automated server provisioning using Ansible, reducing setup time by 50%, and implemented secure user authentication with role-based access control via Azure Active Directory for over 1,000 users.",
      "Streamlined development and deployment processes using GitHub Actions CI/CD, integrating Azure services for database, authentication, and hosting, achieving 99.9% uptime and scalability.",
    ]
  },
  {
    lorImgSrc: rbcLor,
    title: "Software Developer Coop",
    company: "Royal Bank of Canada",
    location: "Toronto, Canada",
    date: "January 2024 – August 2024",
    points: [
      "Tech Stack: Angular (Routing, NgRx, RxJs), TypeScript, Java, Spring Boot, Node, Maven, Jenkins, Docker, Git, OCP4 (Container), Python (for ML scripting), Azure Cognitive Services.",
      "Assisted in migrating Spring Boot applications from Pivotal Cloud Foundry (PCF) to OpenShift Container Platform 4 (OCP4), contributing to improved scalability and resilience by 30%, and Supported integration of Kafka and Elastic Search with Active Directory environments to enhance system performance.",
      "Helped configure Kubernetes pods and implemented Horizontal Pod Autoscaling and CronJob Scheduling, boosting resource utilization efficiency and application reliability by 85%.",
      "Documented and helped in designing RESTful APIs using Swagger (OpenAPI 3.0) and tested by postman, ensuring clear interface specifications.",
      "Enhanced application performance and scalability by implementing Cache as a Service using Armada and Dynatrace and integrating IVR systems with Omilia to improve customer interaction capabilities.",
      "Developed robust test cases using JUnit and Mockito, achieving over 55% code coverage on SonarQube and ensuring effective application monitoring with Log4J for improved reliability and quality assurance.", 
      "Collaborated with Senior Developers and participated in team knowledge-sharing sessions on Spring Boot and Git workflows.",
    ]
  },
  {
    lorImgSrc: null, 
    title: "Software Engineer Intern",
    company: "Frontline VR India Venture",
    location: "Delhi, India",
    date: "May 2022 – December 2022",
    points: [
      "Tech Stack: ReactJS, JavaScript, Node.js, MongoDB, Microservices Architecture.",
      "Spearheaded the development of a customer-facing platform using ReactJS and MongoDB, achieving rapid growth to 2,000 active users within 3 days of launch.",
      "Conducted rigorous testing using Jest, Postman, and Selenium, ensuring the reliability, functionality, and seamless integration of various components in the platform.",
      "Developed and deployed APIs to enhance integration capabilities and ensure seamless communication between services, improving system scalability by 40%.",
    ]
  }
];

const Exp = () => {
  const book = useRef();

  return (
    <div className="experience-section-container">
      <div className="book-wrapper">
        <HTMLFlipBook
          width={550}
          height={700}
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={false}
          mobileScrollSupport={true}
          ref={book}
          className="experience-book"
        >
          {experiences.flatMap((exp, index) => [
            exp.lorImgSrc ? (
              <div className="page page-lor" key={`lor-${index}`}>
                <img src={exp.lorImgSrc} alt={`${exp.company} LOR`} />
              </div>
            ) : (
              <div className="page page-blank" key={`blank-lor-${index}`}></div>
            ),

            <div className="page" key={`exp-${index}`}>
              <div className="page-content">
                <h2>{exp.title}</h2>
                <h3>{exp.company}</h3>
                <p>{exp.location}</p>
                <p>{exp.date}</p>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ])}
        </HTMLFlipBook>
      </div>

      <div className="book-nav">
        <button onClick={() => book.current.pageFlip().flipPrev()}>
          Previous Page
        </button>
        <button onClick={() => book.current.pageFlip().flipNext()}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Exp;