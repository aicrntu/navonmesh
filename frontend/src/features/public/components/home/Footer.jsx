import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Globe, Facebook, Twitter, Linkedin, Instagram, ChevronUp, MapPin } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { submitContact } from '../../../../api/contact.api.js';

const cn = (...inputs) => twMerge(clsx(inputs));

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Handle scroll to show/hide scroll-to-top button
    React.useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await submitContact(formData);
            setSubmitStatus({
                type: 'success',
                message: 'Message sent successfully!'
            });
            setFormData({ name: '', number: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error.response?.data?.message || 'Failed to send message.'
            });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const QUICK_LINKS = [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Events", href: "#events" },
        { name: "Speakers", href: "#speakers" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
    ];

    const handleNavLinkClick = (e, href) => {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        if (element) {
            const headerOffset = 60;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <footer id="contact" className="relative bg-gray-950 pt-20 pb-8 overflow-hidden font-sans border-t border-white/5">
            {/* Background Pattern and Decorations */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
                backgroundSize: '32px 32px'
            }} />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-secondary opacity-80" />
            <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none opacity-40" />
            <div className="absolute bottom-40 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none opacity-40" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <img
                                src="/logo/Scope-Logo (1).png"
                                alt="Navonmesh 2026"
                                className="h-10 brightness-0 invert opacity-80"
                            />
                            {/* <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
                                AIC <span className="text-primary">RNTU</span>
                            </h2> */}
                            <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                Empowering the next generation of professionals through a skill-first curriculum and industry-integrated learning that bridges the gap between traditional education and global employability.
                            </p>
                        </div>
                        <img
                            src="/logo/Navonmesh 2026.png"
                            alt="Navonmesh 2026"
                            className="h-10 brightness-0 invert opacity-80"
                        />
                        <div className="flex gap-4 pt-2">
                            {[
                                { icon: Facebook, href: "https://www.facebook.com/aicrntuincubator/" },
                                { icon: Twitter, href: "https://x.com/AicRntu" },
                                { icon: Linkedin, href: "https://www.linkedin.com/company/aicrntu" },
                                { icon: Instagram, href: "https://www.instagram.com/aic_rntu/" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300 shadow-sm"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Navigation */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.2em]">Explore</h4>
                        <ul className="space-y-4">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavLinkClick(e, link.href)}
                                        className="text-gray-400 hover:text-primary font-bold text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-primary transition-colors" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.2em]">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Email</p>
                                    <a href="mailto:conference@sgsuniversity.ac.in" className="text-sm font-bold text-gray-200 hover:text-primary transition-colors">conference@sgsuniversity.ac.in</a>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Phone</p>
                                    <a href="tel:+917552700485" className="text-sm font-bold text-gray-200 hover:text-primary transition-colors">+91 982 647 4724</a>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Location</p>
                                    <p className="text-sm font-bold text-gray-200">SGSU Campus, NH-12, Narmadapuram Rd, near Misrod,
Bhopal, Bhairopur, Madhya Pradesh 462047</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Quick Enquiry */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.2em]">Quick Enquiry</h4>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-primary/50 transition-all shadow-sm placeholder-gray-500"
                            />
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-primary/50 transition-all shadow-sm placeholder-gray-500"
                                />
                                <input
                                    type="tel"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleInputChange}
                                    placeholder="Phone"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-primary/50 transition-all shadow-sm placeholder-gray-500"
                                />
                            </div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="2"
                                placeholder="Message"
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-primary/50 transition-all shadow-sm resize-none placeholder-gray-500"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            {submitStatus && (
                                <p className={cn("text-[10px] font-bold mt-2", submitStatus.type === 'success' ? "text-green-400" : "text-red-400")}>
                                    {submitStatus.message}
                                </p>
                            )}
                        </form>
                    </div>

                </div>

                {/* Footer Bottom */}
                {/* <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="space-y-1">
                        <p className="text-xs font-bold text-white/40">© 2025 AISECT Infotech. All Rights Reserved.</p>
                        <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Designed by AIC RNTU Developers</p>
                    </div>
                    <div className="flex gap-8">
                        <a href="#privacy" className="text-[10px] font-black text-white/30 hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</a>
                        <a href="#terms" className="text-[10px] font-black text-white/30 hover:text-white transition-colors uppercase tracking-widest">Terms of Service</a>
                        <a href="#cookies" className="text-[10px] font-black text-white/30 hover:text-white transition-colors uppercase tracking-widest">Cookies</a>
                    </div>
                </div> */}
            </div>

            {/* Scroll to Top */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed right-6 bottom-6 w-12 h-12 bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl hover:bg-primary transition-all duration-300 z-50 group hover:-translate-y-1"
                    >
                        <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;
