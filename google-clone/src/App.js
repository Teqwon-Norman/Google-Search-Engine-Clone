import React from "react";
import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/about" element={<Home />}/>
          <Route path="/gmail" element={<Home />}/>
          <Route path="/images" element={<Home />}/>
          <Route path="/store" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
