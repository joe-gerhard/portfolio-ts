import joesbook from "../images/Joesbook.png";
import tetris from "../images/tetris.png";

export interface project {
    readonly name: string;
    readonly github: string;
    readonly link: string;
    readonly image: string;
    readonly technologies: string[];
    readonly description: string;
}

export const PROJECTS: project[] = [
    {
        name: "Tetris",
        github: "https://github.com/joe-gerhard/tetris",
        link: "https://master--comforting-torte-bb7a76.netlify.app/",
        image: tetris,
        technologies: ["HTML", "CSS", "TypeScript", "Vite"],
        description: `A fun little NES Tetris clone whipped up in a couple days with mostly vanilla web technoligies, Vite, and Typescript. I mostly just wanted to get more familiar with the Canvas element. Just try it for a little bit... it's totally not addicting`,
    },
    {
        name: "Minesweeper",
        github: "https://github.com/joe-gerhard/minesweeper",
        link: "https://joesweeper.netlify.com",
        image: "/minesweeper.png",
        technologies: ["React", "Redux", "TypeScript", "styled-components"],
        description: `A React web app reproduction of the classic windows game, Minesweeper.`,
    },
    {
        name: "Solitaire",
        github: "https://github.com/joe-gerhard/Solitaire",
        link: "https://joe-gerhard.github.io/Solitaire/",
        image: "/solitaire.png",
        technologies: ["JavaScript", "CSS", "HTML"],
        description: `Web application of the popular card game, Solitaire, made completely 
    with vanilla JavaScript.`,
    },
    {
        name: "Pixel Art",
        github: "https://github.com/joe-gerhard/pixel-art-app",
        link: "https://joxel-art.netlify.com/",
        image: "/pixel-art.png",
        technologies: ["React", "Redux", "TypeScript", "styled-components"],
        description: `A web application for creating pixel art made with React and TypeScript`,
    },
    {
        name: "Joesbook",
        github: "https://github.com/joe-gerhard/joesbook",
        link: "https://joesbook.herokuapp.com/",
        image: joesbook,
        technologies: [
            "MongoDB",
            "Express",
            "React",
            "NodeJs",
            "Redux",
            "TypeScript",
            "OAuth2",
        ],
        description: `A MERN stack social media application demonstrating proficiency with OAuth2 via Passport as well as managing user generated data in a MongoDB NoSQL database using Mongoose ORM.`,
    },
    {
        name: "Magic: The Gathering - Pick Order Filter",
        github: "https://github.com/joe-gerhard/mtg-filter-mern",
        link: "https://mtg-pick-order.herokuapp.com/",
        image: "/mtg-pick-order.png",
        technologies: ["React", "Redux", "Express", "Node", "MongoDB"],
        description: `An application for editing and filtering cards based on user 
    created pick-orders. For use in the Limited Booster draft format.`,
    },
    {
        name: "Django Unlibbed",
        github: "https://github.com/joe-gerhard/django-unlibbed",
        link: "https://djangounlibbed.herokuapp.com/",
        image: "/django.png",
        technologies: ["Python", "Django"],
        description: `Full stack web application for creating madlibs based on the movie 
    script for the film Django Unchained`,
    },
];
