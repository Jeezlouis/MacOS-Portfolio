const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "project",
    },
    {
        id: 2,
        name: "Works",
        type: "work",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: true,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Mar 11, 2026",
        title:
            "What It Takes To Build And Deploy A Real AI Product For A Client",
        image: "/images/blog1.png",
        link: "https://medium.com/@bobzy005/what-it-takes-to-build-and-deploy-a-real-ai-product-for-a-client-cef3ca754bb8",
    },
    // {
    //     id: 2,
    //     date: "Aug 28, 2025",
    //     title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    //     image: "/images/blog2.png",
    //     link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    // },
    // {
    //     id: 3,
    //     date: "Aug 15, 2025",
    //     title: "The Ultimate Guide to Mastering GSAP Animations",
    //     image: "/images/blog3.png",
    //     link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    // },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Python", "FastAPI", "Django"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
        category: "AI Agents",
        items: ["Python", "Langchain", "Langgraph", "DeepAgents"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        darkBg: "#b33f44",
        link: "https://github.com/Jeezlouis",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        darkBg: "#2f9c44",
        link: "https://mac-os-portfolio-jade.vercel.app/",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        darkBg: "#cc523a",
        link: "https://x.com/_isreallawal",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        darkBg: "#037ea8",
        link: "https://www.linkedin.com/in/isreal-lawal-628924279/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Work 1
        {
            id: 6,
            name: "AskLumen AI Platform",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-100 left-70",
            windowPosition: "top-[15vh] right-[50px]",
            children: [
                {
                    id: 1,
                    name: "AskLumen Experience.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "AskLumen AI is an AI-powered learning platform designed to help students study smarter with conversational AI tools.",
                        "I worked on building the frontend experience using React, Vite, and Tailwind CSS, focusing on fast performance and responsive design.",
                        "The platform includes AI chat, voice interactions, and interactive learning tools that make studying more engaging.",
                        "I also integrated tools like Cloudinary for media management and Sentry for monitoring frontend errors and improving reliability.",
                    ],
                },
                {
                    id: 2,
                    name: "asklumenai.com",
                    icon: "/images/lumenlogo.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://asklumenai.com",
                    position: "top-10 right-20",
                },
                {
                    id: 3,
                    name: "asklumen.png",
                    icon: "/images/asklumen.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/asklumen.png",
                },
                {
                    id: 4,
                    name: "Architectural Diagram",
                    icon: "/images/archi-asklumen.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-60 right-20",
                    imageUrl: "/images/archi-asklumen.png",
                },
            ],
        },

        // ▶ Work 2
        {
            id: 7,
            name: "MyEasyLearn AI Platform",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-62 right-80",
            windowPosition: "top-[50vh] left-[17px]",
            children: [
                {
                    id: 1,
                    name: "MyEasyLearn Experience.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "MyEasyLearn is an AI-driven learning platform built to help users interact with educational content through conversational AI.",
                        "I worked on developing responsive frontend components using React, focusing on creating smooth AI chat interactions.",
                        "The project involved integrating backend APIs for real-time responses and handling media uploads using Cloudinary.",
                        "I also worked on improving UI performance and making sure the platform worked smoothly across different screen sizes.",
                    ],
                },
                {
                    id: 2,
                    name: "myeasylearn.com",
                    icon: "/images/myeasylearn.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://myeasylearn.com",
                    position: "top-20 left-20",
                },
                {
                    id: 3,
                    name: "myeasylearn.png",
                    icon: "/images/easylearn.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/easylearn.png",
                },
                {
                    id: 4,
                    name: "Architectural Diagram",
                    icon: "/images/archi-easy.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-60 left-5",
                    imageUrl: "/images/archi-easy.png",
                },
            ],
        },
    ],
};

const PROJECT_LOCATION = {
    id: 2,
    type: "project",
    name: "Projects",
    icon: "/icons/project.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 8,
            name: "AI Resume Analyzer",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-30 left-90",
            windowPosition: "top-[30vh] right-[30vw]",
            children: [
                {
                    id: 1,
                    name: "AI Resume Analyzer Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Built an AI-powered web application that analyzes resumes and suggests improvements.",
                        "Integrated LLM-based feedback generation to provide tailored career recommendations.",
                        "Implemented React Router v7 for smooth navigation and application state management.",
                        "Designed the interface to deliver actionable feedback to improve job match success.",
                    ],
                },
                {
                    id: 2,
                    name: "ai-resume-analyzer-nu-coral.vercel.app",
                    icon: "/images/ResumeAnalyzer.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://ai-resume-analyzer-nu-coral.vercel.app/",
                    position: "top-10 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 9,
            name: "AI Learning Assistant",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-30",
            windowPosition: "top-[70vh] left-[10vw]",
            children: [
                {
                    id: 1,
                    name: "AI Learning Assistant Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Developed an AI-powered learning interface designed to assist students with questions and explanations.",
                        "Built conversational UI components to simulate real-time interaction with AI tutors.",
                        "Focused on clean UI design and responsive layouts using React and Tailwind CSS.",
                    ],
                },
                {
                    id: 2,
                    name: "Learning Assistant",
                    icon: "/images/converso.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://sass-app-alpha.vercel.app/",
                    position: "top-10 left-20",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 10,
            name: "Zentry Website Redesign",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-130 left-20",
            windowPosition: "top-10 left-10",
            children: [
                {
                    id: 1,
                    name: "Zentry Website Redesign Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-5",
                    description: [
                        "Recreated and redesigned the award-winning Zentry website with modern UI and animation techniques.",
                        "Implemented interactive animations using GSAP, Tailwind v4, and Aceternity UI.",
                        "Focused on smooth transitions, scroll-based animations, and immersive user experience.",
                    ],
                },
                {
                    id: 2,
                    name: "Zentry",
                    icon: "/images/zentry.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://mini-zentry-design.vercel.app",
                    position: "top-10 right-20",
                },
            ],
        },

        // ▶ Project 4
        {
            id: 11,
            name: "Dev Events Platform",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-100 right-50",
            windowPosition: "top-[20vh] left-90",
            children: [
                {
                    id: 1,
                    name: "Dev Events Platform Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-20 right-10",
                    description: [
                        "Built a web platform for discovering and sharing developer events.",
                        "Designed event listings, filtering, and UI components to improve discoverability of tech events.",
                        "Focused on responsive UI and clean user flows for event browsing.",
                    ],
                },
                {
                    id: 2,
                    name: "Dev Events",
                    icon: "/images/dev-event.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://dev-events-kappa.vercel.app/",
                    position: "top-10 left-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 3,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/isreal.jpg",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/isreal.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/isreal-2.jpg",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/isreal-2.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/isreal-3.jpg",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/isreal-3.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/isreal.jpg",
            description: [
                "Hey! I’m Isreal 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
                "I specialize in Python, JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
                "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
                "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 4,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "backend.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            position: "top-10 left-5",

            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
        {
            id: 2,
            name: "frontend.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            position: "top-34 right-62",
        },
        {
            id: 3,
            name: "fullstack.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            position: "top-62 right-20",
        },
        {
            id: 4,
            name: "software_engineer.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            position: "top-82 right-90",
        },
    ],
};

const TRASH_LOCATION = {
    id: 5,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    project: PROJECT_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };