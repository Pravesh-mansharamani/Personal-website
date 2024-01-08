import {  
    github,
    linkedin,
    twitterx,
    instagram,
    mail,
    lifestyle,
    certuary,
    chess,
    flappybird,
    shoppinglist,
    smsspam,
    rivvi,
    waterlooblockchain,
    uwaterloo,
    flowiseai 
} from '../assets'

export const navLinks = [
    {href : "#about", label : "About"},
    {href : '#resume', label : "Resume"},
    {href : "#experience", label : "Experience"},
    {href : "#projects", label : "Projects"},
    {href : "#contact", label : "Contact"},
];

export const projects = [
    {src : lifestyle, alt: "lifestyle logo", href : "https://lifestyle-nutrition.vercel.app/"},
    {src : certuary, alt: "certuary logo", href : "https://devpost.com/software/certuary"},
    {src : chess, alt: "chess logo", href : "https://github.com/Pravesh-mansharamani/Chess"},
    {src : flappybird, alt: "flappybird logo", href : "https://github.com/Pravesh-mansharamani/Flappy-bird"},
    {src : shoppinglist, alt: "shoppinglist logo", href : "https://github.com/Pravesh-mansharamani/javascript-learing"},
    {src : smsspam, alt: "smsspam logo", href : "https://github.com/Pravesh-mansharamani/SMS-spam-classifier-"},
];

export const socialMedia = [
    {src : github, alt: "github logo", href : "https://github.com/Pravesh-mansharamani"},
    {src : linkedin, alt: "linkedin logo", href : "https://www.linkedin.com/in/pravesh-mansharamani/"},
    {src : mail, alt: "mail logo", href : "mailto:praveshramani295@gmail.com"},
    {src : twitterx, alt: "twitter logo", href : "https://twitter.com/pravesh295"},
    {src : instagram, alt: "instagram logo", href : "https://www.instagram.com/pravesh_29"},
];

export const workexperiece = [
    {
        title : "Software Developer Intern",
        company : "Rivvi",
        date : "May 2023 - August 2023",
        location : "Toronto, ON",
        description : [
            "Developed Gail AI using Python, RestAPI, & React.js, boosting user engagement by 40% and streamlining HR and Payroll queries by 25%.", 
            "Crafted a Next.js powered landing page for Gail AI services, driving over 1000+ sign-ups.",
            "Created a Flask HTTP server from scratch, developing exclusive endpoints for paid users to access premium API features.",
            "Developed comprehensive 4+ test automation scripts in Python achieving a test coverage of 90%, ensuring robust and reliable functionality across the platform.",
            "Authored technical documentation, reducing new developer ramp-up time by 50%.",
        ],

        src : rivvi,
        alt : "rivvi logo",
        href : "https://www.rivvi.com/"

    },
    {
        title : "Open Source Contributor",
        company : "Flowise AI",
        date : "May 2021 - June 2021",
        location : "Remote",
        description : [
            "Contributed 2 extensive features, including a Figma docs loader and Latex text splitter, to an open-source codebase with over 20,000 stars on GitHub and a user base exceeding 60,000."
        ],
        src : flowiseai,
        alt : "flowiseai logo",
        href : "https://flowiseai.com/.com"
    },
    {
        title : "Events Associate",
        company : "Waterloo Blockchain",
        date : "November 2022 - Present",
        location : "Waterloo, ON",
        description : [
            "Hosted 5+ successful events, ranging from meetups to technical workshops on Rust & Solidity.",
            "Handled logistics for OlympiHacks, drawing in a participation of 200+ hackers & 10+ sponsors.",
        ],
        src : waterlooblockchain,
        alt : "waterlooblockchain logo",
        href : "https://www.waterlooblockchain.ca/"
    },
    {
        title : "Residence Ambassador",
        company : "University of Waterloo",
        date : "September 2022 - April 2023",
        location : "Waterloo, ON",
        description : [
            "Explained the residence application process to about 1000+ students and their families in a concise and structured fashion to strengthen their understanding of how to secure residence."
        ],
        src : uwaterloo,
        alt : "uwaterloo logo",
        href : "https://uwaterloo.ca/"
    },
];