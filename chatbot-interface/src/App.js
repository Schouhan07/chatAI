
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import AdminPanel from './components/AdminPanel';
import './App.css'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Chatbot</Link></li>
            <li><Link to="/admin">Admin Panel</Link></li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Chatbot />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
