import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './components/Index';
import Album from './components/Album';
import API from './components/API';
import Contact from './components/Contact';
import Test from './components/test';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className='container'>
      <Router>
        <header><Header /></header>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Album">
                  Album
                </Link>
              </li>
              <li>
                <Link to="/api">API</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
            </ul>
          </nav>

          <section><Section/></section>

          <Routes>
            <Route path="/Album" element={<Album />} />
            <Route path="/api" element={<API />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Index />} />
          </Routes>
        </div>
        <footer><Footer/></footer>
      </Router>
    </div>
  );
};

export default App;
