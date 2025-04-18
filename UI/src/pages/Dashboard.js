import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../styles.css";
import logo from "../assets/logo.png";
import Alerts from "../components/Alerts";
import Dropdown from "../components/Dropdown";

function Dashboard({ onLogout }) {
  const navigate = useNavigate();

  // Initialize selections so the user must explicitly select
  const [floor, setFloor] = useState("");
  const [department, setDepartment] = useState("");
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      name: "John Doe",
      vital: "High BP",
      floor: "1st Floor",
      department: "Cardiology",
      acknowledgedBy: null,
      acknowledgedAt: null,
    },
    {
      id: 2,
      name: "Jane Smith",
      vital: "Low Oxygen",
      floor: "2nd Floor",
      department: "Neurology",
      acknowledgedBy: null,
      acknowledgedAt: null,
    },
  ]);

  // State to control dropdown visibility
  const [showFloorDropdown, setShowFloorDropdown] = useState(false);
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);

  // Update the alert with the doctor who acknowledged it and the current time.
  const acknowledgeAlert = (id, doctor) => {
    setAlerts(
      alerts.map((alert) => {
        if (alert.id === id) {
          return {
            ...alert,
            acknowledgedBy: doctor,
            acknowledgedAt: new Date().toLocaleString(),
          };
        }
        return alert;
      })
    );
  };

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  // Navigate to PatientPage with the selected floor and department
  const viewPatients = () => {
    if (floor && department) {
      navigate("/patients", { state: { floor, department } });
    } else {
      alert("Please select both floor and department.");
    }
  };

  return (
    <div className="dashboard-container">
      <header>
        <img src={logo} alt="WELLSENSE Logo" className="dashboard-logo" />
        <h2>WELLSENSE</h2>
        <div className="top-right">
          {/* Floor Dropdown */}
          <div
            className="dropdown-container"
            style={{
              position: "relative",
              marginRight: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => setShowFloorDropdown(!showFloorDropdown)}
              className="hamburger-button"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FaBars size={20} />
            </button>
            <span className="dropdown-label-box">Floor</span>
            {showFloorDropdown && (
              <Dropdown
                options={["1st Floor", "2nd Floor"]}
                onChange={(value) => {
                  setFloor(value);
                  setShowFloorDropdown(false);
                }}
              />
            )}
          </div>
          {/* Department Dropdown */}
          <div
            className="dropdown-container"
            style={{
              position: "relative",
              marginRight: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => setShowDepartmentDropdown(!showDepartmentDropdown)}
              className="hamburger-button"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FaBars size={20} />
            </button>
            <span className="dropdown-label-box">Department</span>
            {showDepartmentDropdown && (
              <Dropdown
                options={["Cardiology", "Nephrology", "Neurology"]}
                onChange={(value) => {
                  setDepartment(value);
                  setShowDepartmentDropdown(false);
                }}
              />
            )}
          </div>
          {/* Alerts */}
          <div onClick={() => {}} style={{ cursor: "pointer", marginRight: "10px" }}>
            <Alerts alerts={alerts} onAcknowledge={acknowledgeAlert} />
          </div>
          {/* Logout Button */}
          <div className="logout-container">
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </header>
      <div className="content-container">
        {floor && department && (
          <button onClick={viewPatients} className="view-patients-button">
            View Patients
          </button>
        )}
      </div>
      {/* Background Slideshow */}
      <div className="background-slideshow">
        <div
          className="slide"
          style={{ backgroundImage: "url('/bg1.jpg')" }}
        ></div>
        <div
          className="slide"
          style={{ backgroundImage: "url('/bg2.jpg')" }}
        ></div>
        <div
          className="slide"
          style={{ backgroundImage: "url('/bg3.jpg')" }}
        ></div>
      </div>
    </div>
  );
}

export default Dashboard;