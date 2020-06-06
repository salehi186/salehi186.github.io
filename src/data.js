export const data={
    friends: [
      //            {Name:"" , job:"",Description:"",facebook:"",linkedin:""},
      {
        Name: "Serjik Isagholian",
        job: "Solution Architect",
        Description:
          "Colleague, IRISA CO, 2008–2011. A frankly lovely Colleague who inspire you to le" +
          "arn more. One of the my best friends.",
        facebook: "#",
        linkedin: "https://ir.linkedin.com/in/serjikisagholian",
        imageURL: "images/team/serj.jpg",
      },
      {
        Name: "Ahmad Babaei Moghadam",
        job: "IT Expert",
        Description: "Friend/Colleague",
        facebook: "#",
        linkedin: "https://www.linkedin.com/in/ahmad-babaei-moghadam-9a25b637/",
        imageURL: "images/team/babae.jpg",
      },
      {
        Name: "Parinaz Mohsenpour",
        job: "Sharepoint Consultant at Oakton (Melbourne Area, Australia)",
        Description:
          "Colleague, IRISA CO, 2009 –2011. She is the symbol of enthusiasm and hard workin" +
          "g.",
        facebook: "#",
        linkedin: "https://www.linkedin.com/pub/parinaz-mohsenpour/26/521/705",
        imageURL: "images/team/parinaz.jpg",
      },
      {
        Name: "M.T samadi",
        job: "Q.A. manager at MSC (Mobarakeh Steel Company)",
        Description:
          "Friend/Colleague, 2011-2015 MSC - A real manager who know how to lead his team.",
        facebook: "#",
        linkedin: "https://ir.linkedin.com/pub/m-t-samadi/40/3a1/380",
        imageURL: "images/team/samadi.jpg",
      },
    ],
    timeline: {
      "JOBS AND EXPERIENCE": {
        icon: "fa-briefcase",
        items: [
          // {title:"", description:"", startDate:"", endDate:"", company:{ name:"MSC",
          // website:"", address:"", location:""} }
          {
            title: "SENIOR FRONTEND DEVELOPER",
            description: "React js, Redux, JavaScript, HTML5, CSS3",
            startDate: "2018",
            endDate: "Now",
  
            name: "Pidoco GmbH",
            website: "http://pidoco.com/",
            address: "BERLIN , GERMANY",
            location: "",
          },
          {
            title: "SENIOR WEB DEVELOPER",
            description:
              "JavaScript, HTML5, CSS3, BootStrap, ASP.NET Pages, C#, SQL Server, Reporting Services, Backbonejs ,...",
            startDate: "2012",
            endDate: "2018",
  
            name: "MOBARAKE STEEL COMPANY (MSC)",
            website: "http://en.msc.ir/",
            address: "ESFAHAN , IRAN",
            location: "",
          },
          {
            title: "WEB DEVELOPER, PROGRAMMER",
            description:
              "JavaScript, HTML, CSS, Jquery, ASP.NET , SQL Server,...",
            startDate: "2009",
            endDate: "2012",
  
            name:
              "International Systems Engineering & Automation Company (IRISA)",
            website: "http://www.irisaco.com/irisa-en/",
            address: "ESFAHAN , IRAN",
            location: "",
          },
          {
            title: "FRONT-END DEVELOPER",
            description: "JavaScript, HTML, CSS, ASP.NET",
            startDate: "2009",
            endDate: "2009",
  
            name: "Decision Makers Information Systems (DEMIS)",
            website: "http://www.demisco.com/",
            address: "ESFAHAN , IRAN",
            location: "",
          },
        ],
      },
      Educations: {
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
            location: "",
          },
          {
            title: "COMPUTER SIENCE - Associates Degree",
            description: "",
            startDate: "2002",
            endDate: "2004",
  
            name: "University of Applied Science and Technology",
            website: null,
            address: "ESFAHAN, IRAN",
            location: "",
          },
        ],
      },
    },
    skills: [
      {
        title: "BACK END",
        description:
          "Programming , Windows Application, Network Socket Programming , ...",
        tags: {
          "C#": 95,
          ".NET Framework": 95,
          "ASP.NET": 98,
          "ADO.NET": 100,
          "Entity Framework": 95,
          WCF: 95,
          "Web API": 80,
        },
      },
      {
        title: "FRONT END",
        description: "Website design and using latest framework",
        tags: {
          HTML5: 98,
          CSS3: 98,
          JavaScript: 98,
          REACT: 80,
          "Angularjs 1.1": 70,
          Jquery: 95,
          Backbonejs: 90,
          photoShop: 70,
          Firework: 70,
          Flash: 70,
        },
      },
      {
        title: "OS, Web Servers & Office SKILLS",
        description:
          "Good understanding of windows and .net framework (registry ,filesystem, security" +
          ",...) and familiar with linux (shell command, ssh ,nfs sharing ,LVM ,Raid",
        tags: {
          Windows: 90,
          ".Net FrameWork": 90,
          IIS: 90,
          "Ms Office": 85,
          Linux: 70,
          Debian: 60,
          Apache: 60,
        },
      },
      {
        title: "Source Versioning Control",
        description:
          "Good understanding of windows and .net framework (registry ,filesystem, security" +
          ",...) and familiar with linux (shell command, ssh ,nfs sharing ,LVM ,Raid",
        tags: {
          GIT: 80,
          SVN: 98,
          TFS: 50,
        },
      },
      {
        title: "LANGUAGES",
        description:
          "Communication skills  (Writing, Reading, Speaking, Listening)",
        tags: {
          English: 70,
          GERMAN: 40,
          FARSI: 100,
        },
      },
    ],
    viewManager: {
      views: [
        {
          id: "ProfileSection",
          title: "Profil",
          icon: "fa-home",
        },
        {
          id: "SkillSection",
          title: "Skills",
          icon: "fa-diamond",
        },
        {
          id: "ResumeSection",
          title: "Resume",
          icon: "fa-newspaper-o",
        },
        {
          id: "TeamSection",
          title: "Friends",
          icon: "fa-users",
        },
        {
          id: "ContactSection",
          title: "Contact",
          icon: "fa-paper-plane",
        },
      ],
    },
  };