
import { ArrowDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#experience" className="text-primary hover:text-primary/90 transition-colors">
        <ArrowDown />
      </a>
    </div>
  );
};

export default ScrollIndicator;
