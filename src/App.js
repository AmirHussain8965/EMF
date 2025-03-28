import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import FTPAccess from './pages/FTPAccess';
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import LandingPage from "./pages/LandingPage";
import Website from "./pages/Website";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Website' element={<Website />} />
        <Route path='/FTPAccess' element={<FTPAccess />} />
        <Route path='/Settings' element={<Settings />} />
        <Route path='/Support' element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
