import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ServiceGrid } from './components/sections/ServiceGrid';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { BuildScaleGrow } from './components/sections/BuildScaleGrow';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Chatbot } from './components/layout/Chatbot';
import { LetsTalkModal } from './components/ui/LetsTalkModal';

function App() {
  const [isLetsTalkOpen, setIsLetsTalkOpen] = useState(false);

  useEffect(() => {
    // Show modal shortly after initial page load
    const timer = setTimeout(() => setIsLetsTalkOpen(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar onLetsTalkClick={() => setIsLetsTalkOpen(true)} />
      <main>
        <Hero />
        <ServiceGrid />
        <ProcessTimeline />
        <BuildScaleGrow />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <LetsTalkModal isOpen={isLetsTalkOpen} onClose={() => setIsLetsTalkOpen(false)} />
    </div>
  );
}

export default App;
