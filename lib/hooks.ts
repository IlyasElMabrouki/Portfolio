import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import type { Section } from '@/lib/types';

export function useSectionInView(activeSection: Section, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(activeSection);
  }, [inView, setActiveSection, timeOfLastClick, activeSection]);

  return {
    ref,
  };
}
