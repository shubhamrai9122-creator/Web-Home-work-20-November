import React from "react";
import { Link } from "react-router";

// Navbar component provides navigation links and displays the live issued books count
function Navbar({ issuedCount }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          📚 Library Book Manager
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/books" className="nav-link">
            All Books
          </Link>
          <Link to="/issued" className="nav-link nav-issued-link">
            Issued Books
            <span className="issued-badge">{issuedCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
