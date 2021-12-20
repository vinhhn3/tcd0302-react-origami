import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Aside from "./components/layout/Aside";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import OrigamiState from "./context/origami/OrigamiState";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Share from "./pages/Share";

function App() {
  return (
    <OrigamiState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="Container">
            <Aside />
            <div className="Main">
              <Switch>
                <Route exact path={"/"} component={Main} />
                <Route exact path={"/share"} component={Share} />
                <Route exact path={"/register"} component={Register} />
                <Route exact path={"/login"} component={Login} />
                <Route exact path={"/profile"} component={Profile} />
                <Route path={""} component={NotFound} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </OrigamiState>
  );
}

export default App;
