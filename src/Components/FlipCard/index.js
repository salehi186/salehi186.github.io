import React, { Component } from "react";
import { Card } from "../Card";
import { v4 } from "uuid";
import "./index.css";

export const FlipCard = ({ Width = "400px", Height = "400px", children }) => {
  return (
    <div
      className="FlipCard flip-card"
      style={{ width: Width, height: Height }}
    >
      {children}
    </div>
  );
};
