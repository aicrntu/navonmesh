import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, ArrowRight, Sparkles, Cpu, Globe, Zap } from 'lucide-react';

const IcaiSection = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <div className="w-full px-8 md:px-20 lg:px-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Side: Animated Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative group">
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-secondary rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                            <div className="relative bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-hidden">
                                {/* Featured Badge */}
                                <div className="absolute top-6 right-6">
                                    <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20 flex items-center gap-2">
                                        <Sparkles className="w-3 h-3" />
                                        Featured Event
                                    </span>
                                </div>

                                <div className="mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-primary/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                        <BrainCircuit size={32} />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tighter">
                                        ICAI <span className="text-primary">2026</span>
                                    </h3>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none">
                                        International Conference
                                    </p>
                                </div>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-4 text-gray-600">
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                                            <Cpu className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-sm font-medium">Emerging Technologies in AI</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-600">
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                                            <Globe className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-sm font-medium">Global Network of Researchers</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-600">
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                                            <Zap className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-sm font-medium">Industry-Leading Tools</span>
                                    </div>
                                </div>

                                <a
                                    href="https://conference.sgsuniversity.ac.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 bg-gray-900 text-white rounded-2xl font-bold text-sm tracking-wide hover:bg-primary transition-all duration-300 group/btn shadow-xl hover:shadow-primary/30"
                                >
                                    Explore Conference
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Floating Element */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 md:-left-12 hidden md:block"
                        >
                            <div className="bg-white/80 backdrop-blur-md border border-gray-100 px-6 py-4 rounded-2xl shadow-xl">
                                <span className="text-gray-400 text-[10px] font-black uppercase tracking-tighter">SGSU Powered</span>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm font-bold text-gray-900">Registration Open</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="lg:col-span-7 lg:pl-12"
                    >
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight tracking-tighter">
                                Bridging <span className="text-primary italic">Innovation</span> Through Intelligence
                            </h2>

                            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />

                            <div className="space-y-6">
                                <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed italic border-l-4 border-primary/20 pl-6">
                                    "The conference provides a platform for academicians, researchers, industry professionals and policymakers to explore AI applications across fields, showcasing emerging research, tools and technologies shaping intelligent systems."
                                </p>

                                <p className="text-base text-gray-500 leading-relaxed text-justify">
                                    Join us at ICAI 2026, where the brightest minds converge to discuss the transformative power of Artificial Intelligence. From foundational research to real-world deployment, this conference is the epicenter of AI evolution in Central India.
                                </p>
                            </div>

                            {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                                <div className="space-y-1">
                                    <span className="text-2xl font-black text-gray-900">50+</span>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Keynote Speakers</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-2xl font-black text-gray-900">100+</span>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Research Papers</p>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-2xl font-black text-gray-900">500+</span>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Delegates</p>
                                </div>
                            </div> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IcaiSection;
