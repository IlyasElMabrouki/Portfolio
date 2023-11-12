'use client';
import React from 'react';
import { useState, createContext, useContext } from 'react';
import type { Theme } from '@/lib/types';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type themeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const themeContext = createContext<themeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <themeContext.Provider
      value={{
        theme,
        setTheme,
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
