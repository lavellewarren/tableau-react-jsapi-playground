import React from "react";
import logo from "../images/tableau.png";

export default function Home() {
  return (
    <div style={{
      marginTop: '50px'
    }}>
      <img src={logo} alt="tableauImage" />
      <h1>React Playground for Tableau JavaScript API</h1>
    </div>
  );
}

