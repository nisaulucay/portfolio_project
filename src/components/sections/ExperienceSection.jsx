import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { experienceData, activitiesData, certificatesData } from '../../lib/constants';

const ExperienceSection = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="container mx-auto px-6">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Deneyim</h2>
                    <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="max-w-3xl mx-auto text-foreground">
                        Staj, araştırma projesi ve üniversite içindeki geliştirme çalışmalarım.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experienceData.map((item, index) => {
                        const IconComponent = (LucideIcons)[item.iconName] || LucideIcons.Briefcase;
                        return (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-6 md:p-8 flex gap-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="hidden sm:flex w-14 h-14 shrink-0 bg-secondary rounded-full items-center justify-center text-accent">
                                    <IconComponent size={24} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
                                        <h3 className="text-xl font-heading font-semibold text-foreground">{item.title}</h3>
                                        <span className="text-sm font-accent text-accent">{item.date}</span>
                                    </div>
                                    <p className="font-accent font-medium text-foreground/80 mb-4">{item.organization}</p>
                                    <ul className="list-disc pl-5 space-y-2 text-foreground leading-relaxed">
                                        {item.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <motion.div
                        className="bg-secondary/30 rounded-xl p-6 md:p-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Liderlik ve Topluluklar</h3>
                        <ul className="list-disc pl-5 space-y-2 text-foreground leading-relaxed">
                            {activitiesData.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="bg-secondary/30 rounded-xl p-6 md:p-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Sertifikalar</h3>
                        <ul className="list-disc pl-5 space-y-2 text-foreground leading-relaxed">
                            {certificatesData.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
