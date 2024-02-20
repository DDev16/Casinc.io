// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RouletteGame from './RouletteGame';
import Navbar from './components/Navbar';

const Home = () => <RouletteGame />;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/roulette" element={<RouletteGame />} />
      </Routes>
    </Router>
  );
};

export default App;
