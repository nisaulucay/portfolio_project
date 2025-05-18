import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const toast = ({ title, description, variant = 'default', duration = 5000 }) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prevToasts) => [...prevToasts, { id, title, description, variant, duration }]);

        setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
        }, duration);
    };

    return (
        <ToastContext.Provider value={{ toast, toasts }}>
            {children}
            <div className="fixed bottom-0 right-0 p-6 z-50 flex flex-col gap-2">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`rounded-lg shadow-lg p-4 animate-in slide-in-from-right ${
                            toast.variant === 'default' ? 'bg-white' :
                                toast.variant === 'success' ? 'bg-green-50 border-l-4 border-green-500' :
                                    toast.variant === 'error' ? 'bg-red-50 border-l-4 border-red-500' :
                                        'bg-white'
                        }`}
                    >
                        {toast.title && <div className="font-semibold">{toast.title}</div>}
                        {toast.description && <div className="text-sm text-gray-600">{toast.description}</div>}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}