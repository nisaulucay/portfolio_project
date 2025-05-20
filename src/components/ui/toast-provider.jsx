import React from "react";
import { Toaster } from "sonner";

export const ToastProvider = ({ children }) => {
    return (
        <>
            {children}
            <Toaster position="bottom-right" richColors />
        </>
    );
};
