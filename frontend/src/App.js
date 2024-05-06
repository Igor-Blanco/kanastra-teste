import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import TestAPI from './TestAPI';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to="/test-api">Test API Page</Link> ||
          <Link to="/">Home</Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test-api" element={<TestAPI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;