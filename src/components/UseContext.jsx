import React, { useEffect } from 'react';
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div>
            <h1>{theme === 'light' ? 'Tema Claro' : 'Tema Escuro'}</h1>
            <button onClick={toggleTheme}>
                Alternar para {theme === 'light' ? 'Escuro' : 'Claro'}
            </button>
        </div>
    );
};

export default ThemedComponent;