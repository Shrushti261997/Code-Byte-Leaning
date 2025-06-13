import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import AuthForm from "../component/AuthForm"; // Corrected import

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBell, faLanguage } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.body.className = isDark ? "dark" : "";
  }, [isDark]);

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="navbar-section left">
          <button className="nav-link">Courses</button>
          <button className="nav-link">Tutorials</button>
          <button className="nav-link">Jobs</button>
          <button className="nav-link">Practice</button>
          <button className="nav-link">Contests</button>
        </div>

        <div className="navbar-section center">
          <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="Logo" className="navbar-logo" />
        </div>

        <div className="navbar-section right">
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input"
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <span className="search-clear" onClick={() => setSearchTerm("")}>✖</span>
          </div>
          
          <button onClick={() => setIsDark(!isDark)} className="icon-button">
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
          </button>
          <button className="icon-button">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button className="icon-button">
            <FontAwesomeIcon icon={faLanguage} />
          </button>

          {/* Sign Up Button Navigates to /register */}
          <Link to="/register">
            <button className="signin-btn">Sign Up</button>
          </Link>
        </div>
      </nav>

      {/* Sub Navbar */}
      <div className="sub-navbar">
        <div className="sub-navbar-links">
          <Link to="/dsa" className="sub-link">DSA</Link>
          <Link to="/web-tech" className="sub-link">Web Tech</Link>
          <Link to="/foundations" className="sub-link">Foundational Courses</Link>
          <Link to="/data-science" className="sub-link">Data Science</Link>
          <Link to="/practice-problems" className="sub-link">Practice Problems</Link>
          <Link to="/python" className="sub-link">Python</Link>
          <Link to="/machine-learning" className="sub-link">Machine Learning</Link>
          <Link to="/javascript" className="sub-link">JavaScript</Link>
          <Link to="/system-design" className="sub-link">System Design</Link>
          <Link to="/django" className="sub-link">Django</Link>
          <Link to="/devops" className="sub-link">DevOps Tutorial</Link>
          <Link to="/java" className="sub-link">Java</Link>
          <Link to="/c" className="sub-link">C</Link>
          <Link to="/cpp" className="sub-link">C++</Link>
          <Link to="/reactjs" className="sub-link">ReactJS</Link>
          <Link to="/nodejs" className="sub-link">NodeJS</Link>
          <Link to="/cp-live" className="sub-link">CP Live</Link>
          <Link to="/aptitude" className="sub-link">Aptitude</Link>
          <Link to="/puzzles" className="sub-link">Puzzles</Link>
          <Link to="/projects" className="sub-link">Projects</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
