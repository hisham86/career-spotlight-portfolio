
import { ArrowDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a 
        href="#experience" 
        className="flex flex-col items-center text-primary hover:text-primary/90 transition-colors"
        aria-label="Scroll to experience section"
      >
        <span className="text-xs font-medium mb-1 text-white/70">Explore</span>
        <ArrowDown className="text-primary" />
      </a>
    </div>
  );
};

export default ScrollIndicator;
