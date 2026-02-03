import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const GALLERY_IMAGES = [
    { src: "/gallery/Gallery 1.JPG", alt: "Event Moment 1" },
    { src: "/gallery/Gallery 3.JPG", alt: "Event Moment 3" },
    { src: "/gallery/Gallery 6.JPG", alt: "Event Moment 6" },
    { src: "/gallery/Gallery 2.JPG", alt: "Event Moment 2" },
    { src: "/gallery/Gallery 4.JPG", alt: "Event Moment 4" },
    { src: "/gallery/Gallery 10.JPG", alt: "Event Moment 10" },
    { src: "/gallery/Gallery 12.JPG", alt: "Event Moment 12" },
    { src: "/gallery/Gallery 13.JPG", alt: "Event Moment 13" }
];

const GalleryItem = ({ image, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => onClick(image.src)}
            className="group relative overflow-hidden rounded-2xl h-[270px] bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
        >
            {/* Image */}
            <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.18]"
                loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white text-2xl scale-85 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 className="w-6 h-6" />
                </div>
            </div>
        </motion.div>
    );
};

const Lightbox = ({ isOpen, imageSrc, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black/92 flex items-center justify-center z-[9999]"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-7 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white text-3xl flex items-center justify-center hover:bg-white/25 hover:rotate-90 transition-all duration-300"
                        aria-label="Close image"
                    >
                        <X className="w-7 h-7" />
                    </button>

                    {/* Image */}
                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        src={imageSrc}
                        alt="Fullscreen preview"
                        className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Event = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const openLightbox = (src) => {
        setCurrentImage(src);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = '';
    };

    // Close on Escape key
    React.useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') closeLightbox();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <>
            <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                {/* Blur Orbs */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

                <div className="w-full px-8 md:px-20 lg:px-32 relative z-10">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            {/* Decorative Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Memories
                            </div>

                            {/* Title */}
                            <h2 className="text-5xl md:text-6xl font-black mb-4">
                                <span className="bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent">
                                    Event
                                </span>{' '}
                                <span className="text-white">Photos</span>
                            </h2>

                            {/* Subtitle */}
                            <p className="text-gray-300 text-lg max-w-[580px] mx-auto leading-relaxed">
                                Captured moments that reflect the energy, creativity, and passion of the event
                            </p>

                            {/* Decorative Line */}
                            <div className="flex items-center justify-center gap-3 mt-6">
                                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary/50" />
                                <div className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
                                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary/50" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {GALLERY_IMAGES.map((image, index) => (
                            <GalleryItem
                                key={index}
                                image={image}
                                index={index}
                                onClick={openLightbox}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* Lightbox */}
            <Lightbox
                isOpen={lightboxOpen}
                imageSrc={currentImage}
                onClose={closeLightbox}
            />
        </>
    );
};

export default Event;
