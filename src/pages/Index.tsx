import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CatalogSection from '@/components/sections/CatalogSection';
import AboutSection from '@/components/sections/AboutSection';
import FaqSection from '@/components/sections/FaqSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactsSection from '@/components/sections/ContactsSection';
import Footer from '@/components/Footer';

const SECTIONS = ['home', 'services', 'catalog', 'about', 'faq', 'blog', 'contacts'];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navigateTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavigate={navigateTo} />
      <main>
        <HeroSection onNavigate={navigateTo} />
        <ServicesSection />
        <CatalogSection />
        <AboutSection />
        <FaqSection />
        <BlogSection />
        <ContactsSection />
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
