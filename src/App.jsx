import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

// Dataset import
import initialBooks from "./data/books.js";

// Components
import Navbar from "./components/Navbar.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import Issued from "./pages/Issued.jsx";

function App() {
  // Main application state initialized with the books dataset
  const [bookList, setBookList] = useState(initialBooks);

  // Function to handle issuing a book
  const handleIssueBook = (id) => {
    setBookList((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          // Validation: Do not issue if already issued or no copies available
          if (book.isIssued || book.availableCopies <= 0) {
            return book;
          }
          // Issue book: set isIssued to true and decrement availableCopies
          return {
            ...book,
            isIssued: true,
            availableCopies: Math.max(0, book.availableCopies - 1),
          };
        }
        return book;
      })
    );
  };

  // Function to handle returning an issued book
  const handleReturnBook = (id) => {
    setBookList((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          // Validation: Do not return if not currently issued or already at maximum total copies
          if (!book.isIssued || book.availableCopies >= book.totalCopies) {
            return book;
          }
          // Return book: set isIssued to false and increment availableCopies
          return {
            ...book,
            isIssued: false,
            availableCopies: Math.min(book.totalCopies, book.availableCopies + 1),
          };
        }
        return book;
      })
    );
  };

  // Calculate live issued books count for the Navbar
  const issuedCount = bookList.filter((book) => book.isIssued).length;

  return (
    <BrowserRouter>
      <div className="app-layout">
        {/* Reusable Navbar with live issued count */}
        <Navbar issuedCount={issuedCount} />

        {/* Application Routes */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home books={bookList} />} />
            <Route
              path="/books"
              element={
                <Books
                  books={bookList}
                  onIssue={handleIssueBook}
                  onReturn={handleReturnBook}
                />
              }
            />
            <Route
              path="/books/:id"
              element={
                <BookDetails
                  books={bookList}
                  onIssue={handleIssueBook}
                  onReturn={handleReturnBook}
                />
              }
            />
            <Route
              path="/issued"
              element={
                <Issued
                  books={bookList}
                  onReturn={handleReturnBook}
                />
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <p>Library Book Manager — Advance Frontend Engineering (WEB 301)</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
