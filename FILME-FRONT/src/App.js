import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FilmeDetalhes from './pages/FilmeDetalhes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<FilmeDetalhes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;