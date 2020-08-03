import React from "react";

export default function Legend() {
  return (
    <>
    <p className='legend-label'> 
      Color indicates quantity of people which have Birthday that month
    </p>
    <ul className="legend">
      <li className="legend-item">
        <div className="color-temp grey"></div>
        <p className="color-dscrptn">0-2</p>
      </li>
      <li className="legend-item">
        <div className="color-temp blue"></div>
        <p className="color-dscrptn">3-6</p>
      </li>
      <li className="legend-item">
        <div className="color-temp purple"></div>
        <p className="color-dscrptn">7-10</p>
      </li>
      <li className="legend-item">
        <div className="color-temp red"></div>
        <p className="color-dscrptn">>10</p>
      </li>
    </ul>
    </>
  );
}
