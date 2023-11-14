'use client';
import React, { useEffect } from 'react';
import { useState, createContext, useContext } from 'react';
import type { Theme } from '@/lib/types';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type themeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const themeContext = createContext<themeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme:dark').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, [theme, setTheme]);

  return (
    <themeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(themeContext);
  if (context === null) {
    throw new Error(
      'useThemeContext must be used within a themeContextProvider'
    );
  }
  return context;
}
