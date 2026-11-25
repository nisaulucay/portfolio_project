import { motion } from 'framer-motion';
import ServiceCard from '../ui/service-card';
import { servicesData, skillGroups } from '../../lib/constants';

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
                        Yapay zekâ destekli yazılım, backend, web ve mobil uygulama geliştirme alanlarında çalışıyorum.
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillGroups.map((group, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h4 className="font-accent font-semibold text-accent mb-4">{group.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 rounded-full bg-secondary/40 text-foreground text-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
