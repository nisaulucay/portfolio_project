import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/use-scroll-spy';
import { cn } from '../../lib/utils';

const Header = ({ isScrolled }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const activeSection = useScrollSpy(['home', 'about', 'skills', 'portfolio', 'contact'], {
        threshold: 0.5,
        rootMargin: '-100px 0px 0px 0px',
    });

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={cn(
            "fixed w-full z-50 transition-all duration-300",
            isScrolled ? "bg-background/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
        )}>
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#home" className="text-2xl font-heading font-bold text-accent">Portfolyo</a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <a
                            href="#home"
                            className={cn(
                                "nav-link font-accent font-medium text-foreground",
                                activeSection === 'home' && "active"
                            )}
                        >
                            Ana Sayfa
                        </a>
                        <a
                            href="#about"
                            className={cn(
                                "nav-link font-accent font-medium text-foreground",
                                activeSection === 'about' && "active"
                            )}
                        >
                            Hakkımda
                        </a>
                        <a
                            href="#skills"
                            className={cn(
                                "nav-link font-accent font-medium text-foreground",
                                activeSection === 'skills' && "active"
                            )}
                        >
                            Neler Yapabilirim ?
                        </a>
                        <a
                            href="#portfolio"
                            className={cn(
                                "nav-link font-accent font-medium text-foreground",
                                activeSection === 'portfolio' && "active"
                            )}
                        >
                            Portfolyo
                        </a>
                        <a
                            href="#contact"
                            className={cn(
                                "nav-link font-accent font-medium text-foreground",
                                activeSection === 'contact' && "active"
                            )}
                        >
                            İletişim
                        </a>
                    </div>

                    {/* Mobile Navigation Toggle */}
                    <div className="md:hidden">
                        <button
                            className="text-foreground"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-2">
                        <div className="flex flex-col space-y-4">
                            <a
                                href="#home"
                                className="font-accent font-medium text-foreground hover:text-accent transition py-2 border-b border-muted"
                                onClick={closeMobileMenu}
                            >
                                Ana Sayfa
                            </a>
                            <a
                                href="#about"
                                className="font-accent font-medium text-foreground hover:text-accent transition py-2 border-b border-muted"
                                onClick={closeMobileMenu}
                            >
                                Hakkımda
                            </a>
                            <a
                                href="#skills"
                                className="font-accent font-medium text-foreground hover:text-accent transition py-2 border-b border-muted"
                                onClick={closeMobileMenu}
                            >
                                Neler Yapabilirim?
                            </a>
                            <a
                                href="#portfolio"
                                className="font-accent font-medium text-foreground hover:text-accent transition py-2 border-b border-muted"
                                onClick={closeMobileMenu}
                            >
                                Portfolyo
                            </a>
                            <a
                                href="#contact"
                                className="font-accent font-medium text-foreground hover:text-accent transition py-2"
                                onClick={closeMobileMenu}
                            >
                                İletişim
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;