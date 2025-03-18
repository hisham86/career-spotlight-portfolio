
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
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center space-x-2 text-foreground font-medium"
          >
            <AnimatedLogo />
            <span className="text-xl font-bold">Hisham</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={handleDownload}
              variant="outline"
              size="sm"
              className="border-primary/40 text-primary hover:bg-primary/10 flex items-center gap-2"
            >
              <Download size={16} />
              Download Samples
            </Button>
            <Button
              onClick={handleDownloadCV}
              variant="outline"
              size="sm"
              className="border-orange-500/40 text-orange-400 hover:bg-orange-500/10 flex items-center gap-2"
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
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
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
                handleDownload();
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
