import React from 'react';
import * as LucideIcons from 'lucide-react';

const ServiceCard = ({ iconName, title, description }) => {
    // Dynamically load icon from Lucide based on iconName
    const IconComponent = (LucideIcons)[iconName] || LucideIcons.Circle;

    return (
        <div className="bg-white rounded-xl shadow-md p-8 transition duration-300 hover:shadow-lg h-full">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <div className="text-accent text-2xl">
                    <IconComponent size={24} />
                </div>
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">{title}</h3>
            <p className="text-foreground leading-relaxed">{description}</p>
        </div>
    );
};

export default ServiceCard;