import React from "react";
import { Link } from "react-router";

// BookCard component displays an individual book and handles issue/return actions
function BookCard({ book, onIssue, onReturn, showDetailsLink = true }) {
  // Determine availability status
  const isAvailable = book.availableCopies > 0;

  return (
    <div className="book-card">
      <div className="card-header">
        <span className="book-genre">{book.genre}</span>
        {/* Availability badge */}
        <span className={`status-badge ${isAvailable ? "badge-available" : "badge-unavailable"}`}>
          {isAvailable ? "Available" : "Not Available"}
        </span>
      </div>

      <div className="card-body">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <p className="book-copies">
          <strong>Available Copies:</strong> {book.availableCopies}
        </p>
      </div>

      <div className="card-actions">
        {/* Conditional rendering for action buttons */}
        {book.isIssued ? (
          <button
            className="btn btn-return"
            onClick={() => onReturn(book.id)}
          >
            Return Book
          </button>
        ) : isAvailable ? (
          <button
            className="btn btn-issue"
            onClick={() => onIssue(book.id)}
          >
            Issue Book
          </button>
        ) : (
          <span className="text-not-available">Not Available</span>
        )}

        {/* Link to Book Details page */}
        {showDetailsLink && (
          <Link to={`/books/${book.id}`} className="btn btn-details">
            View Details
          </Link>
        )}
      </div>
    </div>
  );
}

export default BookCard;
