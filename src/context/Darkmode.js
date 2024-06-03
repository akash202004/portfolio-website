"use client"
import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkmode, setDarkmode] = useState(false);

    const darkModeButton = () => {
        setDarkmode(!darkmode);
    };

    return (
        <DarkModeContext.Provider value={{ darkmode, darkModeButton }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export const useDarkMode = () => {
    return useContext(DarkModeContext);
}