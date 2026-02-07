import React from "react";
import CompetitionTemplate from "../CompetitionTemplate";

const Planx = () => {
    const planxData = {
        name: "PlanX",

        // Navbar + Hero
        logo: "/compitition/plan-x/Plan X .png",
        heroImage: "/compitition/plan-x/TopImage.jpg",
        heroTitlePart1: "Transforming Visionary Ideas",
        heroTitlePart2: "into Scalable Ventures",
        registrationLink: "/planx-form",

        // About Section
        aboutImage: "/compitition/plan-x/AMF_0210 copy.jpg",
        aboutTitle: "Planx: Business Plan Battle",
        aboutText: [
            "PlanX is a premier business plan competition designed to catalyze the startup ecosystem. We provide the bridge between a raw concept and a market-ready business model through rigorous screening and high-stakes pitching.",
            "Connect with industry leaders, secure mentorship from veteran entrepreneurs, and showcase your innovation to a panel of active investors.",
        ],

        // Glimpses Section
        glimpses: [
            "/compitition/plan-x/PlanX 1.JPG",
            "/compitition/plan-x/PlanX 2.JPG",
            "/compitition/plan-x/PlanX 3.JPG",
            "/compitition/plan-x/DSC_4922.JPG",
            "/compitition/plan-x/DSC_4956.JPG",
            "/compitition/plan-x/DSC_4958.JPG",
        ],

        // Benefits Section (from PHP array)
        benefits: [
            "Cash Prizes Worth ₹10,000",
            "Investor Feedback",
            "Strategic Networking",
            "1-on-1 Mentorship",
            "AIC-RNTU Incubation",
            "Partner Credits",
            "Cloud & Software Credits",
        ],

        // Screening Process
        screeningSteps: [
            "Registration",
            "Shortlisting (Top 40)",
            "Pre-Finale",
            "Grand Finale (Top 25)",
        ],

        // Timeline / Roadmap
        roadmap: [
            { title: "Call for Application", date: "10th February" },
            { title: "Last Date to Apply", date: "25th February" },
            { title: "Shortlisted Announcement", date: "1st March" },
            { title: "Pre-Finale Pitching", date: "6th - 8th March" },
            { title: "Final Pitching", date: "15th March" },
        ],

    };

    return <CompetitionTemplate data={planxData} />;
};

export default Planx;
