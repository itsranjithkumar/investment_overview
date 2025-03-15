// /home/ranjithkumar/ranjith_repos/investment_overview/my-project/app/components/theme-provider.tsx

"use client"; // Add this line at the top

import React, { createContext, useContext, useState } from 'react';

// Define a context for the theme
const ThemeContext = createContext({});

// Create a provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState('light'); // Default theme

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context
export const useTheme = () => {
    return useContext(ThemeContext);
};