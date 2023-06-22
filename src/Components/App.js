//In this component, I'm using the BrowserRouter, Route, and Switch components from react-router-dom to set up routing. 
//The NavBar component is displayed on all pages, and the Switch component is used to render only the first Route 
//or Redirect that matches the current location.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import BookList from './BookList';
import AddBook from './AddBook';
import BookDetails from './BookDetails';
import EditBook from './EditBook';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='books/new' component={AddBook} />
        <Route path='books/:id/edit' component={EditBook} />
        <Route path='books/:id/' component={BookDetails} />
        <Route path='books/' component={BookList} />
      </Switch>
    </Router>
  );
}  

export default App;
