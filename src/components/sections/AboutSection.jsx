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
                                src="/images/ana_gorsel.jpeg"
                                alt="Hayrunnisa Uluçay - Bilgisayar Mühendisliği Öğrencisi"
                                className="rounded-lg shadow-xl w-full object-cover"
                                style={{height: 'auto', maxHeight: '400px'}}
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
                            Ben Hayrunnisa Uluçay. Kastamonuluyum; Kastamonu Taşköprü Fen Lisesi'nden 2023 yılında mezun oldum.
                            2023'ten bu yana Balıkesir Üniversitesi Bilgisayar Mühendisliği bölümünde okuyorum ve şu an 4. sınıftayım.
                        </p>
                        <p className="text-foreground mb-6 leading-relaxed">
                            Tinus Technologies'deki stajımda Python, FastAPI ve Google Gemini API ile müşteri sorularını yanıtlayan LLM tabanlı bir destek chatbotu geliştirip Render'da canlıya aldım.
                            TÜBİTAK destekli Merkezi Hücre Hattı Bilgi Merkezi projesinde NLP tabanlı bilgi çıkarımı üzerinde çalışıyor, üniversitemin Mezun ve Kariyer Ağı Platformu'nun baş geliştiriciliğini yürütüyorum.
                            React Native ile mobil, React ile web uygulamaları da geliştiriyorum.
                            Yapay Zekâ Takımı üyesiyim, Yörük Türkmen Kültürünü Araştırma Topluluğu'nda başkan yardımcılığı yapıyorum ve HSD Medium komitesinde teknik makaleler yazıyorum.
                            Ekip çalışmasına yatkınım ve yeni teknolojileri hızlı öğrenirim.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h4 className="font-accent font-semibold text-accent mb-2">Eğitim</h4>
                                <p className="text-foreground">Balıkesir Üniversitesi<br/>Bilgisayar Mühendisliği, 4. sınıf (2023 – 2027)</p>
                            </div>
                            <div>
                                <h4 className="font-accent font-semibold text-accent mb-2">Odak Alanları</h4>
                                <p className="text-foreground">Yapay zekâ (LLM, NLP)<br/>Backend ve REST API<br/>Web ve mobil uygulama geliştirme</p>
                            </div>
                            <div>
                                <h4 className="font-accent font-semibold text-accent mb-2">Dil</h4>
                                <p className="text-foreground">Türkçe (ana dil)<br/>İngilizce (B2)</p>
                            </div>
                            <div>
                                <h4 className="font-accent font-semibold text-accent mb-2">İlgi Alanları</h4>
                                <p className="text-foreground">Seyahat<br/>Spor<br/>Sanat</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                asChild
                                className="bg-accent hover:bg-accent/90 text-white font-accent font-medium shadow-md"
                            >
                                <a href="#contact">Benimle İletişime Geç</a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="border-accent text-accent font-accent font-medium"
                            >
                                <a href="/Hayrunnisa_Ulucay_CV_TR.pdf" target="_blank" rel="noopener noreferrer">Özgeçmişimi İndir</a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;