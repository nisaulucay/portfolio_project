import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import PortfolioItem from '../ui/portfolio-item';
import { portfolioData, portfolioCategories } from '../../lib/constants';

const PortfolioSection = () => {
    const [activeCategory, setActiveCategory] = useState('Hepsi');

    const filteredProjects = activeCategory === 'Hepsi'
        ? portfolioData
        : portfolioData.filter(project => project.categories.includes(activeCategory));

    return (
        <section id="portfolio" className="bg-white section-padding">
            <div className="container mx-auto px-6">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Portfolyom</h2>
                    <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="max-w-3xl mx-auto text-foreground">
                        Öğrenci olarak tasarım ve geliştirme becerilerimi gösteren bazı projelerim.

                    </p>
                </motion.div>

                <div className="mb-10">
                    <motion.ul
                        className="flex flex-wrap justify-center gap-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {portfolioCategories.map((category, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => setActiveCategory(category)}
                                    className={cn(
                                        "px-6 py-2 font-accent font-medium rounded-full transition",
                                        activeCategory === category
                                            ? "bg-accent text-white"
                                            : "bg-muted text-foreground hover:bg-muted/70"
                                    )}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </motion.ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <PortfolioItem
                                image={project.image}
                                title={project.title}
                                categories={project.categories} // düzeltildi
                                link={project.link}
                                description={project.description} // EKLENDİ
                            />
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;