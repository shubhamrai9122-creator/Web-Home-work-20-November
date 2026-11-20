import React from "react";
import { Link } from "react-router";

// Issued page displays only the books that are currently issued
function Issued({ books, onReturn }) {
  // Use filter() to identify issued books
  const issuedBooks = books.filter((book) => book.isIssued);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>Issued Books</h2>
          <p className="page-description">
            Books currently checked out by students. You can return them here.
          </p>
        </div>
      </div>

      {/* Conditional rendering: check if any books are issued */}
      {issuedBooks.length === 0 ? (
        <div className="empty-state">
          <p className="empty-message">No books issued yet</p>
          <Link to="/books" className="btn btn-primary">
            Explore All Books
          </Link>
        </div>
      ) : (
        <div className="books-grid">
          {issuedBooks.map((book) => (
            <div key={book.id} className="book-card issued-card">
              <div className="card-header">
                <span className="book-genre">{book.genre}</span>
                <span className="status-badge badge-issued">Issued</span>
              </div>

              <div className="card-body">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
                <p className="book-copies">
                  <strong>Available Copies:</strong> {book.availableCopies}
                </p>
              </div>

              <div className="card-actions">
                <button
                  className="btn btn-return"
                  onClick={() => onReturn(book.id)}
                >
                  Return Book
                </button>
                <Link to={`/books/${book.id}`} className="btn btn-details">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Issued;
