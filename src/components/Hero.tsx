
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ParticlesBackground from './hero/ParticlesBackground';
import HeroContent from './hero/HeroContent';
import ProfileImage from './hero/ProfileImage';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-8 overflow-hidden">
      <ParticlesBackground />
      
      <div className="container max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <HeroContent />
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
