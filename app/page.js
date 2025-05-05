import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import AnimeLover from './components/AnimeLover';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <About />
      <Skills />
      <AnimeLover />
      <Contact />
    </main>
  );
}