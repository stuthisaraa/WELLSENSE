
import React from "react";
import PulseChart from "./PulseChart"; // Import PulseChart component

function PatientCard({ patient }) {
  return (
    <div className="patient-card">
      <h3>{patient.name}, {patient.age}</h3>
      <p><strong>Sex:</strong> {patient.sex}</p>
      <p><strong>Temperature:</strong> {patient.temp}°F</p>
      <p><strong>Heart Rate:</strong> {patient.hr} BPM</p>
      <p><strong>Blood Pressure:</strong> {patient.bp}</p>
      <p><strong>Oxygen Levels:</strong> {patient.oxygen}</p>

      {/* Real-time Pulse Chart */}
      <div className="pulse-chart-container">
        <PulseChart patientId={patient.id} />
      </div>
    </div>
  );
}

export default PatientCard;
