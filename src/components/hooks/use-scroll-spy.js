import { useState, useLayoutEffect } from 'react';

export function useScrollSpy(
    ids,
    options = { threshold: 0.4, rootMargin: '0px 0px -20% 0px' }
) {
    const [activeId, setActiveId] = useState(ids[0] || null); // İlk aktif öğeyi belirliyoruz

    useLayoutEffect(() => {
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: options.rootMargin,
                threshold: options.threshold,
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => {
            elements.forEach((element) => observer.unobserve(element));
        };
    }, [ids, options.threshold, options.rootMargin]);

    return activeId;
}

