import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    gesture,
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
    nhce,
    uon,
    nft,
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
        "Modules - Machine Learning, Handling Uncertainties using Fuzzy sets and systems, Advanced Computer Networks, Big Data, Mixed Reality, Research Methods"
      ],
    },
    {
      title: "BE Information Science",
      company_name: "University of Nottingham",
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
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "css",
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
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, educations};