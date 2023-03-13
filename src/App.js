import React, { useState } from "react";
import "./App.css";
import Blynk from 'blynk-library'

const App = () => {
  const [blynk, setBlynk] = useState(null);
  const [status, setStatus] = useState("OFF");

  const handleConnect = () => {
    const AUTH_TOKEN = "ik86R45NKaQc25kh2ziw2-wjIjEX1gz8";
    const blynk = new Blynk.Blynk(AUTH_TOKEN);
    setBlynk(blynk);
  };

  const handleOn = () => {
    if (blynk) {
      blynk.virtualWrite(1, 1); //Escribimos un valor de 1 en el pin virtual 1 de Blynk
      setStatus("ON");
    }
  };

  const handleOff = () => {
    if (blynk) {
      blynk.virtualWrite(2, 1); //Escribimos un valor de 1 en el pin virtual 2 de Blynk
      setStatus("OFF");
    }
  };

  return (
    <div className="App">
      {blynk ? (
        <div>
          <h1>MAX30102</h1>
          <h2>Status: {status}</h2>
          <button onClick={handleOn}>On</button>
          <button onClick={handleOff}>Off</button>
        </div>
      ) : (
        <button onClick={handleConnect}>Connect to Blynk</button>
      )}
    </div>
  );
};

export default App;

