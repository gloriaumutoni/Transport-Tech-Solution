 import { Route, BrowserRouter as Router } from "react-router-dom";
import Routes from "./component/routes";
import Contact from "../src/pages/contact-us/contactUs";

function App() {
  return (
    <>
      <Router>
        <Routes></Routes>
        <Contact />
      </Router>
    </>
  );
}

export default App;
