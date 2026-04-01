import { useState, useEffect } from 'react';

export const useOrbitTheme = () => {
    // 1. Initialize state from localStorage, defaulting to 'system'
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('orbit-theme') || 'system';
    });

    useEffect(() => {
        const root = window.document.body;
        
        // 2. Define the handler that actually applies the CSS classes
        const applyTheme = () => {
            let themeToApply = theme;

            // 3. Logic for 'system' preference
            if (theme === 'system') {
                themeToApply = window.matchMedia('(prefers-color-scheme: dark)').matches 
                    ? 'dark' 
                    : 'light';
            }

            // 4. Update the DOM classes
            root.classList.remove('light-theme', 'dark-theme');
            root.classList.add(`${themeToApply}-theme`);
            
            // Optional: Also set a data attribute for easier CSS targeting
            root.setAttribute('data-theme', themeToApply);
        };

        applyTheme();
        localStorage.setItem('orbit-theme', theme);

        // 5. If 'system', listen for OS-level changes while the app is open
        if (theme === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = () => applyTheme();
            
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        }
    }, [theme]);

    return { theme, setTheme };
};