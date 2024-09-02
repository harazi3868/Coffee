import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/header/Navbar'
import "./App.css";
import Home from "./pages/Home";
import History from "./pages/History";
import Types from "./pages/Types";
import Benefits from "./pages/Benefits";

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/types" element={<Types />} />
      <Route path="/benefits" element={<Benefits />} />
      </Routes>
    </div>
  )
}

export default App