'use client';
import { useState, createContext, useContext } from 'react';
import type { Section } from '@/lib/types';

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type activeSectionContextType = {
  activeSection: Section;
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const activeSectionContext = createContext<activeSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<Section>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <activeSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </activeSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(activeSectionContext);
  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an activeSectionContextProvider'
    );
  }
  return context;
}
