import { bootStrap,firstPort, employeeTracker, fitmon, pantry, weatherDashboard, techBlog, postgreSQL, } from "../assets/images";
import {
    HCFRlogo,    
    contact,
    css,    
    express,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,    
    react,    
    tailwindcss,
    Cintas,
    aws,
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: postgreSQL,
        name: "PostgreSQL",
        type: "Database",
    },
       {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootStrap,
        name: "Bootstrap",
        type: "Frontend",
    },
   
];

export const experiences = [
    {
        title: "Firefighter/AEMT",
        company_name: "Henry County Fire Rescue",
        icon: HCFRlogo,
        iconBg: "#accbe1",
        date: "July 2018 - Feb 2024",
        points: [
            "Delivered exceptional customer service to patients and community members, ensuring their utmost satisfaction",
            "Demonstrated exceptional composure and executed effective responses during high-pressure situations",
            "Applied critical thinking skills to proficiently resolve complex problems, particularly in unfamiliar scenarios",
            "Cultivated a tone of positivity and excellence for day-to-day operations",
            "Maintained current state certification through ongoing continuing education."
        ],
    },
    {
        title: "Service and Sales Representative",
        company_name: "Cintas",
        icon: Cintas,
        iconBg: "#ffffff",
        date: "Octover 2016 - Jan 2018",
        points: [
            "Demonstrated exceptional customer service skills, fostering trust and driving sales growth",
            "Achieved a consistent 7-10% increase in route growth by actively promoting and selling new products, while upholding high standards of customer service",
            "Recognized for outstanding performance, earning promotion from Route Skipper to Service and Sales Representative",
            "Consistently secured first place in multiple monthly contests for exceptional sales results and generating profitable cross-sell opportunities",,
        ],
    },
    {
        title: "Education & Certs",
        company_name: "Valdosta State University, Amazon Cloud Practioner",
        icon: aws,
        iconBg: "#FFDBBB",
        date: "Graduated in 2014 - Cert Obtained 2024",
        points: [
            "Graduated with a BA in Communications.",
            "Cum Laude",
            "Passed AWS Cloud Practioner Exam",
            
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/dmharrison',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/daniel-harrison-604b4393/',
    }
];

export const projects = [
    {
        image: pantry,       
        name: 'Pantry.JS',
        description: 'An app built on React and Material UI, with a back end that utilizes GraphQL/Apollo and MongoDB.',
        live: 'https://pantry-js.onrender.com/',
        githublink: 'https://github.com/LemonTag/Pantry.js',
    },
    {
        image: fitmon,
        name: 'Fitmon',
        description: 'A fun way for users that want to get into working out and collect pokemom all together.',
        live: 'https://alexer333.github.io/BeatBody-Team-Project',
        githublink: 'https://github.com/Alexer333/BeatBody-Team-Project'
    },
    {
        image: weatherDashboard,        
        name: 'Weather Dashboard',
        description: 'Used third party APIs to access data to make requests with specific parameter. This one uses Openweather so users can plan for their trips ',
        live: ' https://dmharrison.github.io/weather_dashboard/',
        githublink: 'https://github.com/dmharrison/weather_dashboard'
    },
    {
        image: employeeTracker,        
        name: 'Employee Payroll Tracker',
        description: 'Tasked with modifying starter code to create an application that enables a payroll manager to view and manage employee payroll data',
        live: 'https://dmharrison.github.io/employee_payroll_tracker/',
        githublink: 'https://github.com/dmharrison/Employee_Tracker'
    },
    {
        image: techBlog,        
        name: 'Tech Blog',
        description: 'A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
        live: 'https://tech-blog-yihd.onrender.com/',
        githublink: 'https://github.com/dmharrison/tech_blog'
    },
    {
        image: firstPort,        
        name: 'My first portfolio',
        description: 'A portfolio made in week 2 just wanted to place this here to show how far I have been able to come in such a short amount of time',
        live: 'https://dmharrison.github.io/dmh_professional_portfolio/',
        githublink: 'https://github.com/dmharrison/dmh_professional_portfolio'
    }
];