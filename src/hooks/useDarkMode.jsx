import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const mode = localStorage.getItem('dark-mode');
        return mode ? JSON.parse(mode) : false;
    });

    useEffect(() => {
        const className = 'dark';
        const html = document.documentElement;

        if (isDarkMode) {
            html.classList.add(className);
            localStorage.setItem('dark-mode', true);
        } else {
            html.classList.remove(className);
            localStorage.setItem('dark-mode', false);
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
