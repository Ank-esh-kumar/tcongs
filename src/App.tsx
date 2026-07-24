import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ServiceGrid } from './components/sections/ServiceGrid';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { BuildScaleGrow } from './components/sections/BuildScaleGrow';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Chatbot } from './components/layout/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
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
    </div>
  );
}

export default App;
