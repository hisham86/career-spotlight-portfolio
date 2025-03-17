
import { ArrowDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Hero = () => {
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const subtitleRef = useScrollReveal<HTMLParagraphElement>({ threshold: 0.2 });
  const ctaRef = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="inline-block mb-4 px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full animate-fade-in">
            Senior Product Manager
          </p>
          
          <h1 
            ref={titleRef}
            className="reveal-text text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Crafting impactful products that shape the future of technology.
          </h1>
          
          <p 
            ref={subtitleRef}
            className="reveal-text text-lg md:text-xl text-foreground/80 max-w-2xl mb-8"
          >
            I'm Hisham, a product leader with a passion for creating user-centric experiences that drive business growth. Specializing in product strategy, UX design, and cross-functional team leadership.
          </p>
          
          <div 
            ref={ctaRef}
            className="reveal-text flex flex-wrap gap-4"
          >
            <a href="#experience" className="btn-primary">
              View My Experience
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#experience" className="text-primary/60 hover:text-primary transition-colors">
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
