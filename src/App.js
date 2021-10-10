import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import bootstrap from "bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import { Faculty } from "./views/Faculty/Faculty";
import { Office } from "./views/Office/Office";
import { Theads } from "./views/Theads/Theads";
import { Edheads } from "./views/Edheads/Edheads";
import { Core } from "./views/Core/Core";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/office" component={Office} />
          <Route exact path="/theads" component={Theads} />
          <Route exact path="/edheads" component={Edheads} />
          <Route exact path="/core" component={Core} />
          <Route exact path="/faculty" component={Faculty} />
          <Route exact path="*" component={null} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
