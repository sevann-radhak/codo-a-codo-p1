import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import Album from './components/Album';
import Users from './components/Users';
import Contact from './components/Contact';
import Test from './components/test';
import Header from './components/Header';
import AlbumSigle from './components/AlbumSigle';

const App: React.FC = () => {
  return (
    <>
      <div className='my_container'>
        <Router>
          <div>
            <header><Header /></header>
            {/* <section><Section /></section> */}

            <Routes>
              <Route path="/Album" element={<Album />} />
              <Route path="/Album/:id" element={<AlbumSigle />} />
              <Route path="/users" element={<Users />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/test" element={<Test />} />
              <Route path="/" element={<Index />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
