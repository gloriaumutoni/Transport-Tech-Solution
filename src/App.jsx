 
 import { Route, BrowserRouter as Router } from "react-router-dom";
import Routes from "./component/routes";
import Contact from "../src/pages/contact-us/contactUs";
import BookingForm from './pages/Booking/BookingForm'

function App() {
  return (
    <>
      <Router>
        <Routes>
           <Routes path="/book-here" element= {<BookingForm />}></Routes>
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>
 
    </>
  );
}

export default App;
