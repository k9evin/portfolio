import Head from 'next/head';
import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Background } from '../components/Background';
import BackToTop from '../components/BackToTop';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-none">
      <Background />

      <Head>
        <title>Mingkai Pang</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <BackToTop />
    </div>
  );
}
