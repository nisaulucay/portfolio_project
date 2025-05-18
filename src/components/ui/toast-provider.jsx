// src/components/ui/toast-provider.jsx
import React from "react";
import { Toaster } from "sonner"; // Toaster buradan gelir, doğru import bu

export const ToastProvider = ({ children }) => {
    return (
        <>
            {children}
            <Toaster position="bottom-right" richColors />
        </>
    );
};
