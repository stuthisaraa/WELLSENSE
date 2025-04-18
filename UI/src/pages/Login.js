import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import logo from "../assets/logo.png"; // Corrected import path

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false); // State for showing modal
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if the username is "user" and password is "123"
    if (username === "user" && password === "123") {
      onLogin();
      navigate("/dashboard");
    } else {
      setShowModal(true); // Show modal if credentials are invalid
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="login-container">
      <div className="logo-title">
        <img src={logo} alt="WELLSENSE Logo" className="logo" />
        <h2>WELLSENSE</h2>
      </div>

      <div className="login-box">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>

      {/* Modal for invalid credentials */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Invalid Credentials</h3>
            <p>The username or password you entered is incorrect. Please try again.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
