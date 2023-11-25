import React from "react";
// import "./App.css";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import services from "./component/services";
import about from "./component/about";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services" exact Component={services} />
          <Route path="/about" exact Component={about} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
