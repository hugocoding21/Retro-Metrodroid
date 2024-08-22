import React from 'react';
import { Route, Routes, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="flex h-screen w-screen flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
