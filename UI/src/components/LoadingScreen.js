import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import "../styles.css";

function LoadingScreen({ onLoaded }) {
  // When component mounts, wait for 3 seconds (animation duration) then call onLoaded.
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="loading-container">
      <img src={logo} alt="WELLSENSE Logo" className="loading-logo" />
      <div className="loading-bar-container">
        <div className="loading-bar"></div>
      </div>
      <div className="tagline">
        Connecting Patients and Care, Anytime, Anywhere
      </div>
    </div>
  );
}

export default LoadingScreen;
