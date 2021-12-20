import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Aside from "./components/layout/Aside";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Main from "./pages/Main";
import Share from "./pages/Share";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Container">
          <Aside />
          <Switch>
            <Route exact path={"/"} component={Main} />
            <Route exact path={"/share"} component={Share} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
