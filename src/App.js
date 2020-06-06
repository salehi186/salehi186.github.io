import React, { Component, useRef, useState } from "react";
import Sidebar from "./Components/SideBar";
import Section from "./Components/Section";
import Toolbar from "./Components/Toolbar";
import Card from "./Components/Card";
import FlipCard from "./Components/FlipCard";
import Maps from "./Components/Map";
import Marquee from "./Components/Marquee";
import { v4 } from "uuid";
import { data } from "./data";
import "./App.css";

window.addEventListener("hashchange", function (e) {
  e.stopPropagation();
});

const App = () => {
  const container = useRef(null);
  const [currentSection, setCurrentSection] = useState("ProfileSection");
  const scrollTo = (id, step = 0) => {
    const sectionIndex =
      data.viewManager.views.findIndex((section) => section.id === id) + step;
    if (sectionIndex > -1 && sectionIndex < data.viewManager.views.length) {
      const elm = document.getElementById(
        data.viewManager.views[sectionIndex].id
      );
      setCurrentSection(data.viewManager.views[sectionIndex].id);
      if (elm.offsetLeft > 100) {
        document.getElementsByClassName("main-container")[0].scrollTo({
          top: 0,
          left: elm.offsetLeft - 200,
          behavior: "smooth",
        });
      } else {
        document.getElementsByClassName("main-container")[0].scrollTo({
          top: elm.offsetTop + elm.parentElement.offsetTop -100,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div className="App" ref={container}>
      <Toolbar
        next={() => scrollTo(currentSection, 1)}
        back={() => scrollTo(currentSection, -1)}
        home={() => scrollTo("ProfileSection")}
      />
      <div className="main-container">
        <Sidebar
          viewLinks={data.viewManager.views}
          onClick={(id) => scrollTo(id)}
        />
        <div className="SectionWrapper">
          <Section Id="ProfileSection" Name="Profile">
            <div className="profileContainer">
              <div className="addressBlock">
                <Card Width="100%" Height="250px">
                  <Maps
                    style={{
                      border: "solid 1px blue",
                      height: "calc(100% -20px)",
                      width: "100%",
                    }}
                  ></Maps>
                  <div
                    style={{
                      position: "relative",
                      bottom: "0px",
                      right: "0px",
                      width: "95%",
                      height: "20px",
                      backgroundColor: "rgba(255,255,255,0.8)",
                      padding: "10px",
                      textAlign: "left",
                    }}
                  >
                    <span id="opennMapCover" className="fa  fa-sign-in"></span>
                    &nbsp;&nbsp;&nbsp; BERLIN, GERMANY
                  </div>
                </Card>
                <Card
                  width="100%"
                  Height="250px"
                  CloseButton="#closMapCover"
                  OpenButton="#opennMapCover"
                  ShowAnimation="slideInLeft"
                  HideAnimation="slideOutLeft"
                >
                  <div
                    className="ProfileCover"
                    style={{
                      background:
                        '-webkit-linear-gradient(rgba(43, 48, 59, 0.75), rgba(118, 155, 236, 0.75)), url("images/cover.jpg") no-repeat',
                    }}
                  >
                    <span
                      className="fa  fa-map-o"
                      style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        padding: "10px",
                      }}
                      id="closMapCover"
                    ></span>
                    <span className="about-description">
                      Hello. I am a
                      <Marquee animateIn="bounceIn" animateOut="bounceOut">
                        <b>Developer</b>
                        <b>Programer</b>
                        <b>Fast Learner</b>
                      </Marquee>
                      <br />I am passionate about programming, coding and
                      webdesign
                      <br />
                      Welcome to my Personal profile
                    </span>
                  </div>
                </Card>
              </div>
              <div id="profileDescription" className="profileDescription">
                <div className="tab-pane fade in active" id="bio">
                  <h3>BIO</h3>
                  <h4>ABOUT ME</h4>
                  <p>
                    Solutions-driven programmer with an eight-year track record
                    of commended performance in modular and object-oriented
                    programming. Well-versed in all phases of the software
                    development life-cycle, with a strong working knowledge of
                    algorithms and data structures. Proven success engineering
                    customized solutions improving business processes,
                    operations and profitability. Never gives up from trying new
                    technologies. I'm always keeping an eye on the latest trends
                    over web design and programming specially HTML5, CSS3,
                    JavaScript. I think I'm hard worker, loves communications
                    and internet, hope to work with other professional teams to
                    learn more.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section Id="SkillSection" Name="Skills">
            <div className="skillContainer">
              {data.skills.map((itm, itmIdx) => (
                <div key={itmIdx} className="skillWrapper">
                  <h3 className="skillTitle">{itm.title}</h3>
                  <div className="skill">
                    <h4>{itm.description}</h4>
                    <ul>
                      {Object.keys(itm.tags).map((t, idx) => (
                        <li key={idx}>
                          <div
                            className="progress"
                            style={{
                              width: itm.tags[t] + "%",
                            }}
                          >
                            <span className="progressText">{t}</span>
                            <span className="percentage">
                              {itm.tags[t] + "%"}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section Id="ResumeSection" Name="Resume" className="resume-section">
            <div className="resume-section">
              <ul className="resume">
                {Object.keys(data.timeline).map((p) => {
                  let r = data.timeline[p].items.map((itm, idx) => {
                    return (
                      <li key={p + idx}>
                        <div className="resume-tag">
                          <span
                            className={"fa " + data.timeline[p].icon}
                          ></span>
                          <div className="resume-date">
                            <span>{itm.startDate}</span>
                            <div className="separator"></div>
                            <span>{itm.endDate}</span>
                          </div>
                        </div>
                        <div className="timeline-item">
                          <span className="timeline-location">
                            <i className="fa fa-map-marker"></i>
                            {itm.address}
                          </span>
                          <h3 className="timeline-header">{itm.title}</h3>
                          <div className="timeline-body">
                            <h4>
                              <a
                                href={itm.website || "#"}
                                target={itm.website ? "_blank" : ""}
                              >
                                {itm.name}
                              </a>
                            </h4>
                            <span>{itm.description}</span>
                            <p></p>
                          </div>
                        </div>
                      </li>
                    );
                  });
                  r.unshift(
                    <li className="time-label" key={p}>
                      <span className="content-title">{p}</span>
                    </li>
                  );
                  return r;
                })}
              </ul>
            </div>
          </Section>

          <Section Id="TeamSection" Name="Friends">
            <div className="TeamList">
              {data.friends.map((p) => (
                <FlipCard
                  InboxAnimation={true}
                  Width="49%"
                  Height="245px"
                  key={v4()}
                >
                  <Card
                    ShowAnimation="flipInX"
                    HideAnimation="flipOutX"
                    baseClass="front"
                  >
                    <div
                      className="frontWrapper"
                      style={{
                        backgroundImage: "url('" + p.imageURL + "')",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <div className="front-detail">
                        <h4>{p.Name}</h4>
                        <h3>{p.job}</h3>
                      </div>
                    </div>
                  </Card>
                  <Card
                    ShowAnimation="flipInX"
                    HideAnimation="flipOutX"
                    baseClass="back"
                  >
                    <p>{p.Description}</p>
                    <div className="social-icons">
                      <a href={p.linkedin} target="_blank">
                        <span className="fa fa-linkedin"></span>
                      </a>
                      &nbsp;&nbsp;
                      <a href={p.facebook}>
                        <span className="fa fa-facebook"></span>
                      </a>
                    </div>
                  </Card>
                </FlipCard>
              ))}
            </div>
          </Section>

          <Section Id="ContactSection" Name="Contact">
            <div className="contact_info">
              <h3>Get in touch</h3>
              <hr />
              <h5>I am waiting to assist you</h5>
              <h6>Send me Email to get in touch</h6>

              <hr />
            </div>
            <fieldset id="contact_form">
              <div id="result"></div>
              <a href="mailto:salehi186@gmail.com" target="_blank">
                <span className="submit_btn" id="submit_btn">
                  Send message to salehi186@gmail.com
                </span>
              </a>
            </fieldset>
          </Section>
        </div>
      </div>
    </div>
  );
};
export default App;

// const changeView = (state) => {
//   if (!state) {
//     if (this.viewManager.currentViewIndex < this.viewManager.views.length - 1)
//       ++this.viewManager.currentViewIndex;
//     else this.viewManager.currentViewIndex = 0;
//   } else if (state == -1) {
//     if (this.viewManager.currentViewIndex > 0)
//       --this.viewManager.currentViewIndex;
//     else
//       this.viewManager.currentViewIndex = this.viewManager.views.length - 1;
//   } else {
//     this.viewManager.currentViewIndex = this.viewManager.views.findIndex(
//       (p) => p.id == state
//     );
//   }

//   let ctn = document.getElementsByClassName("mainContainer")[0];
//   let direction = null;

//   if (ctn.scrollWidth - ctn.offsetWidth > 200) {
//     direction = "Left";
//   } else {
//     ctn = document.getElementsByClassName("App")[0];
//     direction = "Top";
//   }
//   let target = document.getElementById(
//     this.viewManager.views[this.viewManager.currentViewIndex].id
//   );

//   let step = (target["offset" + direction] - ctn["scroll" + direction]) / 500;

//   let baseScroll = ctn["scroll" + direction];
//   animate((r) => {
//     if (direction == "Top")
//       window.scrollTo(0, baseScroll + r * step + target.parentNode.offsetTop);
//     else ctn["scroll" + direction] = baseScroll + r * step;
//   }, 500);
// };
