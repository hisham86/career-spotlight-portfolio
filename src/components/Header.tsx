
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AnimatedLogo from './ui/AnimatedLogo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';
import NavigationLinks from './header/NavigationLinks';
import ToolsDropdown from './header/ToolsDropdown';
import MobileMenu from './header/MobileMenu';

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
                <NavigationLinks isScrolled={isScrolled} />
                <ToolsDropdown isScrolled={isScrolled} />
                
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
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
};

export default Header;
