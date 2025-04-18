import React from "react";
import "../styles.css"; // Import your main stylesheet

function Dropdown({ options, onChange }) {
  return (
    <ul className="dropdown-menu show">
      {options.map((option) => (
        <li
          key={option}
          className="dropdown-option"
          onClick={() => onChange(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;
