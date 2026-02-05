import React from "react";
import CompetitionTemplate from "../CompetitionTemplate";

const Innomaker = () => {
  const innoData = {
    name: "Innomaker",

    // Navbar + Hero
    logo: "/compitition/innomaker/inno_maker_white_logo.png",
    heroImage: "/compitition/innomaker/innomaker_background.jpg",
    heroTitlePart1: "Prototyping the Future",
    heroTitlePart2: "of Innovation",
    registrationLink: "/innomaker-form",

    // About
    aboutImage: "/compitition/innomaker/Innomaker 3.JPG",
    aboutTitle: "Innomaker: Product Hackathon",
    aboutText: [
      "Innomaker is a product hackathon where technical students turn ideas into real-world solutions through hands-on innovation.",
      "Participants collaborate, build prototypes, and gain mentorship while bridging the gap between theory and practice.",
      "Join Innomaker and be part of the next wave of innovators.",
    ],

    // Glimpses
    glimpses: [
      "/compitition/innomaker/Innomaker 1 (2).JPG",
      "/compitition/innomaker/Innomaker 2.JPG",
      "/compitition/innomaker/Innomaker 3.JPG"
    ],

    // Themes (put inside benefits because template supports only one list)
    benefits: [
      // Themes
    //   "Smart Resource Conservation",
    //   "Smart Education",
    //   "Disaster Management",
    //   "Blockchain & Cybersecurity",
    //   "Renewable Energy",
    //   "Robotics & Drones",
    //   "Agriculture & FoodTech",
    //   "Healthcare & MedTech",
    //   "Smart Automation",
    //   "Miscellaneous",

    //   // Who can apply
    //   "2–4 Members per Team",
    //   "UG / PG Students",
    //   "Tech Enthusiasts",

      // Why Participate
      "Cash Prizes Worth ₹100,000",
      "Recognition & Visibility",
      "Ecosystem Networking",
      "Pre-Incubation at AIC-RNTU",
      "Cloud & Software Credits",
      "Fab-Lab Prototype Support",
    ],

    // Screening Steps
    screeningSteps: [
      "Registration with Presentation",
      "Shortlisting – Top 40 Teams",
      "Prototype Development Phase",
      "Pre-Finale Pitching",
      "Final Expo – Top 20 Teams",
    ],

    // Timeline
    roadmap: [
      { title: "Call for Application", date: "" },
      { title: "Last Date to Apply", date: "" },
      { title: "Prototype Development Phase", date: "" },
      { title: "Pre-Finale Pitching", date: "" },
      { title: "Final Expo Showcase", date: "" },
    ],
  };

  return <CompetitionTemplate data={innoData} />;
};

export default Innomaker;
