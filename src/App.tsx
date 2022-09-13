import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
