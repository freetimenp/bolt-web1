import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;