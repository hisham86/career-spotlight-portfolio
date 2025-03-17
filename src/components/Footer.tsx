
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-12 bg-foreground text-white">
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <h3 className="text-2xl font-bold">Hisham</h3>
              <div className="h-8 w-px bg-white/20 hidden md:block" />
              <p className="text-white/80">Senior Product Manager</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://linkedin.com/in/hisham86" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:hisham@example.com" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Mail size={18} />
            </a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hisham. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
