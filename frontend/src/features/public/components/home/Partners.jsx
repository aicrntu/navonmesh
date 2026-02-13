import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const PARTNERS = [
    {
        name: "Indore Software Association",
        logo: "/logo/Indore Software Association - Logo.png"
    },
    {
        name: "Quizzing Partner",
        logo: "/logo/Quizzing-partner.jpeg"
    },
    {
        name: "Reffto",
        logo: "/logo/reffto_logo2.jpg"
    },
    {
        name: "Robonauts India",
        logo: "/logo/Robonauts India-black.png"
    },
    {
        name: "Connect Siksha",
        logo: "/logo/Connect Siksha logo.png"
    },
    {
        name: "Wizcraft Mime",
        logo: "/partners/wizcraft-mime-logo.jpg"
    },
    {
        name: "Google",
        logo: "/partners/Google.png"
    },
    {
        name: "IBM",
        logo: "/partners/ibm.jpg"
    },
    {
        name: "Reliance",
        logo: "/partners/reliance.png"
    },
    {
        name: "Hyundai",
        logo: "/partners/Hyundai.png"
    },
    {
        name: "Hero MotoCorp",
        logo: "/partners/Hero.png"
    },
    {
        name: "Tally",
        logo: "/partners/Tally.jpg"
    },
    {
        name: "MEPSC",
        logo: "/partners/MEPSC.png"
    },
    {
        name: "NIEM",
        logo: "/partners/NIEM.png"
    },
    {
        name: "NRAI",
        logo: "/partners/national-restaurant-association-india-nrai.jpg"
    },
    {
        name: "GOG",
        logo: "/partners/GOG.png"
    },
    {
        name: "VVDN",
        logo: "/partners/VVDN.png"
    },
    {
        name: "AI Partner",
        logo: "/partners/ai.png"
    },
    {
        name: "AL Partner",
        logo: "/partners/al.png"
    },
    {
        name: "RM Partner",
        logo: "/partners/rm.png"
    },
    {
        name: "AIT",
        logo: "/partners/ait.png"
    }
];

const PartnerLogo = ({ partner, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
        >
            <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-auto max-h-24 object-contain grayscale-[60%] group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
            />
        </motion.div>
    );
};

const Partners = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="w-full px-8 md:px-20 lg:px-32">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-white rounded-full border border-primary/20 shadow-sm">
                            Collaboration
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Our <span className="text-primary">Partners</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Empowering innovation and driving entrepreneurship through collaboration.
                        </p>
                    </motion.div>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {PARTNERS.map((partner, index) => (
                        <PartnerLogo key={index} partner={partner} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Partners;
