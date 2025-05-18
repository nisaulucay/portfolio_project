import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const AboutSection = () => {
    return (
        <section id="about" className="bg-white section-padding">
            <div className="container mx-auto px-6">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Hakkımda</h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        className="lg:w-2/5"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative mx-auto max-w-md">
                            <img
                                src="https://i.postimg.cc/3Rhvqry3/Whats-App-Image-2025-05-16-at-14-14-29.jpg"
                                alt="Hayrunnisa Uluçay"
                                className="rounded-lg shadow-xl w-full object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-secondary rounded-lg p-4 shadow-lg max-w-xs">
                                <div className="flex items-center space-x-3">
                                    <div className="p-3 bg-accent rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                            <path d="M12 2l3 7h7l-6 4 3 7-7-4-7 4 3-7-6-4h7l3-7z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:w-3/5"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">Bilgisayar Mühendisliği Öğrencisi</h3>
                        <p className="text-foreground mb-4 leading-relaxed">
                            Ben Hayrunnisa Uluçay. 2005 yılında Kastamonu'da doğdum orada büyüdüm ve Kastamonuluyum.
                            Kastamonu Taşköprü Fen Lisesi'nden 2023 yılında mezun oldum.
                            Ve 2023 yılından bu yana Balıkesir Üniverstesi Bilgisayar Mühendisliği bölümünde eğitim görmekteyim.
                        </p>
                        <p className="text-foreground mb-6 leading-relaxed">
                            Teknolojiye ve yazılıma olan ilgim, üniversite yıllarım boyunca daha da derinleşti.
                            Kendimi özellikle yazılım geliştirme alanında geliştirmeye çalışıyorum.
                            İngilizce alanında da online konuşma eğitimleri alarak speaking alanında geliştirdim.
                            Ayrıca Arduino ile ilgili temel elektronik ve programlama konularını kapsayan bir eğitim programına katıldım ve bu eğitim sonunda sertifika almaya hak kazandım.
                            Bu sayede donanım tabanlı projelerde de kendimi geliştirme fırsatı buldum. Grup çalışmalarına oldukça yatkınım ve uyumlu bir insanım.
                            Şu an da üniversitemizin yapay zeka takımında hem proje geliştip hem de kendimi yapay zeka alanında geliştirmekteyim.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h4 className="font-accent font-semibold text-accent mb-2">Eğitim</h4>
                                <p className="text-foreground">Balıkesir Üniverstesi<br/>Bilgisayar Mühendisliği alanına eğitim görmekteyim.</p>
                            </div>
                            <div>
                                <h4 className="font-accent font-semibold text-accent mb-2">Öğrenilen Deneyimler</h4>
                                <p className="text-foreground">React ve Tailwind CSS kullanarak kişisel portfolyo sitesi geliştirildi. Toast bileşenleriyle çalışırken yaşanan sorunlar analiz edildi ve çözüm yolları araştırıldı.<br/>Frontend geliştirmede component mimarisi, form yönetimi ve kullanıcı deneyimi üzerine çalışmalar yapıldı.</p>
                            </div>
                            <div>
                                <h4 className="font-accent font-semibold text-accent mb-2">Dil</h4>
                                <p className="text-foreground">İngilizce(B2)<br/> Türkçe<br/></p>
                            </div>
                            <div>
                                <h4 className="font-accent font-semibold text-accent mb-2">İlgi Alanları</h4>
                                <p className="text-foreground">Seyahat<br/>Spor<br/>Sanat</p>
                            </div>
                        </div>

                        <Button
                            asChild
                            className="bg-accent hover:bg-accent/90 text-white font-accent font-medium shadow-md"
                        >
                            <a href="#contact">Benimle İletişime Geç</a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;