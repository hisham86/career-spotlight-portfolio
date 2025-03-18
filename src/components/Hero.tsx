
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ParticlesBackground from './hero/ParticlesBackground';
import HeroContent from './hero/HeroContent';
import ProfileImage from './hero/ProfileImage';
import ScrollIndicator from './hero/ScrollIndicator';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 pb-16 overflow-hidden">
      <ParticlesBackground />
      
      <div className="container max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <HeroContent />
          <ProfileImage />
        </div>
        
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
