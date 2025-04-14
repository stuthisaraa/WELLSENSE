import React, { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import alertSound from "../assets/alert-sound.mp3"; // Add an alert sound file

function Alerts({ alerts, onAcknowledge }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [unacknowledgedCount, setUnacknowledgedCount] = useState(0);

  // Play sound on new alert
  useEffect(() => {
    const newUnacknowledged = alerts.filter((alert) => !alert.acknowledgedBy).length;
    if (newUnacknowledged > unacknowledgedCount) {
      new Audio(alertSound).play(); // Play sound on new alert
    }
    setUnacknowledgedCount(newUnacknowledged);
  }, [alerts, unacknowledgedCount]);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div className="alerts">
      {/* Bell icon with badge */}
      <div className="bell-icon" onClick={toggleModal} style={{ cursor: "pointer", position: "relative" }}>
        <FaBell size={24} />
        {unacknowledgedCount > 0 && (
          <span className="badge">{unacknowledgedCount}</span>
        )}
      </div>

      {/* Modal for Alerts */}
      {modalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>🚨 Abnormal Alerts</h2>
            {alerts.length > 0 ? (
              alerts.map((alert) => (
                <div key={alert.id} className={`alert-item ${alert.acknowledgedBy ? "acknowledged" : "unread"}`}>
                  <p>
                    <strong>{alert.name}</strong> – {alert.vital}
                    <br />
                    Floor: {alert.floor} | Department: {alert.department}
                  </p>
                  {alert.acknowledgedBy ? (
                    <p className="acknowledged-text">✅ Acknowledged by {alert.acknowledgedBy} at {alert.acknowledgedAt}</p>
                  ) : (
                    <div className="acknowledge-buttons">
                      <button onClick={() => onAcknowledge(alert.id, "Dr. Monica")}>Dr. Monica</button>
                      <button onClick={() => onAcknowledge(alert.id, "Dr. Rachel")}>Dr. Rachel</button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No alerts</p>
            )}
            <button className="close-btn" onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Alerts;
