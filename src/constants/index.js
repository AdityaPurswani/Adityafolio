import {
    game,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    acn,
    gesture,
    linkedin,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    bc,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    emotions,
    numpy,
    java,
    firebase,
    linux,
    rubrik,
    python,
    opencv,
    mysql,
    primark,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    fuzzy,
    nhce,
    adityafolio,
    uon,
    nft,
    insta,
    x,
    github,
    ad
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const socials = [
    {
      id: "insta",
      logo: insta,
      link: 'https://www.instagram.com/aditya._.purswani/',
    },
    {
      id: "x",
      logo: x,
      link: 'https://twitter.com/purswani_adi',
    },
    {
      id: "github",
      logo: github,
      link: 'https://github.com/AdityaPurswani',
    },
    {
      id: "linkedin",
      logo: linkedin,
      link: 'https://www.linkedin.com/in/purswani-aditya/'
    },
  ];
  const services = [
    {
      title: "Machine Learning Enthusiast",
      icon: web,
    },
    {
      title: "Web Development",
      icon: mobile,
    },
    {
      title: "Learning Deep Learning Techniques",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: creator,
    },
    {
      title: "Learning AR/VR",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "opencv",
      icon: opencv,
    },
    {
      name:"mysql",
      icon: mysql,
    },
    {
      name: 'mongodb',
      icon: mongodb,
    },
    {
      name: 'linux',
      icon: linux,
    },
    {
      name: 'numpy',
      icon: numpy,
    },
    {
      name: 'firebase',
      icon: firebase,
    },
    {
      name: 'java',
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Customer Success Engineering Intern",
      company_name: "Rubrik",
      icon: rubrik,
      iconBg: "#383E56",
      date: "Feb 2023 - Aug 2023",
      points: [
        "Worked on Rubrik CDM cluster versions: 5.x, 6.x, 7.x and 8.x",
        "Primarily working on Cluster Ops issues including Cluster Down, Node down, etc scenarios on a daily basis.",
        "Log analysis and root cause finding for every Node/Cluster Down related issues in order mitigate them properly and permanently so that customer doesn't face the same issue again.",
        "Working on all hardware issues related to a Rubrik brik and managing the pre and post replacement procedures including, reaching out to customer for replacement, raising the shipping request, assisting in hardware installation/replacement and performing the post replacement steps.",
        "Experience in handling Rubrik CDM upgrades via CLI, Node addition/removal/decommission, performing all the logical replacements post physical replacements and other cluster operation tasks."
      ],
    },
    {
      title: "Retail Assistant",
      company_name: "Primark",
      icon: primark,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Present",
      points: [
        "Maintaining and helping customers finding things they need",
        "Serving the customers at tills and helping them with any queries they might have",
      ],
    },
    
  ];
  
  const educations = [
    {
      title: "MSc. Computer Science",
      company_name: "University of Nottingham",
      icon: uon,
      iconBg: "#383E56",
      date: "September 2023 - August 2025",
      points: [
        "Grade: 74.5%",
        "Modules - Machine Learning, Handling Uncertainties using Fuzzy sets and systems, Advanced Computer Networks, Big Data, Mixed Reality, Research Methods",
      ],
    },
    {
      title: "BE Information Science",
      company_name: "New Horizon College of Engineering",
      icon: nhce,
      iconBg: "#E6DEDD",
      date: "July 2019 - May 2023",
      points: [
        "Grade: 9.62 CGPA",
        "Activities and societies: VMware Society and Computer Society of India",
        "As a Bachelor of Engineering student in the niche of Information Science. I learned a lot of technologies while my bachelor's like fundamentals of programming languages, Machine Learning, Web Development, Mobile Development, Data Science using Python, and a lot more. During this phase, I was able to test out my skills as by making a lot of projects mostly related to Computer Vision, Machine Learning.",
        "Skills: SQL · Computer Networking · Problem Solving · Python (Programming Language) · Machine Learning · Machine Learning Algorithms"
      ],
    },
  ]

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Cursor Controller",
      description:
        "An app created with Python, OpenCV, and Numpy in which a user can control his/her mouse using his/her fingers or hand gestures and can perform certain operations. OpenCV to create masks and capture the video input.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
        {
          name: "graham scan",
          color: "pink-text-gradient",
        },
        {
          name: "pyautoGUI",
          color: "blue-text-gradient",
        }
      ],
      image: gesture,
      source_code_link: "https://github.com/AdityaPurswani/Cursor-Controller",
    },
    {
      name: "NFT Club - An NFT Marketplace",
      description:
        "A decentralized web app that will help and encourage you to trade NFT, tell you about the trends of NFT, and will help you know more about blockchain and smart contracts",
      tags: [
        {
          name: "solidity",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "green-text-gradient",
        },
        {
          name: "sanity",
          color: "pink-text-gradient",
        },
        {
          name: "metamask",
          color: "green-text-gradient",
        },
        {
          name: "smart contract",
          color: "blue-text-gradient",
        }
      ],
      image: nft,
      source_code_link: "https://github.com/",
    },
    {
      name: "Predicting Breast Cancer using Clinical, MRI Data",
      description:
        "Developed models to predict PCR and RFS levels in patients with breast cancer based on clinical and MRI data containing 117 features. Used data preprocessing techniques such as scaling along with SMOTE to balance the classes and feature selection to reduce dimensions.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "ml algos",
          color: "green-text-gradient",
        },
        {
          name: "jupyter notebook",
          color: "pink-text-gradient",
        },
      ],
      image: bc,
      source_code_link: "https://github.com/AdityaPurswani/Predicting-Breast-Cancer-by-Integrating-Clinical-and-MRI-Data-via-Machine-Learning",
    },
    {
      name: "Fuzzy-System-to-Assist-Doctors",
      description:
        "Developed fuzzy inference models which takes patients age, body temperature and headache as constraints and helps doctors predict the severity of the case taking the uncertainity of medical devices and people into account.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "fuzzy logic",
          color: "green-text-gradient",
        },
        {
          name: "mamdani inference",
          color: "pink-text-gradient",
        },
        {
          name: "tsk inference",
          color: "blue-text-gradient",
        },
      ],
      image: fuzzy,
      source_code_link: "https://github.com/AdityaPurswani/COMP4033---Fuzzy-System-to-Assist-Doctors",
    },
    {
      name: "Adityafolio 😎",
      description:
        "You are currently looking at this website 😁. An interactive and playful website showcasing my skills, publications, education and experiences created in an attempt to enter the web 3 spectrum and learn it. Apart from it I got to learn tailwind css from this project.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "web3",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
        {
          name: "adityafolio",
          color: "green-text-gradient",
        },
      ],
      image: adityafolio,
      source_code_link: "https://github.com/AdityaPurswani/Adityafolio",
    },
    {
      name: "Ad Hoc Network Routing Protocols in Landslide Scenario",
      description:
        "Build this project as a part of my Advanced Computer Networks module where we needed to compare the performance of different routing protocols in the chosen scenario (landslide).",
      tags: [
        {
          name: "one simulator",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "acn",
          color: "pink-text-gradient",
        },
        {
          name: "comp4032",
          color: "green-text-gradient",
        },
      ],
      image: acn,
      source_code_link: "https://github.com/AdityaPurswani/COMP4032-Comparative-Study-of-Ad-Hoc-Network-Routing-Protocols-in-Landslide-Scenarios-Using-ONE",
    },
    {
      name: "Prediction of Alziemers Dimentia using Big Data",
      description:
        "Using big data techniques to identify potential genetic biomarkers for Alzheimer’s disease by pre-processing data using one-hot encoding, selecting features using the Chi-Square test, developing models with PySpark’s MLlib and SkLearn architectures achieving an ROC score of 0.94",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "apache spark",
          color: "green-text-gradient",
        },
        {
          name: "databricks",
          color: "pink-text-gradient",
        },
        {
          name: "machine learning",
          color: "blue-text-gradient",
        }
      ],
      image: ad,
      source_code_link: "https://github.com/AdityaPurswani/COMP4124-BigData",
    },
    {
      name: "VR - Zombie Outbreak Survivial Quest",
      description:
        "A fun VR 💀 game prototype made around Zombie Appocalypse 🧟‍♂️ as a part of learning the technology. There is still a bit of work needed to be done to make this game even better. P.S. - Posted a gameplay video as a link and Code link will be published soon 😅",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "apache spark",
          color: "green-text-gradient",
        },
        {
          name: "databricks",
          color: "pink-text-gradient",
        },
        {
          name: "machine learning",
          color: "blue-text-gradient",
        }
      ],
      image: game,
      source_code_link: "https://youtu.be/i22UeIVj1Xk",
    },
  ];

  const publications = [
    {
      name: "Generalizing Machine Emotions",
      image: emotions,
      paper_link: 'https://ijsrset.com/IJSRSET12291144',
      description: "The goal of this research is to see if there is a way to create a universal machine that can represent emotion in any object. If effective, it might be utilized for a variety of purposes, including the development of EI software and the creation of situations involving EI robots by humans. It's not about being a soft when it comes to emotional intelligence!"
    },
    {
      name: "NFT Club - An NFT Marketplace",
      image: nft,
      paper_link: 'https://ieeexplore.ieee.org/document/10112704',
      description: 'NFT Club - An attempt to generalize a concept that is pretty known to the public but needs to be understood clearly. NFT or Non-Fungible Tokens are digital assets that are traded on platforms made on the blockchain with the help of cryptocurrency. Our effort in this project is to create an NFT trading platform that is hassle-free for the normal public to understand and operate on.',
    },
  ]

  const otherprojects = [
    {
      name: "Real Time Object Detection",
      projecttags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflowjs",
          color: "green-text-gradient",
        },
        {
          name: "cocossd",
          color: "pink-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
      ],
      source_code_link: "https://github.com/AdityaPurswani/RealTimeObjectDetection",
    },
    {
      name: "Peach Web-App (Social-Media)",
      projecttags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      source_code_link: "https://github.com/AdityaPurswani?tab=repositories",
    },
    {
      name: "Set Your Goals (Web App)",
      projecttags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "java web tokens",
          color: "green-text-gradient",
        },
      ],
      source_code_link: "https://github.com/AdityaPurswani/Set-Your-Goals-frontend",
    },
    {
      name: "Textify Text-Editor",
      projecttags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tkinter",
          color: "green-text-gradient",
        },
        {
          name: "pyttsx3",
          color: "pink-text-gradient",
        },
        {
          name: "speech recognition",
          color: "green-text-gradient",
        },
        {
          name: "destop-app",
          color: "blue-text-gradient"
        }
      ],
      source_code_link: "https://github.com/AdityaPurswani/Text-Editor-Textify",
    },
    {
      name: "Harry Potter Cloak",
      projecttags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
        {
          name: "learning and development",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/AdityaPurswani/HarryPotter_Cloak",
    },

  ]
  export { services, technologies, experiences, testimonials, projects, educations, publications, socials, otherprojects};
