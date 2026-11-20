# WEB 301 — Advance Frontend Engineering
## Mid-Semester Examination (Phase 2)

### Student Details
- **Student Name:** Shubham Kumar
- **Roll Number:** [Enter Your Roll Number]
- **Assigned Problem Statement:** **P0 – Library Book Manager**
- **Repository Name:** `yourname-midsem-phase2`

---

## Project Overview

**Library Book Manager** is a single-page React application built with Vite and React Router for WEB 301. It enables librarians and students to browse book collections, filter by genre, inspect detailed book information, issue and return books with real-time stock updates, and track issued books across the application.

### Key Features & Routes

1. **Home (`/`)**:
   - Application title and introduction.
   - Dynamic real-time statistics cards:
     - **Total Books**: Total books in the catalog.
     - **Issued Books**: Number of books currently issued.
     - **Unavailable Books**: Number of books with `availableCopies === 0`.
   - Dynamic count updates whenever books are issued or returned.

2. **All Books (`/books`)**:
   - Displays all books using the reusable `BookCard` component.
   - Shows title, author, genre, available copies, and availability badge (`Available` vs `Not Available`).
   - Dynamic genre dropdown filter (`All`, `Biography`, `Fiction`, `Technology`, `Self-Help`).
   - Contextual actions:
     - **Issue Book**: Marks `isIssued: true` and decreases `availableCopies` by 1.
     - **Return Book**: Marks `isIssued: false` and increases `availableCopies` by 1.
     - Displays `Not Available` text when a book has 0 copies available.

3. **Book Details (`/books/:id`)**:
   - Dynamic routing using `:id` and React Router's `useParams()`.
   - Displays complete metadata: Title, Author, Genre, Available Copies, Year, Number of Pages, and Total Copies.
   - Interactive Issue / Return buttons.
   - Graceful error handling displaying **"Book Not Found"** for invalid IDs.

4. **Issued Books (`/issued`)**:
   - Displays only books where `isIssued: true`.
   - Shows Title, Author, Genre, Available Copies, and a Return button.
   - When no books are issued, displays: `No books issued yet`.

5. **Navigation & Navbar**:
   - Navigation links using React Router's `Link` component (`Home`, `All Books`, `Issued Books`).
   - Live badge counter in the Navbar displaying the current number of issued books across all pages.

---

## Mandatory React Concepts Demonstrated

- **Functional Components & JSX**: Clean, standard functional components.
- **Props**: Data and callback functions passed down cleanly between parent and children.
- **JavaScript Variables**: Derived values calculated directly during render.
- **`useState`**: Main application state maintained in `App.jsx`, filter state in `Books.jsx`.
- **Controlled Inputs**: Controlled `<select>` dropdown for genre filtering.
- **`map()`**: Rendering lists of books and categories with unique `key` props.
- **`filter()`**: Dynamic genre filtering and filtering issued books.
- **`find()`**: Finding the specific book matching `id` in `BookDetails.jsx`.
- **Conditional Rendering**: Dynamic button states, badges, and empty states.
- **React Router**: `BrowserRouter`, `Routes`, `Route`, `Link`, and `useParams` imported from `"react-router"`.

---

## Restrictions Followed

- **Zero External State Libraries**: No Context API, Redux, or Zustand.
- **Zero CSS Frameworks / UI Kits**: Styled with clean, modern vanilla CSS in `index.css`.
- **Zero Backends / APIs / Storage**: Pure local React state initialized from the official `books.js` dataset.
- **Original Dataset Intact**: No modifications to the original data structure or properties.

---

## Installation & Running the Project

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (v18+) and `npm` are installed on your system.

### 2. Install Dependencies
Open your terminal in the project directory (`/Users/subhamrai/Desktop/web_homework`) and run:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```

---

## GitHub Submission Instructions

To push the project to your GitHub repository:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Stage files (node_modules is excluded by .gitignore)
git add .

# 3. Commit changes
git commit -m "feat: complete WEB 301 midsem examination project P0 Library Book Manager"

# 4. Rename branch to main
git branch -M main

# 5. Add your remote GitHub repository
git remote add origin https://github.com/your-username/yourname-midsem-phase2.git

# 6. Push to GitHub
git push -u origin main
```
