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
    reactnative,
    expressjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    nextjs,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
        title: "MERN Stack Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: creator,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Next Js Developer",
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express JS",
        icon: expressjs,
    },
    {
        name: "React Native",
        icon: reactnative,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Representative Operations",
        company_name: "Concentric India Pvt. Ltd.",
        icon: "https://www.concentrix.com/wp-content/uploads/2022/12/logo-cnxc.svg",
        iconBg: "#fff",
        date: "15 Feb 2021 - 16 Feb 2022",
        points: [
            "Strong problem-solving: Diagnosed issues, critical for debugging complex issues.",
            "Customer-centric: Effective communication, understanding client needs, enhancing user-focused development.",
            "Time management: Efficiently handle tasks, meet project deadlines, prioritize effectively.",
            "Tech adaptability: Staying current with software trends, quick adoption of new technologies.",
        ],
    },
    {
        title: "Trainee Web Developer",
        company_name: "Superior Codelabs",
        icon: "https://superiorcodelabs.com/wp-content/uploads/2022/11/Superior-Codelabs-Linkedin-Profile-Picture-1-e1668081283415.png",
        iconBg: "#fff",
        date: "07 Sept 2022 - 28 Feb 2023",
        points: [
            "Implement responsive design principles to ensure optimal user experiences across various devices and screen sizes.",
            "Seek mentorship and guidance from senior developers and team leads to accelerate skill development and career growth in web development.",
            "Take ownership of assigned tasks and deliver them within defined timelines, demonstrating a commitment to project success.",
            "Strive for excellence in delivering well-structured, efficient and maintainable code.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Superior Codelabs",
        icon: "https://superiorcodelabs.com/wp-content/uploads/2022/11/Superior-Codelabs-Linkedin-Profile-Picture-1-e1668081283415.png",
        iconBg: "#fff",
        date: "01 Mar 2023 -  Current",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Leveraged Next.js for SSR, SSG and SEO optimization, ensuring fast load times, enhanced user experience and improved search rankings.",
            "Built server-side applications using Node.js and Express.js for efficient and scalable backend services.",
            "Wrote complex SQL queries to extract and manipulate data as per application requirements.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Vanshul is my colleague, Who is a Full Stack Web Developer and he has managed to develop CRM application in node and react js all by himself.",
        name: "Punith K C",
        designation: "Software Engineer",
        company: "VMC Technologies Pvt. Ltd.",
        image: "https://media.licdn.com/dms/image/D5603AQHE79fZB1p4NQ/profile-displayphoto-shrink_800_800/0/1669377576309?e=1700092800&v=beta&t=WY10PZfVczzvut6ynzeKaPxHGrSHf0nmWWlmOFdcPu0",
    },
    {
        testimonial:
            " Very talented and hard working. I've never met a web developer who truly cares about their clients success like Vanshul does.",
        name: "Akash Kundapur",
        designation: "Senior Technical Support Representative",
        company: "Concentrix India Pvt. Ltd.",
        image: "https://media.licdn.com/dms/image/C5603AQF-CTJRgMoB3Q/profile-displayphoto-shrink_400_400/0/1651197553244?e=1700092800&v=beta&t=Jjhc6F_l4O9t-rJJNLYkZ4L0ev6tr4PF-31TmkinFPM",
    },
    {
        testimonial:
            " Vanshul's strong communication skills and positive attitude make him a pleasure to work with. I highly recommend Vanshul for any future opportunities and I am confident that he will be a valuable asset to any team.",
        name: "Amir Ali Shaik",
        designation: "Senior Product Operations",
        company: "Superior Codelabs",
        image: "https://media.licdn.com/dms/image/D5603AQHWgILJrfaIUw/profile-displayphoto-shrink_400_400/0/1687241977616?e=1700092800&v=beta&t=gLezFYQEgLIqvE6PmvM5q5xz3tKuO2EGscmkmqmj_6w",
    },
];


const projects = [
    {
        name: "CRM Web App",
        description:
            "I developed a web app for lead management using React, Node.js, Express, and MySQL. It supports dynamic lead tracking, user management, holiday planning, department structure, and reporting. Features include lead assignment, approval workflows, and robust reporting.",
        tags: [
            {
                name: "react",
                color: "pink-text-gradient",
            },
            {
                name: "node/express",
                color: "green-text-gradient",
            },
            {
                name: "microservices",
                color: "blue-text-gradient",
            },
        ],
        image: "https://picsum.photos/300/280",
        source_code_link: "https://github.com/vanshul22",
    },
    {
        name: "NextJs/React-Native App",
        description:
            "I developed a mobile website using Next.js and Firebase, later converting it into a React Native mobile app for improved user experience and accessibility. As the sole front-end developer, I created the project from scratch and delivered it in just two weeks.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "react-native",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        // image: "https://dummyimage.com/200x300&text=NextJs/React-Native+App",
        image: "https://picsum.photos/300/290",
        source_code_link: "https://github.com/vanshul22",
    },
    {
        name: "Product Web App",
        description:
            "I developed a dynamic website as a full-stack developer, utilizing React for the frontend and Node.js/Express.js for the backend. Responsibilities included UI design, API integration and data management. Key technologies employed: React, Node.js, Express.js and MySQL.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: "https://picsum.photos/300/300",
        source_code_link: "https://github.com/vanshul22",
    },
];

export { services, technologies, experiences, testimonials, projects };