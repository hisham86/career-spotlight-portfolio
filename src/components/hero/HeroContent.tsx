
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroContent = () => {
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const subtitleRef = useScrollReveal<HTMLParagraphElement>({ threshold: 0.2 });
  const ctaRef = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  const handleDownload = () => {
    // Create a link to download the file
    const link = document.createElement('a');
    link.href = '/portfolio-samples.pdf'; // This would be the path to your PDF file
    link.download = 'Hisham-Portfolio-Samples.pdf';
    link.click();
  };

  const handleDownloadCV = () => {
    // Create a link to download the CV file
    const link = document.createElement('a');
    link.href = '/hisham-cv.pdf'; // This would be the path to your CV PDF file
    link.download = 'Hisham-CV.pdf';
    link.click();
  };

  return (
    <div className="max-w-3xl">
      <p className="inline-block mb-4 px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full animate-fade-in backdrop-blur-sm border border-primary/20">
        Senior Product Manager
      </p>
      
      <h1 
        ref={titleRef}
        className="reveal-text text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 glow-text"
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
        <a 
          href="https://linkedin.com/in/hisham86" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex items-center gap-2"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          Connect via LinkedIn
        </a>
        <Button
          onClick={handleDownload}
          variant="outline"
          className="border-primary/40 text-primary hover:bg-primary/10 flex items-center gap-2"
        >
          <Download size={16} />
          Download My Work Samples
        </Button>
        <Button
          onClick={handleDownloadCV}
          variant="outline"
          className="border-orange-500/40 text-orange-400 hover:bg-orange-500/10 flex items-center gap-2"
        >
          <FileText size={16} />
          My Updated CV
        </Button>
        <a href="#contact" className="btn-outline border-orange-500/40 text-orange-400 hover:bg-orange-500/10">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
