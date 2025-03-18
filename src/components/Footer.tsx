
import { Github, Heart, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import GlowingCircle from './ui/GlowingCircle';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-background border-t border-border relative">
      <GlowingCircle />
      
      <div className="container max-w-6xl mx-auto px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-4">Hisham</h3>
            <p className="text-muted-foreground mb-6">
              Senior Product Manager with a passion for creating innovative products that solve real problems.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://linkedin.com/in/hisham86" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/hisham86" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://x.com/Solo_Level_27" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Pages</h3>
            <ul className="space-y-2.5">
              <li><a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-muted-foreground mb-4">
              Ready to collaborate? Let's get in touch!
            </p>
            <a 
              href="mailto:hisham.mohamaf@gmail.com" 
              className="inline-flex items-center text-primary hover:underline"
            >
              <Mail size={18} className="mr-2" />
              hisham.mohamaf@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center gap-3 mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Hisham. All rights reserved.
            </p>
            <div className="flex items-center bg-black/5 backdrop-blur-sm px-3 py-1 rounded-full">
              <Heart size={14} className="text-amber-500 fill-amber-500 mr-1.5" />
              <span className="text-xs text-muted-foreground">
                Built by Hisham with <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Lovable</a>
              </span>
            </div>
          </div>
          
          <Button 
            onClick={scrollToTop}
            variant="ghost" 
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
