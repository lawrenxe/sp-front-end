import React from "react";
import "./Slogan.css";

const Slogan = () => {
  return (
    <div>
      <p className="slogan-content">the Best Place to explore</p>
      <p className="slogan-content">
        the latest sneakers info in{" "}
        <select>
          <option value="town" selected>
            town
          </option>
          <option value="Melbourne">Melbourne</option>
          <option className="option-item" value="Sydney">
            Sydney
          </option>
          <option value="Brisbane">Brisbane</option>
          <option value="Others">Other Cities</option>
        </select>
      </p>
    </div>
  );
};

export default Slogan;
