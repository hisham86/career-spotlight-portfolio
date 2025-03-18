
import { useState, useEffect } from 'react';
import { Menu, X, Download, FileText } from 'lucide-react';
import AnimatedLogo from './ui/AnimatedLogo';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleOpenWorkSamples = () => {
    window.open('https://drive.google.com/drive/folders/1nqIe5G0wnzvvyL5pGBrdr30f-Q7Nq4Pn?usp=sharing', '_blank');
  };
  
  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/17FLfdEeSbjm6C6WwRI3zLcMKLQqRJjO9/view?usp=sharing', '_blank');
  };
  
  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className={`flex items-center space-x-2 font-medium ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            <AnimatedLogo />
            <span className="text-xl font-bold">Hisham</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-foreground/80 hover:text-primary' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={handleOpenWorkSamples}
              variant="outline"
              size="sm"
              className={`border-primary/40 text-primary hover:bg-primary/10 flex items-center gap-2 ${
                isScrolled ? 'bg-white/50' : ''
              }`}
            >
              <Download size={16} />
              Download Samples
            </Button>
            <Button
              onClick={handleDownloadCV}
              variant="outline"
              size="sm"
              className={`border-orange-500/40 text-orange-400 hover:bg-orange-500/10 flex items-center gap-2 ${
                isScrolled ? 'bg-white/50' : ''
              }`}
            >
              <FileText size={16} />
              My CV
            </Button>
            <a
              href="#contact"
              className="btn-primary text-sm"
            >
              Get in Touch
            </a>
          </nav>
          
          <button
            className={`md:hidden p-2 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary py-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => {
                handleOpenWorkSamples();
                setIsMobileMenuOpen(false);
              }}
              variant="outline"
              className="border-primary/40 text-primary hover:bg-primary/10 flex items-center gap-2 justify-center"
            >
              <Download size={16} />
              Download My Work Samples
            </Button>
            <Button
              onClick={() => {
                handleDownloadCV();
                setIsMobileMenuOpen(false);
              }}
              variant="outline"
              className="border-orange-500/40 text-orange-400 hover:bg-orange-500/10 flex items-center gap-2 justify-center"
            >
              <FileText size={16} />
              My Updated CV
            </Button>
            <a
              href="#contact"
              className="btn-primary inline-flex justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
