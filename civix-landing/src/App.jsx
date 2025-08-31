import React from "react";
import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ForgotPassword from "./components/Forgotpassword.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-brand-light font-sans">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
}