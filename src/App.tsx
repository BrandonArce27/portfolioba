import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Nav";
import AboutMe from "./components/AboutMe";
import NotFound from "./components/NotFound";
import Skills from "./components/Skills";
import Project from "./components/Project";
import { Analytics } from '@vercel/analytics/react'; // Import Analytics component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Add Analytics component here */}
        <Analytics />
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <AboutMe />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;