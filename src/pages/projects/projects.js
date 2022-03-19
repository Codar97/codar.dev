import React from 'react';
import ProjectCard from "./project-card";
import Invaders from "./assets/invaders.png";
import TJJF from "./assets/tjjf.png";
import Research from "./assets/research.png";
import Webpage from "./assets/webpage.png";
import Freddo from "./assets/freddo.png";

const projectsList = [
    {
        title: 'Vulnerabilities in Messaging Apps to Quantum Attacks',
        url: "/main.pdf",
        image: Research,
        languages: ['TeX'],
        description: 'As a part of my University course I took on a research project titled "Vulnerabilities in Messaging Apps to Quantum Attacks". In this I looked into various popular messaging apps and determined what types of quantum attacks they are be susceptible to. The research brought up some interesting vulnerabilities in the messaging apps even without the use of quantum attacks due to poor security. I plan on doing some further research and improvements on this.'
    },
    {
        title: 'The JiuJitsu Foundation Syllabus',
        url: 'https://www.codar.dev/tjjf-syllabus',
        image: TJJF,
        languages: ['JavaScript', 'SCSS', 'HTML', 'Markdown'],
        description: 'This project is a small website intended to help with learning the JiuJitsu syllabus. It uses a React Storybook instance to cleanly display the syllabus.'
    },
    {
        title: 'Freddo bar price tracker',
        url: '#',
        image: Freddo,
        languages: ['Python', 'JavaScript', 'SCSS', 'HTML'],
        description: 'If you need to know where the cheapest place to get a Freddo bar is, this is the website for you. Using selenium, it scrapes the webpages of popular supermarkets to gather the prices of Freddo bars. It uses a React frontend to cleanly display the information. Some future plans are to integrate price history and the ability to compare the price of Freddo bars against different currencies and the housing market.'
    },
    {
        title: '404 Invaders',
        url: '/forohforpage',
        image: Invaders,
        languages: ['JavaScript'],
        description: 'A more fun and interactive way to get lost on a webpage. Witten using OOP and and a JavaScript libray called P5.js.'
    },
    {
        title: 'React Table',
        url: 'https://github.com/TanStack/react-table',
        image: 'https://github.com/tanstack/react-table/raw/alpha/media/repo-dark.png',
        languages: ['TypeScript', 'JavaScript'],
        description: 'I have made contributions towards this open source Github project called React Table. It utilises React Hooks to allow for the creation of versatile tables.'
    },
    {
        title: 'My Website',
        url: '/',
        image: Webpage,
        languages: ['JavaScript', 'SCSS', 'HTML'],
        description: "This is my website portfolio to show some of the projects I have worked on. Developed using React. Follows Google's Material Design guidelines for UX/UI"
    },
];

function Projects({responsive}) {
    return (<div className="projects">
        <p>
            Here are some of my projects I have worked on:
        </p>
        <div className="projects__list">
            {projectsList.map(project => {
                return <ProjectCard responsive={responsive} {...project}/>
            })}
        </div>
    </div>);
}

export default Projects;
