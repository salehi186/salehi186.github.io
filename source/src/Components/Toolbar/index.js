import React, { Component } from "react";
import "./index.css";
import { Marquee } from "../Marquee";

export const Toolbar = ({ home, back, next, news = [] }) => {
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
        {news.map((n) => (
          <span>{n}</span>
        ))}
      </Marquee>
    </nav>
  );
};
