import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <li onClick={toggleDropdown}>Hotel</li>
      {isOpen && (
        <ul>
          <li>Active Hotels</li>
          <li>Banned Hotels</li>
          <li>All Hotels</li>
          <li>Send Notifications</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
