import "./HeroImgStyle.css";
import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import GitHubContributions from "./GithubContributions";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

const Heroimg = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = useMemo(() => ["Developer", "Coder", "Learner"], []);

  useEffect(() => {
    // GitHub Calendar Initialization (Commented out)
    // GitHubCalendar(".github-calendar", "ritikrikm", {
    //   responsive: true,
    // });

    const handleTyping = () => {
      const currentPhrase = phrases[loopIndex];

      if (!isDeleting) {
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1000);
          setTypingSpeed(150);
        }
      } else {
        setDisplayText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setLoopIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loopIndex, typingSpeed, phrases]);

  return (
    <div className="hero">
      <div className="mask"></div>
      <div className="content">
        <p>
          I am a <span className="typing-text">{displayText}</span>
        </p>
        <h1>RITIK MEHTA.</h1>
        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>

        {/* Social Media Links */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/-ritikmehta-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/ritikrikm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Ritik_Mehta_Resume.pdf"
          >
            <FaFileDownload size={30} />
          </a>
        </div>

       <GitHubContributions id="home-calendar" username="ritikrikm" />
      </div>
    </div>
  );
};

export default Heroimg;
