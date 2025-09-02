'use client';

import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  mounted: false
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Force clear any existing theme and default to light
    if (typeof window !== 'undefined') {
      // Clear localStorage theme
      localStorage.removeItem('theme');
      
      // Remove any existing theme classes from HTML element
      const root = window.document.documentElement;
      root.classList.remove('dark', 'light');
      root.classList.add('light');
      
      // Set theme to light
      setTheme('light');
      localStorage.setItem('theme', 'light');
      
      console.log('ThemeContext: Forced light mode, HTML classes:', root.classList.toString());
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    
    // Remove any existing theme classes
    root.classList.remove('dark', 'light');
    
    // Apply the current theme
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.add('light');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    console.log('ThemeContext: Theme changed to', theme, 'HTML classes:', root.classList.toString());
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log('ThemeContext: Toggling theme from', prevTheme, 'to', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
