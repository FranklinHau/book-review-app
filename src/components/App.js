
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavBar from './NavBar';
import SearchBook from './SearchBook.js';
import CreateBook from './CreateBook.js';
import BookDetails from './BookDetails.js';
import SubmitReview from './SubmitReview';
import { useState } from "react";

//Creates a state variable called newBookAdded
//and a function to update it called setNewBookAdded. 
//The initial value of newBookAdded is false.

function App() {
  const [newBookAdded, setNewBookAdded] = useState(false);
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Navigate to='/books' />} />
          <Route path='books/new' element={<CreateBook setNewBookAdded={setNewBookAdded} />} />
          <Route path='books/:id/review' element={<SubmitReview />} />
          <Route path='books/:id/' element={<BookDetails newBookAdded={newBookAdded} setNewBookAdded={setNewBookAdded} />} />
          <Route path='books/' element={<SearchBook />} />
        </Routes>
      </Router>
    </div>
  );
}
//Each Route has a path prop that determines when it should be rendered. 
//The element prop determines what should be rendered when the route is active.

export default App;
