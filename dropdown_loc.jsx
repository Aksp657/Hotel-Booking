import React, { useState } from 'react';


const Dropdown_loc = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <li onClick={toggleDropdown}>Managed Locations 
      </li>
      {isOpen && (
        <ul>
          <li>Countries</li>
          <li>Cities</li>
          <li>Locations</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown_loc;