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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
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

export { services, technologies, experiences, testimonials, projects };