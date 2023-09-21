import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './components/Index';
import Page2 from './components/Page2';
import API from './components/API';
import Contact from './components/Contact';
import Test from './components/test';
import Header from './components/Header';

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
                <Link to="/page2">
                  Page 2
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

          <section><h1>section</h1></section>

          <Routes>
            <Route path="/page2" element={<Page2 />} />
            <Route path="/api" element={<API />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Index />} />
          </Routes>
        </div>
        <footer><h1>footer</h1></footer>
      </Router>
    </div>
  );
};

export default App;
