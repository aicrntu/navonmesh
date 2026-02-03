import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const SPEAKERS = [
    {
        name: "Mr. Aman Gupta",
        role: "Co-Founder & CMO, BOAT",
        image: "/speakers/new-2025/Aman Gupta.JPG"
    },
    {
        name: "Mr. Rohit Kapoor",
        role: "CEO Swiggy",
        image: "/speakers/new-2025/rohit.JPG"
    },
    {
        name: "Mayuresh Raut",
        role: "Co-Founder & Managing Partner, Seafund",
        image: "/speakers/new-2025/Mayuresh Raut.JPG"
    },
    {
        name: "Bina Trivedi",
        role: "Managing Partner, IL&FS Investment Managers Ltd",
        image: "/speakers/new-2025/Bina Trivedi.JPG"
    },
    {
        name: "Rajesh Sharma",
        role: "Managing Partner, ADIGAN CAPITAL",
        image: "/speakers/new-2025/Rajesh Sharma.JPG"
    },
    {
        name: "Vikas Sarda",
        role: "CFO, Unitus Capital",
        image: "/speakers/new-2025/Vikas Sarda.JPG"
    },
    {
        name: "Mr. Ajay J Singala",
        role: "Enterprise Architect, SME, Mentor",
        image: "/speakers/new-2025/Mr. Ajay J Singala.JPG"
    },
    {
        name: "Anurag Asati",
        role: "Co-Founder, The Kabadiwala",
        image: "/speakers/new-2025/Anurag Asati.JPG"
    },
    {
        name: "Aysha Noureen",
        role: "Co-Founder, Femi Safe",
        image: "/speakers/new-2025/Aysha Noureen.JPG"
    },
    {
        name: "Naseef asadullak",
        role: "Co-Founder, FemiSafe",
        image: "/speakers/new-2025/Naseef asadullak.JPG"
    },
    {
        name: "Karan Mehta",
        role: "Co-Founder, Toprankers",
        image: "/speakers/new-2025/karan-mehta.JPG"
    },
    {
        name: "Mr. Samar Singla",
        role: "Founder, Jugnoo",
        image: "/speakers/1.samar singla.jpg"
    },
    {
        name: "Mr. P Narhari",
        role: "IAS Officer",
        image: "/speakers/2.Mr.-P.-Narhari.png"
    },
    {
        name: "Mr. Vaibhav Sisinty",
        role: "Founder, GrowthSchool",
        image: "/speakers/3.Vaibhav Sisinty.png"
    },
    {
        name: "Mr. Nemesh Singh",
        role: "Founder, Appointy",
        image: "/speakers/4. Appointy - Nemesh Singh 0.jpeg"
    },
    {
        name: "Mr. Vikrant Varshney",
        role: "Managing Partner, SucSEED",
        image: "/speakers/5. Mr. Vikrant Varshney.jpg"
    },
    {
        name: "Mr. Ashank Singh",
        role: "Entrepreneur",
        image: "/speakers/6.Ashank Singh.jpg"
    },
    {
        name: "Mr. Vikrant Potnis",
        role: "Founder, FundEnable",
        image: "/speakers/7. mr. vikrant potnis.jpg"
    },
    {
        name: "Mr. Anil Joshi",
        role: "Unicorn India Ventures",
        image: "/speakers/8. anil joshi (unicorn india)0.jpg"
    },
    {
        name: "Mr. Dhruv Nath",
        role: "Lead Angels Network",
        image: "/speakers/9. Mr. Dhruv nath(lead angels).jpg"
    },
    {
        name: "Mr. Bhusan Gajariya",
        role: "Beehive Capital",
        image: "/speakers/10. Mr. bhusan gajariya.jpg"
    },
    {
        name: "Mr. Ismail Akbani",
        role: "Innovation Head",
        image: "/speakers/11. Ismail Akbani linkedin.jpg"
    },
    {
        name: "Mr. Arjun Panchal",
        role: "Author & Entrepreneur",
        image: "/speakers/12. Arjun Panchal.png"
    },
    {
        name: "Mr. Ratheesh Krishnan",
        role: "Global Startup Expert",
        image: "/speakers/13. Ratheesh Krishnan.jpeg"
    },
    {
        name: "Mr. Gautham Sivaramakrishnan",
        role: "Director, Headstart",
        image: "/speakers/gautham-sivaramakrishnan.jpeg"
    }
];

const SpeakerCard = ({ speaker, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Speaker Info */}
            <div className="p-4 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                    {speaker.name}
                </h4>
                <span className="text-sm text-gray-600 font-medium">
                    {speaker.role}
                </span>
            </div>
        </motion.div>
    );
};

const PastSpeakers = () => {
    return (
        <section id="speakers" className="py-20 bg-white">
            <div className="w-full px-8 md:px-20 lg:px-32">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-blue-50 rounded-full border border-primary/20">
                            Our Legacy
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Past <span className="text-primary">Speakers</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Industry leaders and visionaries who have inspired our community
                        </p>
                    </motion.div>
                </div>

                {/* Speakers Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {SPEAKERS.map((speaker, index) => (
                        <SpeakerCard key={index} speaker={speaker} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PastSpeakers;
