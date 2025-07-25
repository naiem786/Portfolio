/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Naiem Shaikh",
  title: "Hi all, I'm Naiem",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/naiem786",
  linkedin: "https://www.linkedin.com/in/naiemdev/",
  gmail: "naiemshaikhoff@gmail.com",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

 softwareSkills: [
  { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
  { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
  { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
  { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
  { skillName: "React Native", fontAwesomeClassname: "fab fa-react" },
  { skillName: "Tailwind CSS", fontAwesomeClassname: "fas fa-paint-brush" },
  { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
  { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
  { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
  { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
  { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
  { skillName: "ServiceNow", fontAwesomeClassname: "fas fa-tools" }
]
,
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Dr. Vishwanath Karad MIT World Peace University",
      logo: require("./assets/images/MitLogo.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "July 2022 - June 2024",
      desc: "CGPA: 8.27 / 10 | Ranked 9th out of 160 students in the batch.",
      descBullets: [
        "Studied DevOps, Data Structures & Algorithms, and Android Development",
        "Worked on full-stack development projects using React, Node.js, and MongoDB"
      ]
    },
    {
      schoolName: "AKI's Poona College of Arts, Science & Commerce",
      logo: require("./assets/images/PoonaCollegeLogo.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2019 - June 2022",
      desc: "CGPA: 9.45 / 10 | Graduated with top 10% academic distinction.",
      descBullets: [
        "Focused on Web Development, C Programming, Python, and Data Science",
        "Built foundational skills in software engineering and system design"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Show GitHub profile under Contact
  display: true, // ✅ Make it visible

  contributions: [
    {
      title: "Meta Mosaic",
      description:
        "Contributed to an open-source React component library for easily embedding SEO-friendly metadata into single-page applications.",
      githubRepo: "https://github.com/A-Coder02/meta-mosaic",
      npmLink: "https://www.npmjs.com/package/meta-mosaic"
    }
    // You can add more projects like this if needed
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Pronttera",
      companylogo: require("./assets/images/pronttera_logo.jpeg"),
      date: "December 2024 – Present",
      desc: "Working as a frontend-focused Software Developer, contributing to UI design, implementation, and integration of APIs for dynamic web applications.",
      descBullets: [
        "Built responsive, scalable components using React.js",
        "Integrated REST APIs to enhance data-driven functionality",
        "Collaborated with backend team to optimize data flow and performance"
      ]
    },
    {
      role: "Android & Frontend Developer",
      company: "Zerox Cloud",
      companylogo: require("./assets/images/ZeroxCloudLogo.png"),
      date: "September 2024 – Present",
      desc: "Assisted in building the official Zerox Cloud mobile application, expected to launch in September. Contributed to both Android app development and frontend web modules.",
      descBullets: [
        "Developed UI components using React Native for Android platform",
        "Built reusable React.js frontend modules for web dashboard",
        "Collaborated on app logic, API integration, and deployment strategy"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */



// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false  // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false  // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false  // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false  // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false  // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false  // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9325538129",
  email_address: "naiemshaikhoff@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false  // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  openSource,
  twitterDetails,
  isHireable,
  resumeSection
};
