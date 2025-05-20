import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section id="home" className="relative flex items-center min-h-screen section-padding pt-20">
            {/* Background image with overlay */}
            <div
                className="absolute inset-0 bg-center bg-cover opacity-15"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <motion.div
                        className="lg:w-1/2 mb-10 lg:mb-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground mb-6">
                            Hayrunnisa Uluçay
                        </h1>
                        <h2 className="text-xl md:text-2xl font-heading font-medium text-accent mb-8">
                            Bilgisayar Mühendisliği Öğrencisi
                        </h2>
                        <p className="text-lg text-foreground leading-relaxed mb-10 max-w-lg">
                            Balıkesir Üniversitesi Bilgisayar Mühendisliği bölümünde 2 senedir eğitim görmekteyim.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#portfolio"
                                className="bg-accent hover:bg-accent/90 text-white font-accent font-medium shadow-md px-6 py-3 rounded-full"
                            >
                                Çalışmalarım
                            </a>
                            <a
                                href="#contact"
                                className="border-2 border-accent text-accent hover:bg-accent/10 font-accent font-medium px-6 py-3 rounded-full"
                            >
                                İletişime Geç
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:w-2/5 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative rounded-full overflow-hidden h-72 w-72 md:h-96 md:w-96 border-8 border-white shadow-xl mx-auto">
                            <img
                                src="https://i.postimg.cc/SRWthxdV/Whats-App-Image-2025-05-11-at-00-36-08.jpg"
                                alt="Hayrunnisa Uluçay - Bilgisayar Mühendisliği Öğrencisi"
                                className="w-full max-w-xs mx-auto rounded-full border-4 border-gray-300 shadow-lg object-cover"
                                style={{ height: 'auto', aspectRatio: '1 / 1' }}
                            />


                        </div>
                        <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 bg-primary rounded-full h-24 w-24 md:h-32 md:w-32 flex items-center justify-center shadow-lg">
                            <p className="text-white font-heading font-bold text-lg md:text-xl"></p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;