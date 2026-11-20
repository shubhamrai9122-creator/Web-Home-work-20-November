import React from "react";
import { Link } from "react-router";

// Home page displays application summary counts and introductory information
function Home({ books }) {
  // Calculate summary counts dynamically using JavaScript variables and filter()
  const totalBooks = books.length;
  const issuedBooks = books.filter((book) => book.isIssued).length;
  const unavailableBooks = books.filter((book) => book.availableCopies === 0).length;

  return (
    <div className="page-container home-page">
      <div className="hero-section">
        <h1 className="hero-title">Library Book Manager</h1>
        <p className="hero-subtitle">
          Welcome to the centralized Library Book Management System. Easily browse the library collection,
          filter books by genre, track live availability, and manage book issuance with real-time updates.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <h3 className="stat-value">{totalBooks}</h3>
            <p className="stat-label">Total Books</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📖</div>
          <div className="stat-content">
            <h3 className="stat-value">{issuedBooks}</h3>
            <p className="stat-label">Issued Books</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⚠️</div>
          <div className="stat-content">
            <h3 className="stat-value">{unavailableBooks}</h3>
            <p className="stat-label">Unavailable Books</p>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <Link to="/books" className="btn btn-primary-large">
          Browse All Books →
        </Link>
        <Link to="/issued" className="btn btn-secondary-large">
          View Issued Books ({issuedBooks})
        </Link>
      </div>
    </div>
  );
}

export default Home;
