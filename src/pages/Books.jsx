import React, { useState } from "react";
import BookCard from "../components/BookCard.jsx";

// Books page renders the list of all books with dynamic genre filtering
function Books({ books, onIssue, onReturn }) {
  // Controlled input state for genre filter
  const [selectedGenre, setSelectedGenre] = useState("All");

  // Filter books dynamically using JavaScript's filter() method
  const filteredBooks =
    selectedGenre === "All"
      ? books
      : books.filter((book) => book.genre === selectedGenre);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>All Books Collection</h2>
          <p className="page-description">
            Explore our library catalog. Filter by genre or issue books directly.
          </p>
        </div>

        {/* Controlled dropdown filter for genre */}
        <div className="filter-container">
          <label htmlFor="genre-select" className="filter-label">
            Filter by Genre:
          </label>
          <select
            id="genre-select"
            className="genre-dropdown"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Biography">Biography</option>
            <option value="Fiction">Fiction</option>
            <option value="Technology">Technology</option>
            <option value="Self-Help">Self-Help</option>
          </select>
        </div>
      </div>

      {/* Render book cards using map() */}
      {filteredBooks.length > 0 ? (
        <div className="books-grid">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onIssue={onIssue}
              onReturn={onReturn}
            />
          ))}
        </div>
      ) : (
        <p className="empty-message">No books found in this category.</p>
      )}
    </div>
  );
}

export default Books;
