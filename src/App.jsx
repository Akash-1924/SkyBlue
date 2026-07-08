import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Icon from './assets/icon.png'
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <img src="icon" alt="icon" />
        <Navbar />
        
        <main className=" main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 Page */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;