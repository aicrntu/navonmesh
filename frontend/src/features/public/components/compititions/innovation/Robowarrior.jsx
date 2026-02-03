import React from 'react';
import CompetitionTemplate from '../CompetitionTemplate';

const Robowarrior = () => {
    const roboData = {
        name: "Robo Warrior",
        logo: "/compitition/robo-war/robo_warriors_logo.png",
        heroImage: "/compitition/robo-war/robo_warriors_background.jpg",
        heroTitlePart1: "Engineer the",
        heroTitlePart2: "Warrior in You",
        registrationLink: "/robowarrior-form",
        aboutImage: "/compitition/robo-war/DSC_5064.JPG",
        aboutTitle: "Metal & Might",
        aboutText: [
            "Robo Warrior is the ultimate test of engineering and strategy. It's a high-octane robot combat competition where teams design and build machines to dominate the arena.",
            "Test your engineering limits, learn from robotics experts, and experience the thrill of victory in the Navonmesh 2026 battleground."
        ],
        glimpses: [
            "/compitition/robo-war/DSC_4981.JPG",
            "/compitition/robo-war/DSC_4990.JPG",
            "/compitition/robo-war/DSC_5013.JPG",
            "/compitition/robo-war/DSC_5019.JPG",
            "/compitition/robo-war/robo_warriors_background.jpg"
        ],
        benefits: [
            "Heavyweight Cash Prizes",
            "Technical Mentorship",
            "Advanced Robotics Access",
            "Hardware Sponsor Credits",
            "AIC-RNTU Incubation",
            "Exclusive Workshops",
            "National Recognition"
        ],
        screeningSteps: [
            "Team Registration",
            "Bot Design Verification",
            "Technical Inspection",
            "Main Arena Battle"
        ],
        roadmap: [
            { title: "Team Registration", date: "Form your squad" },
            { title: "Design Submission", date: "Blueprints & Specs" },
            { title: "Bot Scrutiny", date: "Safety & Compliance check" },
            { title: "Arena Briefing", date: "Rules of engagement" },
            { title: "Qualifying Rounds", date: "Survival of the fittest" },
            { title: "Final Combat", date: "The Ultimate Showdown" }
        ]
    };

    return <CompetitionTemplate data={roboData} />;
};

export default Robowarrior;
