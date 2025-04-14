import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PatientPage from "./pages/PatientPage";
import LoadingScreen from "./components/LoadingScreen"; // Import LoadingScreen
import "./styles.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setIsLoading(true); // Start loading after login
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // Called by LoadingScreen when loading is complete
  const handleLoaded = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated 
              ? (isLoading 
                  ? <LoadingScreen onLoaded={handleLoaded} /> 
                  : <Dashboard onLogout={handleLogout} />)
              : <Navigate to="/" />
          } 
        />
        <Route 
          path="/patients" 
          element={isAuthenticated ? <PatientPage /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
