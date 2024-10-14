import React from 'react';
import Navbar from '../components/Navbar';
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

const App = () => {
  return (
    <div>

      <BrowserRouter>
        
        <Navbar />
        <Sidebar/>
      </BrowserRouter>
      
    </div>
  );
};

export default App;