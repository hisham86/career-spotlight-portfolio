
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RevenueDashboard from '@/components/RevenueDashboard';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Hisham - Senior Product Manager";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="revenue-impact">
          <RevenueDashboard />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
