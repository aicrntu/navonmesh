import React from 'react';
import CompetitionTemplate from '../CompetitionTemplate';

const Admad = () => {
    const admadData = {
        name: "Ad Mad Show",
        logo: "/compitition/admad/admad_show_logo.png",
        heroImage: "/compitition/admad/admad_show_background.jpg",
        heroTitlePart1: "The Art of",
        heroTitlePart2: "Persuasion & Pitch",
        registrationLink: "/admad-form",
        aboutImage: "/compitition/admad/AD%20MAD%20SHOW%205.JPG",
        aboutTitle: "Marketing Excellence",
        aboutText: [
            "Ad Mad Show is the ultimate arena for creative thinkers and marketing enthusiasts. It's where branding meets humor, and strategy meets storytelling to create the most impactful advertising campaigns.",
            "Showcase your ability to captivate an audience, receive feedback from top creative directors, and compete for the title of the ultimate 'Ad Mad' champion."
        ],
        glimpses: [
            "/compitition/admad/AD%20MAD%20SHOW%201.JPG",
            "/compitition/admad/AD%20MAD%20SHOW%202.JPG",
            "/compitition/admad/AD%20MAD%20SHOW%204.JPG",
            "/compitition/admad/AD%20MAD%20SHOW%205.JPG",

        ],
        benefits: [
            "Cash Prizes for Top Teams",
            "Marketing Mentorship",
            "Portfolio Building",
            "Media & Branding Credits",
            "AIC-RNTU Incubation",
            "Creative Workshops",
            "Industry Recognition"
        ],
        screeningSteps: [
            "Online Registration",
            "Storyboard Submission",
            "Preliminary Round",
            "Final Mad Pitch"
        ],
        roadmap: [
            { title: "Registration Open", date: "Form your creative team" },
            { title: "Brand Brief Release", date: "Get your product" },
            { title: "Storyboard Submission", date: "Show your concept" },
            { title: "Shortlisting", date: "Final contenders announced" },
            { title: "Final Rehearsals", date: "Polishing the pitch" },
            { title: "Grand Finale", date: "Pitch to the experts" }
        ]
    };

    return <CompetitionTemplate data={admadData} />;
};

export default Admad;
