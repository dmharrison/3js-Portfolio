import { meta, shopify, starbucks, tesla, fitmon } from "../assets/images";
import {
    HCFRlogo,
    car,
    contact,
    css,
    estate,
    express,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
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
        image: fitmon,
        name: 'Fitmon',
        description: 'A fun way for users that want to get into working out and collect pokemom all together.',
        live: 'https://github.com/Alexer333/BeatBody-Team-Project',
        githublink: 'https://alexer333.github.io/BeatBody-Team-Project'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];