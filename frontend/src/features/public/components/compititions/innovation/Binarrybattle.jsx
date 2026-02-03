import CompetitionTemplate from '../CompetitionTemplate';

const BinaryBattle = () => {
    const battleData = {
        name: "Binary Battle",
        logo: "/compitition/binnarybattle/binary_battle_logo.png",
        heroImage: "/compitition/binnarybattle/binnery_battle_background.jpg",
        heroTitlePart1: "24-Hours of",
        heroTitlePart2: "Pure Coding Intensity",
        registrationLink: "/binarrybattle-form",
        aboutImage: "/compitition/binnarybattle/DSC_4953.JPG",
        aboutTitle: "Survival of the Fittest",
        aboutText: [
            "Binary Battle is the flagship software hackathon of Navonmesh, where the brightest minds compete to solve real-world problems through code. It's an endurance test of logic, creativity, and technical prowess.",
            "Work alongside fellow developers, receive guidance from industry mentors, and pitch your solution to a panel of expert judges."
        ],
        glimpses: [
            "/compitition/binnarybattle/DSC_4902.JPG",
            "/compitition/binnarybattle/DSC_4915.JPG",
            "/compitition/binnarybattle/DSC_4944.JPG",
            "/compitition/binnarybattle/DSC_4948.JPG",
            "/compitition/binnarybattle/binnery_battle_background.jpg"
        ],
        benefits: [
            "Cash Prizes for Winners",
            "Internship Opportunities",
            "Startup Incubation Support",
            "Expert Code Reviews",
            "Networking with Tech Leaders",
            "Certificate of Excellence",
            "Hardware & Cloud Credits"
        ],
        screeningSteps: [
            "Idea Submission",
            "Online Screening",
            "Preliminary Round",
            "Final 24-Hour Hackathon"
        ],
        roadmap: [
            { title: "Registration Open", date: "Apply with your team" },
            { title: "Idea Brief Submission", date: "Deadline for concepts" },
            { title: "Selection Results", date: "Top teams announced" },
            { title: "Pre-Hackathon Briefing", date: "Preparation & Guidelines" },
            { title: "Main Event Kickoff", date: "24 hours of coding" },
            { title: "Final Pitching", date: "Showcase your product" }
        ]
    };

    return <CompetitionTemplate data={battleData} />;
};

export default BinaryBattle;
