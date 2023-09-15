// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './components/Index';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <header><h1>header</h1></header>
      <div>
        <nav>
          <ul>
            <li>
              <a><Link to="/">Home</Link></a>
            </li>
            <li>
            <a><Link to="/page2">Page 2</Link></a>
            </li>
            <li>
            <a><Link to="/page3">Page 3</Link></a>
            </li>
            <li>
            <a><Link to="/contact">Contact</Link></a>
            </li>
          </ul>
        </nav>

        <section><h1>section</h1></section>

        <Routes>
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
      <footer><h1>footer</h1></footer>
    </Router>
  );
};

export default App;
