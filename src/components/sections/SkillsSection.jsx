import { motion } from 'framer-motion';
import ServiceCard from '../ui/service-card';
import SkillProgress from '../ui/skill-progress';
import { servicesData, skillsData } from '../../lib/constants';

const SkillsSection = () => {
    return (
        <section id="skills" className="section-padding">
            <div className="container mx-auto px-6">
                {/* Başlık */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                        Neler Yapabilirim?
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="max-w-3xl mx-auto text-foreground">
                        Kendimi teknoloji alanında geliştirmekteyim.
                    </p>
                </motion.div>

                {/* Hizmetler */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ServiceCard
                                iconName={service.iconName}
                                title={service.title}
                                description={service.description}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Teknik Yetenekler */}
                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
                        Teknik Yetenekler
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                        {skillsData.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <SkillProgress
                                    name={skill.name}
                                    percentage={skill.percentage}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
