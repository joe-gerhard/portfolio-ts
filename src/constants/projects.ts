import joesbook from "../images/Joesbook.png";

export const PROJECTS = [
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
        name: "Minesweeper",
        github: "https://github.com/joe-gerhard/minesweeper",
        link: "https://joesweeper.netlify.com",
        image: "/minesweeper.png",
        technologies: ["React", "Redux", "TypeScript", "styled-components"],
        description: `A React web app reproduction of the classic windows game, Minesweeper.`,
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
        name: "Magic: The Gathering - Pick Order Filter",
        github: "https://github.com/joe-gerhard/mtg-filter-mern",
        link: "https://mtg-pick-order.herokuapp.com/",
        image: "/mtg-pick-order.png",
        technologies: ["React", "Redux", "Express", "Node", "MongoDB"],
        description: `An application for editing and filtering cards based on user 
    created pick-orders. For use in the Limited Booster draft format.`,
    },
    // {
    //   name: 'G2G (Got to Go)',
    //   github: 'https://github.com/baeddavid/G2G',
    //   link: 'https://g2g-gottago.herokuapp.com/welcome',
    //   image: '/G2G.png',
    //   technologies: ['React', 'GraphQL', 'MongoDB', 'Apollo'],
    //   description: `A progressive JAM stack web application for finding and filtering
    //   nearby bathrooms with accessibility concerns in mind.`
    // },
    {
        name: "Django Unlibbed",
        github: "https://github.com/joe-gerhard/django-unlibbed",
        link: "https://djangounlibbed.herokuapp.com/",
        image: "/django.png",
        technologies: ["Python", "Django"],
        description: `Full stack web application for creating madlibs based on the movie 
    script for the film Django Unchained`,
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
];
