// src/lib/queryClient.js
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3, // Başarısız sorgularda 3 defa yeniden dene
            staleTime: 5 * 60 * 1000, // 5 dakika
        },
    },
});
