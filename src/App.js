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
import Events from "./components/Events/Events";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/office" exact component={Office} />
          <Route path="/theads" exact component={Theads} />
          <Route path="/edheads" exact component={Edheads} />
          <Route path="/core" exact component={Core} />
          <Route path="/faculty/" exact component={Faculty} />
          <Route path="/events" exact component={Events} />
          <Route path="*" exact component={null} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
