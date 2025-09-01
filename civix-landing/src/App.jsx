import React, { useEffect } from "react";
import { Routes, Route, useNavigate, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ForgotPassword from "./components/Forgotpassword.jsx";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import OfficialDashboard from "./components/OfficialDashboard.jsx";
import CitizenDashboard from "./components/CitizenDashboard.jsx";
import CreatePetition from "./components/CreatePetition.jsx";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer.jsx";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 Get current route

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const isLoggedIn = localStorage.getItem("authToken");
    const currentPath = window.location.pathname;

    if (isLoggedIn && (currentPath === "/" || currentPath === "/login")) {
      if (role === "official") {
        navigate("/dashboard/official");
      } else {
        navigate("/dashboard/citizen");
      }
    }
  }, []);

  const isLoggedIn = localStorage.getItem("authToken");

  return (
    <div className="flex flex-col min-h-screen bg-brand-light font-sans">
      {/* Main Content */}
      <div className="flex-grow">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
  path="/login"
  element={
    <LoginForm
      onForgotPassword={() => navigate("/forgot-password")}
      onSwitchToRegister={() => navigate("/register")}
    />
  }
/>

            <Route path="/register" element={<RegisterForm />} />

            {/* Protected Dashboard Routes */}
            <Route
              path="/dashboard/citizen"
              element={isLoggedIn ? <CitizenDashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/dashboard/official"
              element={isLoggedIn ? <OfficialDashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/dashboard/official/create-petition"
              element={isLoggedIn ? <CreatePetition /> : <Navigate to="/" />}
            />
          </Routes>

          <ToastContainer position="top-center" autoClose={3000} />
        </div>
      </div>

      {/* Conditionally render Footer */}
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}
