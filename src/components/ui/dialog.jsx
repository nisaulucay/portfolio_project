import React from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

const Dialog = ({ children, open, onOpenChange }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <div className="fixed inset-0" onClick={() => onOpenChange(false)} />
            {children}
        </div>
    );
};

const DialogContent = ({ children, className, ...props }) => {
    return (
        <div
            className={cn(
                "bg-background rounded-lg border shadow-lg sm:max-w-md md:max-w-lg w-full max-h-[90vh] overflow-auto animate-in fade-in-90 slide-in-from-bottom-10 sm:zoom-in-90 sm:slide-in-from-bottom-0",
                className
            )}
            {...props}
        >
            <div className="absolute right-4 top-4">
                <button
                    className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onClick={() => props.onPointerDown && props.onPointerDown()}
                >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </button>
            </div>
            {children}
        </div>
    );
};

const DialogHeader = ({
                          className,
                          ...props
                      }) => (
    <div
        className={cn("flex flex-col space-y-1.5 text-left", className)}
        {...props}
    />
);

const DialogTitle = ({
                         className,
                         ...props
                     }) => (
    <h3
        className={cn(
            "text-lg font-semibold leading-none tracking-tight",
            className
        )}
        {...props}
    />
);

export { Dialog, DialogContent, DialogHeader, DialogTitle };
export const DialogDescription = ({ children }) => (
    <p className="text-sm text-muted-foreground">{children}</p>
);