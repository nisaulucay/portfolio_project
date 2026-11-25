import { useState } from 'react';
import * as LucideIcons from 'lucide-react';

const PortfolioItem = ({ image, iconName, title, categories, link, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const IconComponent = (LucideIcons)[iconName] || LucideIcons.Code;

    const Visual = ({ className }) => image ? (
        <img src={image} alt={title} className={className} />
    ) : (
        <div className={`${className} bg-gradient-to-br from-[#f6eee3] via-[#e3d5cc] to-[#d8c3b9] flex flex-col items-center justify-center text-[#4a3f35] p-6 text-center`}>
            <IconComponent size={48} />
            <span className="mt-3 font-semibold">{title}</span>
        </div>
    );

    const categoriesText = Array.isArray(categories)
        ? categories.join(', ')
        : categories || '';

    return (
        <>
            {/* KART */}
            <div className="relative group w-full max-w-md mx-auto rounded-xl shadow overflow-hidden">
                <Visual className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div
                    className="absolute inset-0 bg-[#f6eee3]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4"
                >
                    <h3 className="text-lg font-semibold text-[#4a3f35] mb-1">{title}</h3>
                    <p className="text-sm text-[#6b5e54] mb-1">{categoriesText}</p>
                    <p className="text-xs text-[#7a6e60] mb-3">{description}</p>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-[#d8c3b9] hover:bg-[#e3d5cc] text-[#4a3f35] font-medium text-sm px-4 py-1 rounded-full shadow"
                    >
                        Detaylar
                    </button>
                </div>
            </div>

            {/* MODAL */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#fff9f4] rounded-xl p-6 w-full max-w-lg relative shadow-xl border border-[#e3d5cc]">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-[#a38979] hover:text-black text-xl"
                        >
                            ×
                        </button>
                        <Visual className="w-full h-48 object-cover rounded mb-4" />
                        <h2 className="text-xl font-bold text-[#4a3f35] mb-2">{title}</h2>
                        <p className="text-sm text-[#6b5e54] mb-2">{categoriesText}</p>
                        <p className="text-sm text-[#7a6e60] mb-4">{description}</p>

                        {link && link.trim() !== "" ? (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#b2846c] underline hover:text-[#d29d84] transition"
                            >
                                {link.endsWith(".pdf") ? "PDF'yi Görüntüle" : "GitHub Linkine Git"}
                            </a>
                        ) : null}

                    </div>
                </div>
            )}
        </>
    );
};

export default PortfolioItem;





