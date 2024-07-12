import './App.css';
import React from 'react';
import ThemedComponent from './components/UseContext';   
import { ThemeProvider } from './components/ThemeContext'; 

const App = () => {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
};

export default App;