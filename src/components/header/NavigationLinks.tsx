
import { NavigationMenuItem, NavigationMenuLink } from '../ui/navigation-menu';

interface NavigationLinksProps {
  isScrolled: boolean;
}

const NavigationLinks = ({ isScrolled }: NavigationLinksProps) => {
  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <>
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
    </>
  );
};

export default NavigationLinks;
