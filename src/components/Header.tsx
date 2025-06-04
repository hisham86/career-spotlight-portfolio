
import { useState, useEffect } from 'react';
import { Menu, X, Download, FileText, ChevronDown } from 'lucide-react';
import AnimatedLogo from './ui/AnimatedLogo';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

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
  ];

  const toolsLinks = [
    { name: 'Download Samples', href: '#', action: handleOpenWorkSamples },
    { name: 'My CV', href: '#', action: handleDownloadCV },
    { name: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/hishamcato' },
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
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            <AnimatedLogo />
            <span className="text-xl font-bold">Hisham</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuLink
                      href={link.href}
                      className={`text-sm font-medium transition-colors duration-200 px-4 py-2 ${
                        isScrolled 
                          ? 'text-gray-900 hover:text-primary' 
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`text-sm font-medium transition-colors duration-200 bg-transparent ${
                      isScrolled 
                        ? 'text-gray-900 hover:text-primary' 
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Tools
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      {toolsLinks.map((tool) => (
                        <NavigationMenuLink
                          key={tool.name}
                          href={tool.href}
                          onClick={tool.action}
                          target={tool.href.startsWith('http') ? '_blank' : undefined}
                          className="block px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          {tool.name}
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#contact"
                    className={`text-sm font-medium transition-colors duration-200 px-4 py-2 ${
                      isScrolled 
                        ? 'text-gray-900 hover:text-primary' 
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a
              href="#contact"
              className="btn-primary text-sm"
            >
              Get in Touch
            </a>
          </nav>
          
          <button
            className={`md:hidden p-2 ${
              isScrolled ? 'text-gray-900' : 'text-white'
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
                className="text-gray-900 hover:text-primary py-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <div className="border-t pt-4">
              <h3 className="text-gray-600 font-medium mb-2">Tools</h3>
              {toolsLinks.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  onClick={() => {
                    if (tool.action) tool.action();
                    setIsMobileMenuOpen(false);
                  }}
                  target={tool.href.startsWith('http') ? '_blank' : undefined}
                  className="block text-gray-700 hover:text-primary py-1 transition-colors duration-200 ml-4"
                >
                  {tool.name}
                </a>
              ))}
            </div>
            
            <a
              href="#contact"
              className="text-gray-900 hover:text-primary py-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            
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
