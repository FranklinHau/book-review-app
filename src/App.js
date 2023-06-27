//In this component, I'm using the BrowserRouter, Route, and Switch components from react-router-dom to set up routing. 
//The NavBar component is displayed on all pages, and the Switch component is used to render only the first Route 
//or Redirect that matches the current location.
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavBar from './NavBar';
import BookList from './BookList.js';
import AddBook from './AddBook.js';
import BookDetails from './BookDetails.js';
import SubmitReview from './SubmitReview';
//don't want user to remove their review once submitted
//import EditBook from './EditBook.js';  


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate to='/books' />} /> 
        <Route path='books/new' element={<AddBook />} />
        <Route path='books/:id/review' element={<SubmitReview />} />
        <Route path='books/:id/' element={<BookDetails />} />
        <Route path='books/' element={<BookList />} />
      </Routes>
    </Router>
  );
}


export default App;
