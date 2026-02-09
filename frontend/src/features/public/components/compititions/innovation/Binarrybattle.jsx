import CompetitionTemplate from "../CompetitionTemplate";

const BinaryBattle = () => {
  const battleData = {
    name: "Binary Battle",

    // Navbar + Hero
    logo: "/compitition/binnarybattle/binary_battle_logo.png",
    heroImage: "/compitition/binnarybattle/binnery_battle_background.jpg",
    heroTitlePart1: "Building Code.",
    heroTitlePart2: "Breaking Boundaries.",
    registrationLink: "/binarrybattle-form",

    // About
    aboutImage: "/compitition/binnarybattle/Binary Battle - 1.JPG",
    aboutTitle: "Binary Battle",
    aboutText: [
      "Binary Battle is a high-intensity 24-hour hackathon.",
      "Collaborate, build, and transform ideas into working prototypes.",
      "This is not just coding — it’s innovation under pressure.",
    ],

    // Glimpses
    glimpses: [
      "/compitition/binnarybattle/Binary Battle - 1.JPG",
      "/compitition/binnarybattle/Binary Battle - 2.JPG",
      "/compitition/binnarybattle/Binary Battle - 3.JPG",
      "/compitition/binnarybattle/Binary Battle - 4.JPG",
      "/compitition/binnarybattle/Binary Battle - 5.JPG",
      "/compitition/binnarybattle/Binary Battle - 6.JPG",
    ],

    // Who Can Apply + Why Participate (merged into benefits because template uses one list)
    benefits: [
      //   "UG / PG Students",
      //   "Teams of 2–4 Members",
      //   "Tech Enthusiasts (≤ 25 Years)",
      "Cash Prizes Worth ₹50,000",
      "Startup Ecosystem Networking",
      "Cloud & Software Credits",
      "Pre-Incubation at AIC-RNTU",
      "Job Opportunities with Partners",
    ],

    // Screening Procedure
    screeningSteps: [
      "Profile & GitHub Screening",
      "Theme Selection Round",
      "24-Hour Online Hacking",
      "Final Jury Presentation",
    ],

    // Timeline
    roadmap: [
      { title: "Call for Application", date: "10th Feb" },
      { title: "Last Date to Apply", date: "5th March" },
      { title: "Shortlisting Announcement", date: "8th March" },
      { title: "Pre-Finale Pitching", date: "10th March" },
      { title: "24-Hour Coding Battle", date: "14th March (9:00 AM Start)" },
      { title: "Final Product Presentation", date: "15th March" },
    ],

  };

  return <CompetitionTemplate data={battleData} />;
};

export default BinaryBattle;
