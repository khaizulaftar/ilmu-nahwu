import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './module/home';
import data from './data/data.json'
import Module from './module/module'
import NoPage from './module/noPage';
import ScrollToTop from './module/scrollTop';
import Learn from './module/learn';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          {data.map((value, index) => (
            <Route key={index} path={`/${value.nama}`} element={<Module bab={value.bab} kiri={data[index - 1]?.nama || value.nama} kanan={data[index + 1]?.nama || value.nama} />} />
          ))}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
