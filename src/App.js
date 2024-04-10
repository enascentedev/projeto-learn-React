import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NutriView from './view/NutriView'
import AboutView from './view/AboutView'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NutriView />} exact />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </Router>
  );
}

export default App;
