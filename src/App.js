import React, {Component} from 'react';
import Sidebar from './SideBar/SideBar';
import './App.css';
import Section from './Section';
import Toolbar from './Toolbar';
import Card from './Card/Card';
import FlipCard from './Card/FlipCard';
import Maps from './Map/Map.js';
import Marquee from './Marquee/Marquee';
import {guid} from './helpers';

export default class App extends Component {

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
            educations: {
                icon: "fa-graduation-cap",
                items: [
                    // {title:"", description:"", startDate:"", endDate:"", college:{
                    // name:"safahan", website:"", address:"", location:""} }
                    {
                        title: "COMPUTER ENGINEERING - BS",
                        description: "",
                        startDate: "2006",
                        endDate: "2008",

                        name: "Safahan Institute Of Higher Education",
                        website: null,
                        address: "ESFAHAN, IRAN",
                        location: ""

                    }, {
                        title: "COMPUTER SIENCE - Associates Degree",
                        description: "",
                        startDate: "2002",
                        endDate: "2004",

                        name: "University of Applied Science and Technology",
                        website: null,
                        address: "ESFAHAN, IRAN",
                        location: ""

                    }

                ]
            },
            "JOBS AND EXPERIENCE": {
                icon: "fa-briefcase",
                items: [
                    // {title:"", description:"", startDate:"", endDate:"", company:{ name:"MSC",
                    // website:"", address:"", location:""} }
                    {
                        title: "SENIOR WEB DEVELOPER",
                        description: "ASP.NET Pages, C#, SQL Server, Reporting Services, JavaScript, HTML5, CSS3, Boot" +
                                "Strap, Backbonejs ,...",
                        startDate: "2012",
                        endDate: "Now",

                        name: "MOBARAKE STEEL COMPANY (MSC)",
                        website: "http://en.msc.ir/",
                        address: "ESFAHAN , IRAN",
                        location: ""

                    }, {
                        title: "WEB DEVELOPER, PROGRAMMER",
                        description: "ASP.NET , SQL Server,...",
                        startDate: "2009",
                        endDate: "2012",

                        name: "International Systems Engineering & Automation Company (IRISA)",
                        website: "http://www.irisaco.com/irisa-en/",
                        address: "ESFAHAN , IRAN",
                        location: ""

                    }, {
                        title: "FRONT-END DEVELOPER",
                        description: "JavaScript, HTML, CSS, ASP.NET",
                        startDate: "2009",
                        endDate: "2009",

                        name: "Decision Makers Information Systems (DEMIS)",
                        website: "http://www.demisco.com/",
                        address: "ESFAHAN , IRAN",
                        location: ""

                    }
                ]
            }
        };

        this.skills = [
            {
                title: "BACK END",
                description: "Programming , Windows Application, Network Socket Programming , ...",
                tags: {
                    "C#": 95,
                    ".NET Framework": 95,
                    "ASP.NET": 98,
                    "ADO.NET": 100,
                    "Entity Framework": 95,
                    "WCF": 95,
                    "Web API": 80
                }

            }, {
                title: "FRONT END",
                description: "Website design and using latest framework",
                tags: {
                    "HTML5": 98,
                    "CSS3": 98,
                    "JavaScript": 98,
                    "REACT": 80,
                    "Angularjs 1.1": 70,
                    "Jquery": 95,
                    "Backbonejs": 90,
                    "photoShop": 70,
                    "Firework": 70,
                    "Flash": 70
                }
            }, {
                title: "OS, Web Servers & Office SKILLS",
                description: "Good understanding of windows and .net framework (registry ,filesystem, security" +
                        ",...) and familiar with linux (shell command, ssh ,nfs sharing ,LVM ,Raid",
                tags: {
                    "Windows": 90,
                    ".Net FrameWork": 90,
                    "IIS": 90,
                    "Ms Office": 85,
                    "Linux": 70,
                    "Debian": 60,
                    "Apache": 60
                }
            }, {
                title: "Source Versioning Control",
                description: "Good understanding of windows and .net framework (registry ,filesystem, security" +
                        ",...) and familiar with linux (shell command, ssh ,nfs sharing ,LVM ,Raid",
                tags: {
                    "GIT": 80,
                    "SVN": 98,
                    "TFS": 50
                }
            }, {
                title: "LANGUAGES",
                description: "Communication skills  (Writing, Reading, Speaking, Listening)",
                tags: {
                    "English": 70,
                    "GERMAN": 40,
                    "FARSI": 100
                }
            }

        ];
        this.viewManager = {
            views: [
                "ProfileSection", "resumeSection", "TeamSection", "SkillSection", "ContactSection"
            ],
            currentViewIndex: 0
        };

    }

    /**
 *
 * @param {*} state
 * null >> next view
 * -1 >> previous view
 * string >> move to specific view
 */
    changeView(state) {
        if (!state) {
            if (this.viewManager.currentViewIndex < this.viewManager.views.length - 1) 
                ++this.viewManager.currentViewIndex;
            else 
                this.viewManager.currentViewIndex = 0;

            }
        else if (state == -1) {
            if (this.viewManager.currentViewIndex > 0) 
                --this.viewManager.currentViewIndex;
            else 
                this.viewManager.currentViewIndex = this.viewManager.views.length - 1;
            }
        else  {
          this.viewManager.currentViewIndex =this.viewManager.views.findIndex(state);

        }

        window.location= window.location.toString().split('#')[0]+"#"+this.viewManager.views[this.viewManager.currentViewIndex];
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
    
    changeStatus() {}

    render() {

        return (
            <div className="App">

                <Sidebar/>
                <div className="mainContainer">
                    <Toolbar next={this.changeStatus.bind(this)} back={this.changeStatus.bind(this,[-1])}
                    home={this.changeStatus.bind(this,["ProfileSection"])}
                     />
                    <div className="SectionWrapper">
                        <Section Id="ProfileSection" Name="ProfileSection">
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

                        <Section Id="SkillSection" Name="SkillSection">
                            <div className="skillContainer">
                                {this
                                    .skills
                                    .map((itm ,itmIdx) => <div key={itmIdx} className="skillWrapper">
                                        <h3 className="skillTitle">
                                            {itm.title}
                                        </h3>
                                        <div className="skill">
                                            <h4>
                                                {itm.description}</h4>
                                            <ul>
                                                {Object
                                                    .keys(itm.tags)
                                                    .map((t,idx) => <li key={idx} >
                                                        <div
                                                            className="progress"
                                                            style={{
                                                            width: itm.tags[t] + "%"
                                                        }}>
                                                            <span className="progressText">
                                                                {t}</span>
                                                            <span className="percentage">
                                                                {itm.tags[t] + "%"}</span>
                                                        </div>

                                                    </li>)}
                                            </ul>
                                        </div>

                                    </div>)}
                            </div>

                        </Section>

                        <Section Id="resumeSection" Name="resumeSection" className="resume-section">

                            <div className="resume-section">

                                <ul className="resume">

                                    {Object
                                        .keys(this.timeline)
                                        .map((p) => {
                                            let r = this
                                                .timeline[p]
                                                .items
                                                .map((itm, idx) => {
                                                    return <li key={p + idx}>
                                                        <div className="resume-tag">
                                                            <span className={"fa " + this.timeline[p].icon}></span>
                                                            <div className="resume-date">
                                                                <span>{itm.startDate}</span>
                                                                <div className="separator"></div>
                                                                <span>{itm.endDate}</span>
                                                            </div>
                                                        </div>
                                                        <div className="timeline-item">
                                                            <span className="timeline-location">
                                                                <i className="fa-map-marker"></i>{itm.address}</span>
                                                            <h3 className="timeline-header">{itm.title}</h3>
                                                            <div className="timeline-body">
                                                                <h4>
                                                                    <a
                                                                        href={itm.website || "#"}
                                                                        target={itm.website
                                                                        ? "_blank"
                                                                        : ""}>
                                                                        {itm.name}
                                                                    </a>

                                                                </h4>
                                                                <span>{itm.description}</span>
                                                                <p>wow</p>
                                                            </div>
                                                        </div>
                                                    </li>;

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

                        <Section Id="TeamSection" Name="TeamSection">
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

                        <Section Id="ContactSection" Name="ContactSection">

                            <div class="contact_info">
                                <h3>Get in touch</h3>
                                <hr/>
                                <h5>I am waiting to assist you</h5>
                                <h6>Send me Email to get in touch</h6>

                                <hr/>
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
    }
}