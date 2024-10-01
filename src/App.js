// src/App.js
import React from 'react';
import Home from './components/Home'; // Import the Home component
import About from './components/About'; // Import the About component
import './App.css'; // You can modify this for global styles

function App() {
  return (
    <div className="App">
      <Home /> {/* Home component */}
      <About /> {/* About component */}
    </div>
  );
}

export default App;
