import React, { Component } from "react";
import "./index.css";
import { Marquee } from "../Marquee";

export const Toolbar = ({ home, back, next }) => {
  return (
    <nav className="Toolbar">
      <ul>
        <li className="ToolbarItem button" onClick={home}>
          <a className=" fa fa-home"></a>
        </li>
        <li className="ToolbarItem button" onClick={back}>
          <a className=" fa fa-chevron-left"></a>
        </li>

        <li className="ToolbarItem button" onClick={next}>
          <a className="fa fa-chevron-right"></a>
        </li>

        <li>
          <a className=" spliter"></a>
        </li>
      </ul>
      <span
        className=" fa fa-line-chart"
        style={{
          color: "blue",
          padding: "10px",
          fontSize: "30px",
        }}
      ></span>
      RECENT ACTIVITY:
      <Marquee>
        <span>Personel Evaluation Management System (Asp.net, C#, Ajax)</span>
        <span>
          Interactive Help -Website online tour (Simulation of Office2007 Merlin
          help by diffrent characters)
        </span>
        <span>Strategic Enterprise Management (Asp.net, C#)</span>
        <span>Business Process Management (Asp.net, C#)</span>
        <span>
          Jquery Spotlight Pluggin Interactive Help -Website online tour
          (Simulation of Office2007 Merlin help by diffrent characters)
        </span>
        <span>Asp.net Insertable/filterable Grid Extender</span>
        <span>Asp.net PersianCalendar Component</span>
      </Marquee>
    </nav>
  );
};
