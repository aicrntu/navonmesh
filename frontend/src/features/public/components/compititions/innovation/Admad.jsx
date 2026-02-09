import React from "react";
import CompetitionTemplate from "../CompetitionTemplate";

const Admad = () => {
  const admadData = {
    name: "AdMad Show",

    // Navbar + Hero
    logo: "/compitition/admad/admad_show_logo.png",
    heroImage: "/compitition/admad/admad_show_background.jpg",
    heroTitlePart1: "The Ultimate",
    heroTitlePart2: "Ad Creation Challenge!",
    registrationLink: "/admad-form",

    // About Section
    aboutImage: "/compitition/admad/AD%20MAD%20SHOW%201.JPG",
    aboutTitle: "AdMad Show",
    aboutText: [
      "Ad Mad Show is the ultimate arena for creative thinkers and marketing enthusiasts.",
      "It's where branding meets humor, and strategy meets storytelling to create the most impactful advertising campaigns.",
      "Showcase your ability to captivate an audience, receive feedback from top creative directors, and compete for the title of the ultimate 'Ad Mad' champion.",
    ],

    // Glimpses Section
    glimpses: [
      "/compitition/admad/AD%20MAD%20SHOW%201.JPG",
      "/compitition/admad/AD%20MAD%20SHOW%202.JPG",
      "/compitition/admad/AD%20MAD%20SHOW%205.JPG",
      "/compitition/admad/AD%20MAD%20SHOW%204.JPG",
    ],

    // Who Can Apply (I am putting it inside benefits because your template only has benefits)
    benefits: [
      //   "UG / PG Students",
      //   "Marketing Enthusiasts",
      //   "Content Creators",        // who can apply
      //   "Creative Artists",
      "Cash Prizes Worth ₹35,000",
      "Extensive Networking",
      "Internship Opportunities",
      "Free Learning Sessions for Top 20",
    ],

    // Screening Procedure
    screeningSteps: [
      "Creative Task Assigned",
      "Shortlisting – Top 20 Teams",
      "Finale Day 1 – Creative Presentation",
      "Finale Day 2 – Reel & Jury Evaluation",
    ],

    // Event Timeline
    roadmap: [
      { title: "Call for Application", date: "02/08/2026" },
      { title: "Last Date to Apply", date: "05 March 2026" },
      { title: "Assignment Given to Teams", date: "14 March 2026" },
      { title: "Assignment Submission", date: "15 March 2026" },
      { title: "Final Rounds at Finale Event", date: "15 March 2026" },
    ],
  };

  return <CompetitionTemplate data={admadData} />;
};

export default Admad;
