import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Advisory from './pages/Advisory';
import Financing from './pages/Financing';
import Workspace from './pages/Workspace';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/financing" element={<Financing />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
