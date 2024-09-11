import React from 'react';

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaFigma,
    FaWordpressSimple,
    FaAngular,
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiRedux, SiPhp } from 'react-icons/si';

const frontEndSkillsList = [
    {
        id: 1,
        icon: <FaHtml5 className="w-10 h-10 text-orange-600" />,
        title: "HTML5",
        description: "Markup language for structuring and presenting content on the web.",
        rate: "95",
    },
    {
        id: 2,
        icon: <FaCss3Alt className="w-10 h-10 text-blue-600" />,
        title: "CSS3",
        description: "Stylesheet language used for describing the presentation of a document written in HTML.",
        rate: "90",
    },
    {
        id: 3,
        icon: <SiTailwindcss className="w-10 h-10 text-teal-500" />,
        title: "Tailwind CSS",
        description: "Utility-first CSS framework for building custom designs quickly.",
        rate: "85",
    },
    {
        id: 4,
        icon: <FaJs className="w-10 h-10 text-yellow-500" />,
        title: "JavaScript",
        description: "Programming language that enables interactive web pages and dynamic content.",
        rate: "90",
    },
    {
        id: 5,
        icon: <SiTypescript className="w-10 h-10 text-blue-500" />,
        title: "TypeScript",
        description: "Typed superset of JavaScript that compiles to plain JavaScript.",
        rate: "75",
    },
    {
        id: 6,
        icon: <SiNextdotjs className="w-10 h-10 text-black" />,
        title: "Next.js",
        description: "React framework for server-side rendering and generating static websites.",
        rate: "80",
    },
    {
        id: 7,
        icon: <FaReact className="w-10 h-10 text-blue-400" />,
        title: "React.js",
        description: "JavaScript library for building user interfaces using components.",
        rate: "85",
    },
    {
        id: 8,
        icon: <FaReact className="w-10 h-10 text-purple-400" />,
        title: "React Native",
        description: "Framework for building native mobile apps using React.",
        rate: "70",
    },
    {
        id: 9,
        icon: <FaAngular className="w-10 h-10 text-red-600" />,
        title: "Angular.js",
        description: "JavaScript framework for building dynamic web applications.",
        rate: "65",
    },
    {
        id: 10,
        icon: <SiRedux className="w-10 h-10 text-purple-600" />,
        title: "Redux",
        description: "Predictable state container for JavaScript apps, commonly used with React.",
        rate: "80",
    },
    {
        id: 11,
        icon: <FaNodeJs className="w-10 h-10 text-green-600" />,
        title: "Node.js",
        description: "JavaScript runtime built on Chrome's V8 engine for building fast, scalable network applications.",
        rate: "75",
    },
    {
        id: 12,
        icon: <SiPhp className="w-10 h-10 text-indigo-700" />,
        title: "PHP",
        description: "Server-side scripting language designed for web development.",
        rate: "70",
    },
    {
        id: 13,
        icon: <FaFigma className="w-10 h-10 text-pink-500" />,
        title: "Figma",
        description: "Collaborative interface design tool used for creating UI/UX designs.",
        rate: "80",
    },
    {
        id: 14,
        icon: <FaWordpressSimple className="w-10 h-10 text-blue-700" />,
        title: "WordPress",
        description: "Content management system (CMS) for building and maintaining websites.",
        rate: "75",
    },
    {
        id: 15,
        icon: <FaGitAlt className="w-10 h-10 text-red-600" />,
        title: "Git",
        description: "Distributed version control system for tracking changes in source code.",
        rate: "85",
    },
];


export default frontEndSkillsList;