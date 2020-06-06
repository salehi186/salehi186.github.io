import React, { Component, useRef, useState, useEffect } from "react";
import { SideBar } from "./Components/SideBar";
import { Section } from "./Components/Section";
import { Toolbar } from "./Components/Toolbar";
import { Card } from "./Components/Card";
import { FlipCard } from "./Components/FlipCard";
import { Marquee } from "./Components/Marquee";
import { Post } from "./Components/Post";
import { v4 } from "uuid";
import { Negros as Loading } from "react-explode";
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
          top: elm.offsetTop + elm.parentElement.offsetTop - 100,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };

  const [data, setData] = useState(null);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(
        "https://gist.githubusercontent.com/salehi186/5217acfd1df972ecb8e5812b4142c18e/raw/1401e9844771d0e4cc11edc287ed8a15e7a82a46/salehi186.db.json"
      );
      setData(await res.json());

      let postsRes = await fetch(
        "https://api.github.com/users/salehi186/gists"
      );
      setPosts((await postsRes.json()).filter((p) => p.description));
    };
    fetchData();
  }, []);
  return !data ? (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Loading size="400" delay={0} repeatDelay={0} repeat={500} />
    </div>
  ) : (
    <div className="App" ref={container}>
      <Toolbar
        next={() => scrollTo(currentSection, 1)}
        back={() => scrollTo(currentSection, -1)}
        home={() => scrollTo("ProfileSection")}
      />
      <div className="main-container">
        <SideBar
          viewLinks={data.viewManager.views}
          onClick={(id) => scrollTo(id)}
        />
        <div className="SectionWrapper">
          <Section Id="ProfileSection" Name="Profile">
            <div className="profileContainer">
              <Card Height="250px">
                <div className="ProfileCover">
                  <span className="about-description">
                    Hello. I am a &nbsp;
                    <Marquee animation="bounceIn">
                      <b>Lead</b>
                      <b>Software Engineer</b>
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

              <div className="tab-pane fade in active" id="bio">
                <h3>BIO</h3>
                <h4>ABOUT ME</h4>
                <p>
                  Solutions-driven programmer with an eight-year track record of
                  commended performance in modular and object-oriented
                  programming. Well-versed in all phases of the software
                  development life-cycle, with a strong working knowledge of
                  algorithms and data structures. Proven success engineering
                  customized solutions improving business processes, operations
                  and profitability. Never gives up from trying new
                  technologies. I'm always keeping an eye on the latest trends
                  over web design and programming specially HTML5, CSS3,
                  JavaScript. I think I'm hard worker, loves communications and
                  internet, hope to work with other professional teams to learn
                  more.
                </p>
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
                <FlipCard Width="96%" Height="350px" key={v4()}>
                  <Card>
                    <div
                      className="frontWrapper"
                      style={{
                        filter: "grayscale(70%)",
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
                  <Card>
                    <div
                      className="backWrapper"
                      style={{
                        backgroundImage: "url('" + p.imageURL + "')",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <div className="front-detail">
                        <p>{p.Description}</p>

                        <div className="social-icons ">
                          <a href={p.linkedin} target="_blank">
                            <span className="fa fa-linkedin"></span>
                          </a>
                          &nbsp;&nbsp;
                          <a href={p.facebook}>
                            <span className="fa fa-facebook"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                </FlipCard>
              ))}
            </div>
          </Section>
          <Section Id="Posts" Name="Posts">
            {posts.length ? (
              posts.map((post) => {
                const texts = post.description.split("#");
                const title = texts.splice(0, 1);
                return (
                  <Post key={v4()}
                    body={
                      <div>
                        <h4> {title}</h4>
                        <ul>
                          {texts.map((t) => (
                            <li key={v4()}
                              style={{
                                display: "inline-block",
                                border: "solid whitesmoke 1px",
                                color: "darkslategray",
                                backgroundColor: "lightgray",
                                padding: "3px",
                                margin: "1px",
                                fontSize: "12px",
                                textAlign: "left",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    }
                    head={new Date(post.updated_at).toLocaleString()}
                    link={post.html_url}
                  />
                );
              })
            ) : (
              <Loading size="400" delay={0} repeatDelay={0} repeat={500} />
            )}
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
