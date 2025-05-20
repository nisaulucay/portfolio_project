import { useState, useEffect } from 'react';

export function useScrollSpy(
    ids = [],
    options = { threshold: 0.4, rootMargin: '0px 0px -50% 0px' }
) {
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visibleSections.length > 0) {
                    setActiveId(visibleSections[0].target.id);
                }
            },
            {
                root: null,
                rootMargin: options.rootMargin,
                threshold: options.threshold,
            }
        );

        const elements = ids
            .map((id) => document.getElementById(id))
            .filter((el) => el !== null);

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, [ids, options.threshold, options.rootMargin]);

    return activeId;
}
