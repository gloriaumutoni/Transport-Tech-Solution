 import { Route, BrowserRouter as Router } from "react-router-dom";
import Routes from "./component/routes";
import Contact from "../src/pages/contact-us/contactUs";

function App() {
  return (
    <>
      <Router>
        <Routes>
           
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
