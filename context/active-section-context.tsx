"use client"
import { useState, createContext } from 'react';
import { links } from '@/lib/data';

type Section = (typeof links)[number]['name'];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type activeSectionContextType = {
  activeSection: Section;
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>;
};

const activeSectionContext = createContext<activeSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<Section>('Home');
  return (
    <activeSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </activeSectionContext.Provider>
  );
}
