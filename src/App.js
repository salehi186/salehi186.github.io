import React, {Component} from 'react';
import Sidebar from './SideBar/SideBar';
import './App.css';
import Section from './Section';
import SectionWrapper from './SectionWrapper';
import Toolbar from './Toolbar';
import Card from './Card/Card';
import FlipCard from './Card/FlipCard';
import Maps from './Map/Map.js';
import Marquee from './Marquee/Marquee';
import {guid} from './helpers';

class App extends Component {

    constructor() {
        super();
        this.friends = [
            //            {Name:"" , job:"",Description:"",facebook:"",linkedin:""},
            {
                Name: "Serjik Isagholian",
                job: "Solution Architect",
                Description: "Colleague, IRISA CO, 2008–2011. A frankly lovely Colleague who inspire you to le" +
                        "arn more. One of the my best friends.",
                facebook: "#",
                linkedin: "https://ir.linkedin.com/in/serjikisagholian",
                imageURL: "/images/team/serj.jpg"

            }, {
                Name: "Parinaz Mohsenpour",
                job: "Sharepoint Consultant at Oakton (Melbourne Area, Australia)",
                Description: "Colleague, IRISA CO, 2009 –2011. She is the symbol of enthusiasm and hard workin" +
                        "g.",
                facebook: "#",
                linkedin: "https://www.linkedin.com/pub/parinaz-mohsenpour/26/521/705",
                imageURL: "/images/team/parinaz.jpg"
            }, {
                Name: "Fabrizio Straccia",
                job: "Product Specialist presso BOARD International SA",
                Description: "Friend,Board workshop in Kish 2014. I am proud to be him friend, Senior programm" +
                        "er and product specialist. ",
                facebook: "#",
                linkedin: "https://ch.linkedin.com/pub/fabrizio-straccia/24/99b/596/en",
                imageURL: "/images/team/fab.jpg"

            }, {
                Name: "Nasir Zoue",
                job: "Marketing & Sales Manager at DANIELI (Iran Branch)",
                Description: "Friend/Colleague, 2008-2011 IRISA CO - A real success business man, he know mark" +
                        "eting",
                facebook: "#",
                linkedin: "https://ir.linkedin.com/pub/nasir-zooei/73/48a/944",
                imageURL: "/images/team/nasir.jpg"
            }, {
                Name: "M.T samadi",
                job: "Q.A. manager at MSC (Mobarakeh Steel Company)",
                Description: "Friend/Colleague, 2011-2015 MSC - A real manager who know how to lead his team.",
                facebook: "#",
                linkedin: "https://ir.linkedin.com/pub/m-t-samadi/40/3a1/380",
                imageURL: "/images/team/samadi.jpg"
            }, {
                Name: "Samaneh Madanian",
                job: "PhD Candidate- Auckland, New Zealand ",
                Description: "Friend/Classmate, 2002-2004 University of Applied Science and Technology.",
                facebook: "#",
                linkedin: "https://nz.linkedin.com/pub/samaneh-madanian/70/764/379",
                imageURL: "/images/team/madanian.jpg"
            }
        ];
        this.timeline = {
            educations: [
                // {title:"", description:"", startDate:"", endDate:"", college:{
                // name:"safahan", website:"", address:"", location:""} }
                {
                    title: "COMPUTER ENGINEERING - BS",
                    description: "",
                    startDate: "2006",
                    endDate: "2008",
                    college: {
                        name: "Safahan Institute Of Higher Education",
                        website: "",
                        address: "ESFAHAN, IRAN",
                        location: ""
                    }
                }, {
                    title: "COMPUTER SIENCE - Associates Degree",
                    description: "",
                    startDate: "2002",
                    endDate: "2004",
                    college: {
                        name: "University of Applied Science and Technology",
                        website: "",
                        address: "ESFAHAN, IRAN",
                        location: ""
                    }
                }

            ],
            jobs: [
                // {title:"", description:"", startDate:"", endDate:"", company:{ name:"MSC",
                // website:"", address:"", location:""} }
                {
                    title: "SENIOR WEB DEVELOPER",
                    description: "ASP.NET Pages, C#, SQL Server, Reporting Services, JavaScript, HTML5, CSS3, Boot" +
                            "Strap, Backbonejs ,...",
                    startDate: "2012",
                    endDate: "Now",
                    company: {
                        name: "MOBARAKE STEEL COMPANY (MSC)",
                        website: "http://en.msc.ir/",
                        address: "ESFAHAN , IRAN",
                        location: ""
                    }
                }, {
                    title: "WEB DEVELOPER, PROGRAMMER",
                    description: "ASP.NET , SQL Server,...",
                    startDate: "2009",
                    endDate: "2012",
                    company: {
                        name: "International Systems Engineering & Automation Company (IRISA)",
                        website: "http://www.irisaco.com/irisa-en/",
                        address: "ESFAHAN , IRAN",
                        location: ""
                    }
                }, {
                    title: "FRONT-END DEVELOPER",
                    description: "JavaScript, HTML, CSS, ASP.NET",
                    startDate: "2009",
                    endDate: "2009",
                    company: {
                        name: "Decision Makers Information Systems (DEMIS)",
                        website: "http://www.demisco.com/",
                        address: "ESFAHAN , IRAN",
                        location: ""
                    }
                }
            ]
        };

    }

