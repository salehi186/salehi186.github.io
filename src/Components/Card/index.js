import React, { Component } from "react";

export const Card = ({ width, height, children }) => {
  return (
    <div
      className={"card"}
      style={{
        width: width,
        height: height,
      }}
    >
      {children}
    </div>
  );
};
