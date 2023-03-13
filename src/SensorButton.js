import React from 'react';
import axios from 'axios';

const SensorButton = ({ isOn, onToggle }) => {
  const handleClick = () => {
    axios.post('http://esp32/api/sensor', {
      isOn: !isOn
    }).then(onToggle);
  };

  return (
    <button onClick={handleClick}>
      {isOn ? 'Apagar sensor' : 'Encender sensor'}
    </button>
  );
};

export default SensorButton;
