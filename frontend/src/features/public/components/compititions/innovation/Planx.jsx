import React from 'react';
import CompetitionTemplate from '../CompetitionTemplate';

const Planx = () => {
    const planxData = {
        name: "PlanX",
        logo: "/compitition/plan-x/Plan X .png",
        heroImage: "/compitition/plan-x/TopImage.jpg",
        heroTitlePart1: "Transforming Visionary Ideas",
        heroTitlePart2: "into Scalable Ventures",
        registrationLink: "/planx-form",
        aboutImage: "/compitition/plan-x/AMF_0210 copy.jpg",
        aboutTitle: "The Battle of Brains",
        aboutText: [
            "PlanX is a premier business plan competition designed to catalyze the startup ecosystem. We provide the bridge between a raw concept and a market-ready business model through rigorous screening and high-stakes pitching.",
            "Connect with industry leaders, secure mentorship from veteran entrepreneurs, and showcase your innovation to a panel of active investors."
        ],
        glimpses: [
            "/compitition/plan-x/DSC_4922.JPG",
            "/compitition/plan-x/DSC_4956.JPG",
            "/compitition/plan-x/DSC_4958.JPG",
            "/compitition/plan-x/DSC_4959.JPG",
            "/compitition/plan-x/DSC_4961.JPG"
        ],
        benefits: [
            "Cash Prizes Worth ₹50,000+",
            "Investor Feedback",
            "Strategic Networking",
            "1-on-1 Mentorship",
            "AIC-RNTU Incubation",
            "Partner Credits",
            "Cloud & Software Credits"
        ],
        screeningSteps: [
            "Registration",
            "Shortlisting (Top 40)",
            "Pre-Finale",
            "Grand Finale (Top 25)"
        ],
        roadmap: [
            { title: "Call for Application", date: "Kickstart your journey" },
            { title: "Last Date to Apply", date: "Final call for entries" },
            { title: "Shortlisted Announcement", date: "The top contenders" },
            { title: "Pre-Finale Pitching", date: "Refining the pitch" },
            { title: "Mentorship Sessions", date: "Learning from experts" },
            { title: "Final Pitching", date: "The Grand Finale" }
        ]
    };

    return <CompetitionTemplate data={planxData} />;
};

export default Planx;
