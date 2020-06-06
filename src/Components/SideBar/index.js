import React, { Component } from "react";
import "./index.css";
import Profile from "../profile";
import "animate.css";

const SideBar = ({ viewLinks, onClick }) => {
  return (
    <div className="SideBar">
      <Profile />
      <aside className="hs-menu" id="hs-menu">
        <div className="profile_info">
          <h1>AliAkbar Salehi</h1>
          <h4>WEB DESIGNER</h4>
          <h6>
            <span className="fa fa-location-arrow"></span>
            &nbsp;&nbsp;&nbsp;GERMANY , BERLIN
          </h6>
        </div>
        <div className="separator-aside"></div>
        {/* menu */}
        <nav>
          {viewLinks.map((itm, idx) => {
            return (
              <a onClick={() => onClick(itm.id)} key={"menu" + idx}>
                <span className={"fa " + itm.icon}></span>
                <span className="menu_name">{itm.title}</span>
              </a>
            );
          })}
        </nav>
        {/* end menu*/}
        {/* social icons */}
        <div className="aside-footer">
          <a href="https://www.facebook.com/aliakbar.salehi.56" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/pub/aliakbar-salehi/37/508/249"
            target="_blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        {/* end social icons */}
      </aside>
    </div>
  );
};

export default SideBar;
