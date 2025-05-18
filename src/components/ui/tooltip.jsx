import React, { useState } from 'react';
import { cn } from '../../lib/utils';

const TooltipProvider = ({ children }) => {
    return <>{children}</>;
};

const Tooltip = ({ children, content, side = "top", align = "center", className }) => {
    const [isVisible, setIsVisible] = useState(false);

    const getPositionStyles = () => {
        const baseStyles = "absolute z-50 px-2 py-1 text-xs bg-foreground text-white rounded shadow-lg";
        const sideStyles = {
            top: "bottom-full mb-1",
            bottom: "top-full mt-1",
            left: "right-full mr-1",
            right: "left-full ml-1"
        };

        const alignStyles = {
            start: side === "top" || side === "bottom"
                ? "left-0"
                : "top-0",
            center: side === "top" || side === "bottom"
                ? "left-1/2 -translate-x-1/2"
                : "top-1/2 -translate-y-1/2",
            end: side === "top" || side === "bottom"
                ? "right-0"
                : "bottom-0",
        };

        return cn(baseStyles, sideStyles[side], alignStyles[align], className);
    };

    return (
        <div className="relative inline-block" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            {children}
            {isVisible && (
                <div className={getPositionStyles()}>
                    {content}
                </div>
            )}
        </div>
    );
};

export { Tooltip, TooltipProvider };