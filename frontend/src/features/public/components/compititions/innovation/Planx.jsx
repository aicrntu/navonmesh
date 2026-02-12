import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Star, ArrowRight, BookOpen, CheckCircle } from "lucide-react";

const Planx = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // All PlanX data inside this page
    const data = {
        name: "PlanX",

        logo: "/compitition/plan-x/Plan X .png",
        heroImage: "/compitition/plan-x/TopImage.jpg",
        heroTitlePart1: "Transforming Visionary Ideas",
        heroTitlePart2: "into Scalable Ventures",
        registrationLink: "/planx-form",

        aboutImage: "/compitition/plan-x/AMF_0210 copy.jpg",
        aboutTitle: "Planx: Business Plan Battle",
        aboutText: [
            "PlanX is a premier business plan competition designed to catalyze the startup ecosystem. We provide the bridge between a raw concept and a market-ready business model through rigorous screening and high-stakes pitching.",
            "Connect with industry leaders, secure mentorship from veteran entrepreneurs, and showcase your innovation to a panel of active investors.",
        ],

        glimpses: [
            "/compitition/plan-x/PlanX 1.JPG",
            "/compitition/plan-x/PlanX 2.JPG",
            "/compitition/plan-x/PlanX 3.JPG",
            "/compitition/plan-x/DSC_4922.JPG",
            "/compitition/plan-x/DSC_4956.JPG",
            "/compitition/plan-x/DSC_4958.JPG",
        ],

        benefits: [
            "Cash Prizes Worth ₹35,000",
            "Investor Feedback",
            "Strategic Networking",
            "1-on-1 Mentorship",
            "AIC-RNTU Incubation",
            "Partner Credits",
            "Cloud & Software Credits",
        ],

        screeningSteps: [
            "Registration",
            "Shortlisting (Top 40)",
            "Pre-Finale",
            "Grand Finale (Top 25)",
        ],

        roadmap: [
            { title: "Call for Application", date: "10th February" },
            { title: "Last Date to Apply", date: "25th February" },
            { title: "Shortlisted Announcement", date: "1st March" },
            { title: "Pre-Finale Pitching", date: "6th - 8th March" },
            { title: "Final Pitching", date: "15th March" },
        ],
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900 overflow-x-hidden">
            {/* HERO SECTION */}
            <section className="relative w-full overflow-hidden min-h-[65vh] sm:min-h-[75vh] lg:min-h-[92vh]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={data.heroImage}
                        alt="PlanX Hero"
                        className="w-full h-full object-cover opacity-50"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Soft gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20
                  pt-28 sm:pt-32 lg:pt-[12rem]
                  pb-14 sm:pb-16 lg:pb-20
                  min-h-[65vh] sm:min-h-[75vh] lg:min-h-[80vh]
                  flex items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-3xl"
                    >
                        {/* Logo */}
                        <div className="flex items-center gap-4">
                            <img
                                src={data.logo}
                                alt="PlanX Logo"
                                className="h-12 sm:h-14 md:h-16 lg:h-20 drop-shadow-2xl"
                            />
                        </div>

                        {/* Tagline Strip */}
                        <div className="mt-6 sm:mt-8 inline-block w-full sm:w-auto">
                            <div className="bg-black/55 backdrop-blur-md border border-white/10
                        px-4 sm:px-5 py-3 rounded-xl">
                                <p className="text-xs sm:text-sm md:text-base font-black uppercase tracking-widest text-white leading-snug">
                                    {data.heroTitlePart1}{" "}
                                    <span className="text-sky-400">{data.heroTitlePart2}</span>
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-6 sm:mt-8">
                            {data.registrationLink.startsWith("/") ? (
                                <Link
                                    to={data.registrationLink}
                                    className="w-full sm:w-[340px] md:w-[360px]
                       inline-flex items-center justify-center gap-3
                       px-8 sm:px-10 py-4 sm:py-5
                       bg-gray-950 hover:bg-primary text-white font-black
                       rounded-2xl transition-all hover:scale-[1.02]
                       shadow-2xl shadow-black/40
                       tracking-widest text-[10px] sm:text-xs uppercase group"
                                >
                                    Secure Your Spot
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            ) : (
                                <a
                                    href={data.registrationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-[340px] md:w-[360px]
                       inline-flex items-center justify-center gap-3
                       px-8 sm:px-10 py-4 sm:py-5
                       bg-gray-950 hover:bg-primary text-white font-black
                       rounded-2xl transition-all hover:scale-[1.02]
                       shadow-2xl shadow-black/40
                       tracking-widest text-[10px] sm:text-xs uppercase group"
                                >
                                    Secure Your Spot
                                    <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* ABOUT SECTION */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-8 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <img
                                src={data.aboutImage}
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
                                {data.aboutTitle}
                            </h2>

                            <div className="space-y-6 text-gray-600 font-medium text-lg text-justify leading-relaxed">
                                {data.aboutText.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                            <a
                                href="/compitition/rule-book/RULE_BOOK_PLANX_NAVONMESH_2026_FINAL (1).pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:underline pt-2 group/link"
                            >
                                <BookOpen className="w-4 h-4" />
                                Download Rule Book
                                <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* GLIMPSES SECTION */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-8 lg:px-20 text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-4">
                        Previous <span className="text-primary italic">Glimpses</span>
                    </h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                        Highlights from our past high-impact editions
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4 lg:px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.glimpses.map((img, i) => (
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

            {/* BENEFITS SECTION */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-1" />

                <div className="max-w-7xl mx-auto px-8 lg:px-20">
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-16 text-center">
                        Why Compete in{" "}
                        <span className="text-primary italic">{data.name}</span>?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {data.benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:border-primary/30 transition-all group"
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
            <section id="eligibility" className="py-24 bg-blue-50/50">
                <div className="max-w-7xl mx-auto px-8 lg:px-20">
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-16 text-center">
                        Who Can <span className="text-primary italic">Apply</span>?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Any Stream Students",
                            "UG/PG/Diploma Students",
                            "Team Must Comprise of 2-4 Students"
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
            </section>

            {/* SCREENING PROCESS */}
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
                        {data.screeningSteps.map((step, i) => (
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

            {/* ROADMAP SECTION */}
            <section className="py-24 bg-white relative">
                <div className="max-w-3xl mx-auto px-8 relative">
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase mb-16 text-center">
                        Roadmap to <span className="text-primary italic">Success</span>
                    </h2>

                    <div className="absolute left-[50%] top-32 bottom-20 w-px bg-gray-100 hidden md:block" />

                    <div className="space-y-12">
                        {data.roadmap.map((item, i) => (
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

export default Planx;
