// src/pages/PatientPage.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PatientList from "./PatientList";
import "../styles.css";

function PatientPage() {
  const navigate = useNavigate();
  const location = useLocation();
  // Get selected floor and department from navigation state
  const { floor, department } = location.state || {};

  // If floor or department is missing, navigate back to dashboard
  if (!floor || !department) {
    navigate("/dashboard");
    return null;
  }

  return (
    <div className="patient-page-container">
      <div className="patient-page-header">
        <h2>
          Patients in {department} - {floor}
        </h2>
        <button className="back-button" onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </button>
      </div>
      <PatientList floor={floor} department={department} />
    </div>
  );
}

export default PatientPage;
