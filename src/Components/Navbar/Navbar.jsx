import "../Style/style.css"
import "../Navbar/Navbar.css"
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation top">
      <div className="container">
        <Link to="/" className="brand-name" style={{ display: "flex", alignItems: "center" }}>
          {/* <img src="https://res.cloudinary.com/darrqmepw/image/upload/v1686081053/logo_2-removebg-preview_kcucer.png" />
          MacroSoft */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="https://res.cloudinary.com/darrqmepw/image/upload/v1686081053/logo_2-removebg-preview_kcucer.png" className="brand-logo"/>
          </div>
          <div className="brand-name1">
            yush
          </div>
        </Link>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul className="zindex">
            <li>
              <Link to="/">.about( )</Link>
            </li>
            <li>
              <Link to="/skill">.skills( )</Link>
            </li>
            <li>
              <Link to="/contact">.contact( )</Link>
            </li>
            <li>
              <Link to="/projects">.project( )</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}