    clickbtn(show) {
        if (show) 
            this.refs.testCard.Show();
        else 
            this
                .refs
                .testCard
                .Hide();

        }
    
    render() {

        return (
            <div className="App">

                <Sidebar/>
                <div className="mainContainer">
                    <Toolbar/>
                    <SectionWrapper>

                        <Section Id="section3" Name="section3" className="resume-section">
                            <div className="resume-section">
                                <ul className="resume">
                                    <li className="time-label">
                                        <span className="content-title">EDUCATION</span>
                                    </li>
                                    {   this.timeline.educations.map((itm,idx) => {
                                            return <li key={"education"+idx}>
                                                <div className="resume-tag">
                                                    <span className="fa fa-graduation-cap"></span>
                                                    <div className="resume-date">
                                                        <span>{itm.startDate}</span>
                                                        <div className="separator"></div>
                                                        <span>{itm.endDate}</span>
                                                    </div>
                                                </div>
                                                <div className="timeline-item">
                                                    <span className="timeline-location">
                                                        <i className="fa fa-map-marker"></i>{itm.college.address}</span>
                                                    <h3 className="timeline-header">{itm.title}</h3>
                                                    <div className="timeline-body">
                                                        <h4>{itm.college.name}</h4>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </li>;

                                        })}

                                    <li className="time-label">
                                        <span className="content-title">JOBS AND EXPERIENCE</span>
                                    </li>
                                    <li>
                                        <div className="resume-tag">
                                            <span className="fa fa-briefcase"></span>
                                            <div className="resume-date">
                                                <span>2012</span>
                                                <div className="separator"></div>
                                                <span>Now
                                                </span>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-location">
                                                <i className="fa fa-map-marker"></i>ESFAHAN , IRAN</span>
                                            <h3 className="timeline-header">SENIOR WEB DEVELOPER</h3>
                                            <div className="timeline-body">
                                                <h4>
                                                    <a href="http://en.msc.ir/" target="_blank">MOBARAKE STEEL COMPANY
                                                    </a>
                                                </h4>
                                                <span>ASP.NET Pages, C#, SQL Server, Reporting Services, JavaScript, HTML5,
                                                    CSS3, BootStrap, Backbonejs ,...
                                                </span>
                                    
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="resume-tag">
                                            <span className="fa fa-briefcase"></span>
                                            <div className="resume-date">
                                                <span>2012</span>
                                                <div className="separator"></div>
                                                <span>2009</span>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-location">
                                                <i className="fa fa-map-marker"></i>ESFAHAN , IRAN</span>
                                            <h3 className="timeline-header">UI/UX DESIGNER, PROGRAMMER</h3>
                                            <div className="timeline-body">
                                                <h4>
                                                    <a href="http://www.irisaco.com/irisa-en/" target="_blank">International Systems Engineering &amp; Automation Company (IRISA)</a>
                                                </h4>
                                                <span>ASP.NET , SQL Server</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="resume-tag">
                                            <span className="fa fa-briefcase"></span>
                                            <div className="resume-date">
                                                <span>2009</span>
                                                <div className="separator"></div>
                                                <span>2010</span>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-location">
                                                <i className="fa fa-map-marker"></i>ESFAHAN , IRAN</span>
                                            <h3 className="timeline-header">FRONT-END DEVELOPER</h3>
                                            <div className="timeline-body">
                                                <h4>
                                                    <a href="http://www.demisco.com/" target="_blank">Decision Makers Information Systems (DEMIS)</a>
                                                </h4>
                                                <span>JavaScript, HTML, CSS, ASP.NET</span>

                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </Section>

                        <Section Id="section1" Name="TeamSection">
                            <span className="fa fa-users"></span>
                            <hr width="90%"/>
                            <div className="TeamList">
                                {this
                                    .friends
                                    .map((p) => <FlipCard InboxAnimation={true} Width="49%" Height="245px" key={guid()}>
                                        <Card ShowAnimation="flipInX" HideAnimation="flipOutX" baseClass="front">
                                            <div
                                                className="frontWrapper"
                                                style={{
                                                backgroundImage: "url('" + p.imageURL + "')",
                                                width: "100%",
                                                height: "100%"
                                            }}>
                                                <div className="front-detail">
                                                    <h4>{p.Name}</h4>
                                                    <h3>{p.job}</h3>
                                                </div>
                                            </div>
                                        </Card>
                                        <Card ShowAnimation="flipInX" HideAnimation="flipOutX" baseClass="back">
                                            <p>{p.Description}
                                            </p>
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
                                    </FlipCard>)}
                            </div>

                        </Section>
                        <Section Id="section2" Name="ProfileSection">
                            <span className="fa fa-address-card-o"></span>
                            <hr width="90%"/>
                            <div className="profileContainer">
                                <div className="addressBlock">
                                    <Card Width="100%" Height="250px">
                                        <Maps
                                            style={{
                                            border: "solid 1px blue",
                                            height: "calc(100% -20px)",
                                            width: "100%"
                                        }}></Maps>
                                        <div
                                            style={{
                                            position: "relative",
                                            bottom: "0px",
                                            right: "0px",
                                            width: "95%",
                                            height: "20px",
                                            backgroundColor: "rgba(255,255,255,0.8)",
                                            padding: "10px",
                                            textAlign: "left"
                                        }}>
                                            <span id="opennMapCover" className="fa  fa-sign-in"></span>
                                            &nbsp;&nbsp;&nbsp; Isfahan, Iran
                                        </div>

                                    </Card>
                                    <Card
                                        width="100%"
                                        Height="250px"
                                        CloseButton="#closMapCover"
                                        OpenButton="#opennMapCover"
                                        ShowAnimation="slideInLeft"
                                        HideAnimation="slideOutLeft">
                                        <div className="ProfileCover">
                                            <span
                                                className="fa  fa-map-o"
                                                style={{
                                                position: "absolute",
                                                top: "0px",
                                                right: "0px",
                                                padding: "10px"
                                            }}
                                                id="closMapCover"></span>
                                            <span className="about-description">
                                                Hello. I am a
                                                <Marquee animateIn="bounceIn" animateOut="bounceOut">
                                                    <b>
                                                        Developer
                                                    </b>
                                                    <b >
                                                        Programer
                                                    </b>
                                                    <b>
                                                        Fast Learner
                                                    </b>
                                                </Marquee>

                                                <br/>I am passionate about programming, coding and webdesign
                                                <br/>Welcome to my Personal profile
                                            </span>
                                        </div>
                                    </Card>

                                </div>
                                <div id="profileDescription" className="profileDescription">
                                    <div className="tab-pane fade in active" id="bio">
                                        <h3>BIO</h3>
                                        <h4>ABOUT ME</h4>
                                        <p>
                                            Solutions-driven programmer with an eight-year track record of commended
                                            performance in modular and object-oriented programming. Well-versed in all
                                            phases of the software development life-cycle, with a strong working knowledge
                                            of algorithms and data structures. Proven success engineering customized
                                            solutions improving business processes, operations and profitability. Never
                                            gives up from trying new technologies. I'm always keeping an eye on the latest
                                            trends over web design and programming specially HTML5, CSS3, JavaScript. I
                                            think I'm hard worker, loves communications and internet, hope to work with
                                            other professional teams to learn more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <Section Id="section4" Name="section4"/>
                        <Section Id="section5" Name="section5"/>
                        <Section Id="section6" Name="section6"/>

                    </SectionWrapper>
                </div>
            </div>

        );
    }
}

export default App;