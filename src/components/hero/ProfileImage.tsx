
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ProfileImage = () => {
  const imageRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div 
      ref={imageRef}
      className="reveal-text flex-shrink-0 order-first md:order-last mx-auto md:mx-0"
    >
      <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-xl dark-glow">
        <img
          src="/lovable-uploads/5af4de58-0fa2-42c1-bb36-658229e9c51f.png"
          alt="Hisham - Senior Product Manager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 ring-4 ring-primary/20 rounded-full"></div>
        
        {/* Enhanced glow effect with orange theme */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/40 to-amber-500/40 rounded-full blur-xl opacity-60 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProfileImage;
