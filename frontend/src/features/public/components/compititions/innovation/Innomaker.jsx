import React from 'react';
import CompetitionTemplate from '../CompetitionTemplate';

const Innomaker = () => {
    const innoData = {
        name: "InnoMaker",
        logo: "/compitition/innomaker/inno_maker_white_logo.png",
        heroImage: "/compitition/innomaker/innomaker_background.jpg",
        heroTitlePart1: "Prototyping the",
        heroTitlePart2: "Future Leaders",
        registrationLink: "/innomaker-form",
        aboutImage: "/compitition/innomaker/innomaker_background.jpg",
        aboutTitle: "Creative Innovation",
        aboutText: [
            "InnoMaker is a premium product hackathon designed for makers, engineers, and designers. It's an arena where raw ideas are transformed into physical or digital prototypes through rapid innovation and collaboration.",
            "Gain access to world-class labs, receive mentorship from veteran product designers, and pitch your prototypes to industry stakeholders."
        ],
        glimpses: [
            "/compitition/innomaker/innomaker_background.jpg",
            "/compitition/innomaker/inno_maker_white_logo.png"
        ],
        benefits: [
            "Prototype Development Funding",
            "Hardware Lab Access",
            "Expert Product Mentorship",
            "IP & Patent Support",
            "AIC-RNTU Incubation",
            "Design Thinking Workshops",
            "Maker Credits & Subsidies"
        ],
        screeningSteps: [
            "Online Application",
            "Technical Evaluation",
            "Prototype Pitching",
            "Final Jury Presentation"
        ],
        roadmap: [
            { title: "Application Kickoff", date: "Submit your idea" },
            { title: "Technical Screening", date: "Feasibility check" },
            { title: "Design Sprint", date: "Refining the concept" },
            { title: "Prototyping Phase", date: "Building the product" },
            { title: "Testing & Validation", date: "User feedback" },
            { title: "Final Demo Day", date: "Showcase to stakeholders" }
        ]
    };

    return <CompetitionTemplate data={innoData} />;
};

export default Innomaker;
