import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Aside from "./components/layout/Aside";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import OrigamiState from "./context/origami/OrigamiState";

function App() {
  return (
    <OrigamiState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="Container">
            <Aside />
            <Home />
          </div>
          <Footer />
        </div>
      </Router>
    </OrigamiState>
  );
}

export default App;
