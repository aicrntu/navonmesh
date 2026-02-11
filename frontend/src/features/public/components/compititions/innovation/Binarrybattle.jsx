import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Star, Layout, ArrowRight, CheckCircle } from "lucide-react";

const BinaryBattle = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const battleData = {
    name: "Binary Battle",

    logo: "/compitition/binnarybattle/binary_battle_logo.png",
    heroImage: "/compitition/binnarybattle/binnery_battle_background.jpg",
    heroTitlePart1: "Building Code.",
    heroTitlePart2: "Breaking Boundaries.",
    registrationLink: "/binarrybattle-form",

    aboutImage: "/compitition/binnarybattle/Binary Battle - 1.JPG",
    aboutTitle: "Binary Battle",
    aboutText: [
      "The Binary Battle : 24 hour AI & Software Hackathon is a dynamic 24 hour Coding sprint designed to bridge the gap between classroom learning and industry application through hands-on development.",
      "It empowers students to engineer scalable, technology-enabled solutions across diverse domains like automation, education, and rural development using Artificial Intelligence.",
    ],

    themes: [
      "AI for Automation & Productivity",
      "AI + Computer Vision",
      "AI in Education & Skill Development",
      "AI for Healthcare & Well-Being",
      "AI for Smart Cities & Sustainability",
      "AI for Social Impact & Accessibility",
      "AI for Rural & Inclusive Development",
    ],

    glimpses: [
      "/compitition/binnarybattle/Binary Battle - 1.JPG",
      "/compitition/binnarybattle/Binary Battle - 2.JPG",
      "/compitition/binnarybattle/Binary Battle - 3.JPG",
      "/compitition/binnarybattle/Binary Battle - 4.JPG",
      "/compitition/binnarybattle/Binary Battle - 5.JPG",
      "/compitition/binnarybattle/Binary Battle - 6.JPG",
    ],

    benefits: [
      "Cash Prizes Worth ₹50,000",
      "Startup Ecosystem Networking",
      "Cloud & Software Credits",
      "Pre-Incubation at AIC-RNTU",
      "Job Opportunities with Partners",
    ],

    screeningSteps: [
      "Profile & GitHub Screening",
      "Theme Selection Round",
      "24-Hour Online Hacking",
      "Final Jury Presentation",
    ],

    roadmap: [
      { title: "Call for Application", date: "10th Feb" },
      { title: "Last Date to Apply", date: "5th March" },
      { title: "Shortlisting Announcement", date: "8th March" },
      { title: "Pre-Finale Pitching", date: "10th March" },
      { title: "24-Hour Coding Battle", date: "14th March (9:00 AM Start)" },
      { title: "Final Product Presentation", date: "15th March" },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900 overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10" />
          <img
            src={battleData.heroImage}
            alt="Hero"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <div className="flex justify-center items-center gap-8 mb-8">
            <img
              src={battleData.logo}
              alt="Logo"
              className="h-24 md:h-32 filter drop-shadow-2xl"
            />

          </div>

          <h1 className="text-xl md:text-xl font-black text-gray-900 leading-tight tracking-tighter mb-8 uppercase">
            {battleData.heroTitlePart1}{" "}
            <span className="text-white italic">
              {battleData.heroTitlePart2}
            </span>
          </h1>

          {battleData.registrationLink.startsWith("/") ? (
            <Link
              to={battleData.registrationLink}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 hover:bg-primary text-white font-black rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-black/10 tracking-widest text-xs uppercase group"
            >
              Secure Your Spot{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <a
              href={battleData.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 hover:bg-primary text-white font-black rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-black/10 tracking-widest text-xs uppercase group"
            >
              Secure Your Spot{" "}
              <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
          )}
        </motion.div>
        <h1 className="text-xl md:text-xl font-black text-white-900 leading-tight tracking-tighter mt-8 uppercase">Knowledge Partner</h1>
        <img
          src="/logo/Indore Software Association - Logo.png"
          alt="Indore Software Association Logo"
          className="h-20 md:h-28 filter drop-shadow-2xl"
        />
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <img
                src={battleData.aboutImage}
                alt="About"
                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
              />
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                {battleData.aboutTitle}
              </h2>

              <div className="space-y-6 text-gray-600 font-medium text-lg text-justify leading-relaxed">
                {battleData.aboutText.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section id="themes" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-4">
              Hackathon <span className="text-primary italic">Themes</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
              Choose any one theme and build your solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {battleData.themes.map((theme, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-primary/30 transition-all group shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layout className="w-6 h-6 text-primary" />
                </div>

                <h4 className="font-black text-gray-900 uppercase tracking-tight leading-tight">
                  {theme}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GLIMPSES */}
      <section id="glimpses" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-4">
            Previous <span className="text-primary italic">Glimpses</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
            Highlights from our past high-impact editions
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {battleData.glimpses.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-64 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt="Past Edition"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-1" />

        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-16 text-center">
            Why Compete in{" "}
            <span className="text-primary italic">{battleData.name}</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {battleData.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-black text-gray-900 uppercase tracking-tight leading-tight">
                  {benefit}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      {/* <section id="eligibility" className="py-24 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-16 text-center">
            Who Can <span className="text-primary italic">Apply</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "UG / PG Students",
              "Team Size: 2-4 Members",
              "Tech Enthusiasts",
              "Developers & Coders"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgb(0, 136, 204)' }}>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* SCREENING */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-7xl mx-auto px-8 lg:px-20 relative z-10">
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-16 text-center">
            The <span className="text-primary italic">Screening</span> Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {battleData.screeningSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group"
              >
                <span className="text-7xl font-black text-white/5 absolute -top-4 -right-4 group-hover:text-primary/10 transition-colors">
                  0{i + 1}
                </span>
                <h4 className="text-xl font-black uppercase tracking-tight relative z-10">
                  {step}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="py-24 bg-white relative">
        <div className="max-w-3xl mx-auto px-8 relative">
          <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-16 text-center">
            Roadmap to <span className="text-primary italic">Success</span>
          </h2>

          <div className="absolute left-[50%] top-32 bottom-20 w-px bg-gray-100 hidden md:block" />

          <div className="space-y-12">
            {battleData.roadmap.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                <div
                  className={`flex-1 w-full p-8 bg-gray-50 border border-gray-100 rounded-2xl ${i % 2 === 0
                    ? "text-left md:text-right"
                    : "text-left"
                    }`}
                >
                  <h4 className="font-black text-lg text-gray-900 uppercase">
                    {item.title}
                  </h4>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">
                    {item.date}
                  </p>
                </div>

                <div className="z-10 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg hidden md:block" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BinaryBattle;
