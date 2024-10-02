// src/App.js
import React from 'react';
import Navbar from './components/navbar';
import Home from './components/Home'; // Import the Home component
import About from './components/About';
import Skills from './components/skills';
import Experience from './components/Experience';
import './App.css'; // You can modify this for global styles

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Sticky navbar */}
      <Home /> {/* Home component */}
      <About /> {/* About component */}
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
