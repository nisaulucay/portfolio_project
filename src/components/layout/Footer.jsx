import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neutral-800 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-heading font-bold mb-2">Hayrunnisa Uluçay</h2>
                        <p className="text-neutral-100/80">Bilgisayar Mühendisliği Öğrencisi</p>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-neutral-100/80 mb-2">© {new Date().getFullYear()} All Rights Reserved</p>
                        <a href="#" className="text-accent hover:text-accent/80 transition">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;