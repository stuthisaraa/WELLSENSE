import React from "react";
import PatientCard from "../components/PatientCard";
import "../styles.css";

const patientsData = {
  "1st Floor": {
    Nephrology: [
      { id: 1, name: "John Doe", age: 56, sex: "Male", temp: 98.6, hr: 72, bp: "120/80", oxygen: "98%" },
      { id: 2, name: "Jane Smith", age: 48, sex: "Female", temp: 99.1, hr: 75, bp: "118/78", oxygen: "97%" },
      { id: 3, name: "Robert Brown", age: 63, sex: "Male", temp: 100.4, hr: 80, bp: "130/85", oxygen: "95%" },
    ],
    Cardiology: [
      { id: 4, name: "Emma Wilson", age: 52, sex: "Female", temp: 97.9, hr: 70, bp: "115/76", oxygen: "99%" },
      { id: 5, name: "Michael Lee", age: 58, sex: "Male", temp: 98.5, hr: 74, bp: "122/82", oxygen: "96%" },
      { id: 6, name: "Sophia Clark", age: 60, sex: "Female", temp: 98.3, hr: 78, bp: "118/79", oxygen: "97%" },
    ],
    Neurology: [
      { id: 7, name: "Liam Davis", age: 45, sex: "Male", temp: 98.7, hr: 73, bp: "117/75", oxygen: "98%" },
      { id: 8, name: "Olivia Harris", age: 50, sex: "Female", temp: 99.0, hr: 76, bp: "119/80", oxygen: "97%" },
      { id: 9, name: "Noah Wright", age: 55, sex: "Male", temp: 98.2, hr: 72, bp: "120/78", oxygen: "99%" },
    ],
  },
  "2nd Floor": {
    Nephrology: [
      { id: 10, name: "Ethan Johnson", age: 61, sex: "Male", temp: 98.9, hr: 77, bp: "121/79", oxygen: "96%" },
      { id: 11, name: "Ava Martinez", age: 53, sex: "Female", temp: 98.4, hr: 71, bp: "118/78", oxygen: "97%" },
      { id: 12, name: "Daniel White", age: 59, sex: "Male", temp: 99.2, hr: 79, bp: "125/81", oxygen: "95%" },
    ],
    Cardiology: [
      { id: 13, name: "Mia Anderson", age: 57, sex: "Female", temp: 98.1, hr: 74, bp: "116/77", oxygen: "98%" },
      { id: 14, name: "James Thomas", age: 60, sex: "Male", temp: 97.8, hr: 72, bp: "120/80", oxygen: "97%" },
      { id: 15, name: "Charlotte Lewis", age: 54, sex: "Female", temp: 98.6, hr: 75, bp: "118/79", oxygen: "96%" },
    ],
    Neurology: [
      { id: 16, name: "Benjamin Scott", age: 55, sex: "Male", temp: 98.5, hr: 73, bp: "117/76", oxygen: "97%" },
      { id: 17, name: "Amelia King", age: 52, sex: "Female", temp: 99.3, hr: 76, bp: "120/79", oxygen: "98%" },
      { id: 18, name: "Elijah Moore", age: 58, sex: "Male", temp: 97.9, hr: 72, bp: "119/77", oxygen: "96%" },
    ],
  },
};

function PatientList({ floor, department }) {
  const patients = patientsData[floor]?.[department] || [];

  return (
    <div className="patient-list">
      <div className="patients-container">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
}

export default PatientList;
