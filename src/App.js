
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavBar from './NavBar';
import BookList from './BookList.js';
import AddBook from './AddBook.js';
import BookDetails from './BookDetails.js';
import SubmitReview from './SubmitReview';
import { useState } from "react";



function App() {
  const [newBookAdded, setNewBookAdded] = useState(false);
  return (
    <div className="container">
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate to='/books' />} /> 
        <Route path='books/new' element={<AddBook setNewBookAdded={setNewBookAdded} />} />
        <Route path='books/:id/review' element={<SubmitReview />} />
        <Route path='books/:id/' element={<BookDetails newBookAdded={newBookAdded} setNewBookAdded={setNewBookAdded} />} />
        <Route path='books/' element={<BookList />} />
      </Routes>
    </Router>
    </div>
  );
}


export default App;
