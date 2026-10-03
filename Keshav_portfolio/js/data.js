/**
 * Portfolio Data Configuration
 * Keshav Saini - Python Developer & Software Engineer
 * 
 * Synchronized with Resume Specifications:
 * - Contact: Keshavsaini1505@gmail.com | +91-8076550352 | New Delhi, India
 * - Links: linkedin.com/in/Keshavsaini | github.com/Keshavsaini10
 * - Role: Python Developer seeking an entry-level software developer role
 * - Programming Languages: C++, Python, SQL
 * - Frontend: HTML, CSS, Streamlit
 * - Tools & Technologies: Git, GitHub, VS Code
 * - Core Concepts: Data Structures & Algorithms With C++, Object Oriented Programming
 * - Experience: Data Analyst Intern at Don Bosco Institute Of Technology (June 2025)
 * - Projects: Expense Tracker (Python), Currency Converter Web Application (March 2026)
 * - Education: BCA at Guru Gobind Singh Indraprastha University, New Delhi (2024 – Expected June 2027)
 * - Certifications: Google Cloud GenAI Studio, Deloitte Data Analytics, Smart India Hackathon
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Keshav Saini",
    shortName: "Keshav",
    role: "Python Developer",
    secondaryRole: "Software Developer & Data Analyst",
    tagline: "Python Developer with hands-on experience in building web applications, implementing data structures & algorithms, and creating real-time solutions.",
    bio: "Python Developer with hands-on experience in building web applications and implementing data structures and algorithms. working with databases, and creating real-time applications using modern technologies. Strong problemsolving ability with practical project experience, seeking an entry-level software developer role.",
    email: "Keshavsaini1505@gmail.com",
    phone: "+91-8076550352",
    location: "New Delhi, India",
    status: "Seeking Entry-Level Software Developer Role",
    avatar: "assets/images/keshav-avatar.png",
    socials: {
      github: "https://github.com/Keshavsaini10",
      linkedin: "https://linkedin.com/in/Keshavsaini",
      emailMailto: "mailto:Keshavsaini1505@gmail.com",
      phoneTel: "tel:+918076550352"
    }
  },

  stats: [
    { label: "Core Languages", value: "C++, Python, SQL", icon: "code" },
    { label: "Practical Projects", value: "4+ Built", icon: "folder-code" },
    { label: "Industry Internship", value: "DBIT (June 2025)", icon: "award" },
    { label: "Degree Expected", value: "BCA 2027", icon: "calendar" }
  ],

  skills: [
    // Programming Languages
    { name: "Python", category: "languages", level: 92, icon: "python", desc: "Core Python, Web Apps, Scripting, REST APIs, Automation" },
    { name: "C++", category: "languages", level: 88, icon: "cpp", desc: "Data Structures & Algorithms, OOP, STL, High Performance" },
    { name: "SQL", category: "languages", level: 85, icon: "sql", desc: "Relational Queries, Joins, Aggregations, Filtering, Schema" },

    // Frontend & Web
    { name: "Streamlit", category: "frontend", level: 90, icon: "streamlit", desc: "Interactive Web UIs, Real-time Data Visualization, Web Apps" },
    { name: "HTML5", category: "frontend", level: 90, icon: "html5", desc: "Semantic Structure, Modern Web Accessibility, Clean Markup" },
    { name: "CSS3", category: "frontend", level: 88, icon: "css3", desc: "Responsive Design, Flexbox, Grid, Custom Animations" },
    { name: "REST APIs", category: "frontend", level: 86, icon: "api", desc: "Real-time Live Exchange Rates, JSON Parsing, HTTP Requests" },

    // Core Computer Science Concepts
    { name: "Data Structures & Algorithms With C++", category: "core", level: 88, icon: "dsa", desc: "Arrays, Linked Lists, Stacks, Queues, Trees, Searching & Sorting" },
    { name: "Object Oriented Programming (OOP)", category: "core", level: 90, icon: "oop", desc: "Encapsulation, Inheritance, Polymorphism, Abstraction, Modular Code" },
    { name: "Database Concepts (DBMS)", category: "core", level: 84, icon: "dbms", desc: "Relational Models, Constraints, Normalization, Query Optimization" },

    // Tools & Technologies
    { name: "Git", category: "tools", level: 88, icon: "git", desc: "Version Control, Branching, Commit History, Tracking" },
    { name: "GitHub", category: "tools", level: 90, icon: "github", desc: "Code Management, Open Source, Remote Repositories, Documentation" },
    { name: "VS Code", category: "tools", level: 92, icon: "vscode", desc: "Integrated Development Environment, Debugging, Extensions" },

    // Data & Analytics (From Internship & Simulation)
    { name: "Power BI", category: "analytics", level: 86, icon: "powerbi", desc: "Interactive Dashboards, KPI Reports, Visual Analytics" },
    { name: "Advanced Excel", category: "analytics", level: 92, icon: "excel", desc: "VLOOKUP, HLOOKUP, Pivot Tables, Dynamic Dashboards" }
  ],

  experience: [
    {
      role: "Data Analyst Intern",
      company: "Don Bosco Institute Of Technology",
      period: "June 2025",
      location: "New Delhi, India",
      description: "Data analytics internship focusing on business intelligence reporting, spreadsheet modeling, and structured database querying to derive actionable insights from complex datasets.",
      highlights: [
        "Learnt and Applied Advanced Excel (VLOOKUP , HLOOKUP , pivot tables , dashboards).",
        "Built interactive dashboard using power BI.",
        "Wrote basic SQL queries for data analysis ."
      ],
      skills: ["Advanced Excel", "Power BI", "SQL", "VLOOKUP / HLOOKUP", "Pivot Tables", "Dashboards"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Guru Gobind Singh Indraprastha University",
      period: "2024 – Expected June 2027",
      location: "New Delhi, India",
      grade: "Pursuing (Undergraduate)",
      description: "Comprehensive curriculum covering Programming in C++ & Python, Data Structures & Algorithms, Relational Database Management Systems (SQL), Web Development, and Object Oriented Software Engineering."
    }
  ],

  projects: [
    {
      id: "expense-tracker",
      title: "Expense Tracker",
      category: "python",
      subtitle: "Python-Based Personal Expense Management Application",
      period: "Python",
      description: "Developed a Python-based Expense Tracker application to help users record and manage their daily expenses through a simple menu-driven interface. Engineered dynamic expense entry, dynamic saving during execution, and an organized view expenses module.",
      highlights: [
        "Developed a Python-based Expense Tracker application to help users record and manage their daily expenses through a simple menu-driven interface.",
        "Created an Add Expense feature that allows users to enter and save expense details dynamically during program execution.",
        "Designed a View Expenses module to display all recorded expenses in an organized and readable format."
      ],
      tags: ["Python", "Menu-Driven Interface", "Dynamic Data Entry", "Expense Management"],
      featured: true,
      demoUrl: "https://github.com/Keshavsaini10",
      githubUrl: "https://github.com/Keshavsaini10",
      imageGrad: "linear-gradient(135deg, #10241b 0%, #163626 50%, #0a1711 100%)",
      badge: "Python",
      mockupType: "expense"
    },
    {
      id: "currency-converter",
      title: "Currency Converter Web Application",
      category: "python",
      subtitle: "Real-Time Exchange Rates & Interactive Visualization",
      period: "March 2026",
      description: "Built a Python-based web application to convert currencies using real-time exchange rates from external APIs. Developed an intuitive UI with Streamlit for real-time user interaction and data visualization, utilizing GitHub for version control, code management, and project documentation.",
      highlights: [
        "Built a Python-based web application to convert currencies using real-time exchange rates from external APIs.",
        "Developed an intuitive UI with Streamlit for real-time user interaction and data visualization.",
        "Utilized GitHub for version control, code management, and project documentation."
      ],
      tags: ["Python", "Streamlit", "REST APIs", "Git", "GitHub"],
      featured: true,
      demoUrl: "https://github.com/Keshavsaini10",
      githubUrl: "https://github.com/Keshavsaini10",
      imageGrad: "linear-gradient(135deg, #1a162b 0%, #2b1d3d 50%, #100c1c 100%)",
      badge: "Python & Streamlit",
      mockupType: "currency"
    },
    {
      id: "cpp-dsa-suite",
      title: "Data Structures & Algorithms With C++",
      category: "core",
      subtitle: "Algorithmic Problem Solving & Object Oriented Architecture",
      period: "Core CS",
      description: "Practical implementation of core data structures and algorithmic routines in C++. Covers linear and non-linear data structures, time and space complexity optimization, and Object Oriented Programming principles.",
      highlights: [
        "Implemented fundamental data structures including Arrays, Linked Lists, Stacks, Queues, and Trees.",
        "Implemented and benchmarked searching, sorting, and traversal algorithms.",
        "Applied Object Oriented Programming (OOP) principles with encapsulation, inheritance, and clean class modularity."
      ],
      tags: ["C++", "Data Structures", "Algorithms", "OOP", "VS Code"],
      featured: false,
      demoUrl: "https://github.com/Keshavsaini10",
      githubUrl: "https://github.com/Keshavsaini10",
      imageGrad: "linear-gradient(135deg, #121e33 0%, #172a4a 50%, #0a1120 100%)",
      badge: "C++ & DSA",
      mockupType: "dsa"
    },
    {
      id: "bi-sales-dashboard",
      title: "Interactive Business Analytics Dashboard",
      category: "data",
      subtitle: "Power BI, Advanced Excel & SQL Analysis",
      period: "June 2025",
      description: "Interactive analytics suite built during internship at Don Bosco Institute Of Technology. Utilized Advanced Excel (VLOOKUP, HLOOKUP, pivot tables) and Power BI dashboards along with SQL queries for structured data analysis.",
      highlights: [
        "Built interactive dashboard using Power BI for multi-metric reporting and visual trend analysis.",
        "Applied Advanced Excel: VLOOKUP, HLOOKUP, pivot tables, and executive dashboards.",
        "Wrote basic SQL queries for data analysis, filtering records, and relational extraction."
      ],
      tags: ["Power BI", "Advanced Excel", "SQL", "Data Analysis", "VLOOKUP / HLOOKUP", "Pivot Tables"],
      featured: false,
      demoUrl: "https://github.com/Keshavsaini10",
      githubUrl: "https://github.com/Keshavsaini10",
      imageGrad: "linear-gradient(135deg, #2b2010 0%, #403014 50%, #171108 100%)",
      badge: "Data Analytics",
      mockupType: "bi"
    }
  ],

  services: [
    {
      id: "python-web",
      title: "Python & Streamlit Web Applications",
      icon: "code",
      description: "Developing interactive web applications, real-time calculation tools, and responsive interfaces powered by Python, Streamlit, and modern web APIs.",
      deliverables: ["Streamlit Interactive Web Apps", "Real-Time User Interaction", "Data Visualization Displays", "GitHub Version Controlled Code"]
    },
    {
      id: "dsa-cpp",
      title: "C++ & Algorithmic Problem Solving",
      icon: "layout",
      description: "Implementing robust data structures, algorithmic solutions, and Object Oriented Programming architectures in C++ optimized for efficiency.",
      deliverables: ["Data Structures Implementation", "Object Oriented Code Architecture", "Algorithmic Complexity Optimization", "Modular & Maintainable Code"]
    },
    {
      id: "data-analytics",
      title: "Data Analytics & Power BI Dashboards",
      icon: "zap",
      description: "Transforming datasets into actionable insights using interactive Power BI dashboards and Advanced Excel modeling with pivot tables and lookups.",
      deliverables: ["Interactive Power BI Dashboards", "Advanced Excel (VLOOKUP, HLOOKUP)", "Pivot Tables & Summary Reports", "Key Performance Metric Tracking"]
    },
    {
      id: "sql-database",
      title: "SQL & Relational Database Querying",
      icon: "server",
      description: "Writing structured SQL queries to filter, aggregate, join, and analyze relational data for reporting and application integration.",
      deliverables: ["Basic & Advanced SQL Queries", "Relational Data Filtering & Joins", "Aggregation & Summary Tables", "Database Schema Structuring"]
    },
    {
      id: "api-integration",
      title: "REST API Integration & Live Data",
      icon: "shopping-bag",
      description: "Connecting external REST APIs to fetch and parse live data feeds (such as real-time exchange rates) seamlessly into Python applications.",
      deliverables: ["Live REST API Endpoints Fetching", "JSON Parsing & Data Handling", "Error Handling & Fallbacks", "Dynamic UI Synchronization"]
    },
    {
      id: "git-version-control",
      title: "Git, GitHub & Project Structuring",
      icon: "palette",
      description: "Maintaining organized codebases with Git version control, clear repository structures, meaningful commits, and complete documentation on GitHub.",
      deliverables: ["GitHub Repository Setup", "Version Control Workflow", "Clean Code Organization", "Comprehensive Project Documentation"]
    }
  ],

  certifications: [
    {
      title: "Google Cloud – Introduction to Generative AI Studio",
      issuer: "Google Cloud",
      date: "Google Cloud",
      credentialId: "GOOGLE-CLOUD-GENAI",
      verifyUrl: "https://linkedin.com/in/Keshavsaini",
      skills: ["Google Cloud", "Generative AI Studio", "Cloud Technologies", "Prompt Engineering"]
    },
    {
      title: "Deloitte – Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Deloitte",
      credentialId: "DELOITTE-DA-SIM",
      verifyUrl: "https://linkedin.com/in/Keshavsaini",
      skills: ["Data Analytics", "Excel Analysis", "Business Intelligence", "Problem Solving"]
    },
    {
      title: "Smart India hackathon – Team Project",
      issuer: "Smart India Hackathon",
      date: "SIH Team Project",
      credentialId: "SIH-TEAM-PROJECT",
      verifyUrl: "https://github.com/Keshavsaini10",
      skills: ["Team Collaboration", "Problem Solving", "Rapid Prototyping", "Software Development"]
    }
  ]
};

// Export for module use or window attachment
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
} else {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
