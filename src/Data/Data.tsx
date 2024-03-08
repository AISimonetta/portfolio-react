import ticketTrackerImage from "../Assets/images/ticket-tracker.png";
import memoryGameImage from "../Assets/images/memory-game.png";
import calculatorImage from "../Assets/images/calculator.png";
import punkApiImage from "../Assets/images/punk-api.png";
import fullStackImage from "../Assets/images/full-stack.png";
import hangmanImage from "../Assets/images/hangman.jpg";
import apeiraDermaImage from "../Assets/images/client-project.png";
import geolocationImage from "../Assets/images/geolocation.png";

export interface ProjectData {
    id: number;
    title: string;
    image: string;
    techUsed: string[];
    githubPages: string;
    githubRepository: string;
}

export const projectsData: ProjectData[] = [
    {
        id: 8,
        title: "GEOLOCATION",
        image: geolocationImage,
        techUsed: ["SCSS", "TypesScript", "React", "JavaScript"],
        githubPages: "https://aisimonetta.github.io/geolocation/",
        githubRepository: "https://github.com/AISimonetta/geolocation",
    },
    {
        id: 7,
        title: "APEIRO DERMA",
        image: apeiraDermaImage,
        techUsed: ["SCSS", "TypesScript", "React", "JavaScript"],
        githubPages: "https://verde-client-project.web.app/",
        githubRepository: "https://github.com/nology-tech/verde-client-project",
    },
    {
        id: 6,
        title: "HANGMAN GAME",
        image: hangmanImage,
        techUsed: ["JAVA"],
        githubPages: "https://github.com/AISimonetta/hangman-project",
        githubRepository: "https://github.com/AISimonetta/hangman-project",
    },
    {
        id: 5,
        title: "FULL STACK",
        image: fullStackImage,
        techUsed: ["Spring Boot", "JAVA", "MySQL", "SCSS", "JS", "TS", "React"],
        githubPages: "https://github.com/AISimonetta/full-stack",
        githubRepository: "https://github.com/AISimonetta/full-stack",
    },
    {
        id: 4,
        title: "PUNK API",
        image: punkApiImage,
        techUsed: ["SCSS", "JavaScript", "BEM", "TypesScript", "React"],
        githubPages: "https://aisimonetta.github.io/calculator/",
        githubRepository: "https://github.com/AISimonetta/calculator",
    },
    {
        id: 3,
        title: "CALCULATOR",
        image: calculatorImage,
        techUsed: ["HTML", "SCSS", "JavaScript", "BEM"],
        githubPages: "https://aisimonetta.github.io/calculator/",
        githubRepository: "https://github.com/AISimonetta/calculator",
    },
    {
        id: 2,
        title: "MEMORY GAME",
        image: memoryGameImage,
        techUsed: ["HTML", "SCSS", "TypeScript", "BEM"],
        githubPages: "https://aisimonetta.github.io/memory-game/",
        githubRepository: "https://github.com/AISimonetta/memory-game",
    },
    {
        id: 1,
        title: "TICKET TRACKER",
        image: ticketTrackerImage,
        techUsed: ["SCSS", "TypeScript", "React"],
        githubPages: "https://aisimonetta.github.io/ticket-tracker/",
        githubRepository: "https://github.com/AISimonetta/ticket-tracker",
    },
];
