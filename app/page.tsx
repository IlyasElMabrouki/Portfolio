import About from '@/components/about';
import Application from '@/components/application';
import Contact from '@/components/contact';
import Divider from '@/components/divider';
import Essays from '@/components/essays';
import Experience from '@/components/experience';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Application />
      <Projects />
      <Skills />
      <Essays />
      <Experience />
      <Contact />
    </main>
  );
}
