import React from "react";
import { useParams, Link } from "react-router";

// BookDetails page fetches book by dynamic URL param :id using useParams() and find()
function BookDetails({ books, onIssue, onReturn }) {
  // Extract id from URL parameter
  const { id } = useParams();

  // Find the selected book from the books array using JavaScript's find() method
  const book = books.find((b) => b.id === Number(id));

  // Handle invalid book IDs gracefully
  if (!book) {
    return (
      <div className="page-container not-found-container">
        <h2>Book Not Found</h2>
        <p>The book with ID "{id}" could not be found in our library collection.</p>
        <Link to="/books" className="btn btn-primary">
          ← Back to All Books
        </Link>
      </div>
    );
  }

  const isAvailable = book.availableCopies > 0;

  return (
    <div className="page-container">
      <Link to="/books" className="back-link">
        ← Back to All Books
      </Link>

      <div className="book-details-card">
        <div className="details-header">
          <div>
            <span className="book-genre">{book.genre}</span>
            <h1 className="details-title">{book.title}</h1>
            <p className="details-author">by {book.author}</p>
          </div>
          <span
            className={`status-badge ${
              isAvailable ? "badge-available" : "badge-unavailable"
            }`}
          >
            {isAvailable ? "Available" : "Not Available"}
          </span>
        </div>

        <div className="details-info-grid">
          <div className="info-item">
            <span className="info-label">Year Published</span>
            <span className="info-value">{book.year}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Number of Pages</span>
            <span className="info-value">{book.pages}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Total Copies</span>
            <span className="info-value">{book.totalCopies}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Available Copies</span>
            <span className="info-value">{book.availableCopies}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Issue Status</span>
            <span className="info-value">
              {book.isIssued ? "Currently Issued" : "Not Issued"}
            </span>
          </div>
        </div>

        <div className="details-actions">
          {book.isIssued ? (
            <button
              className="btn btn-return btn-large"
              onClick={() => onReturn(book.id)}
            >
              Return Book
            </button>
          ) : isAvailable ? (
            <button
              className="btn btn-issue btn-large"
              onClick={() => onIssue(book.id)}
            >
              Issue Book
            </button>
          ) : (
            <span className="text-not-available not-available-pill">
              Not Available
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
