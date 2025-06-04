
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '../ui/navigation-menu';

interface ToolsDropdownProps {
  isScrolled: boolean;
}

const ToolsDropdown = ({ isScrolled }: ToolsDropdownProps) => {
  const handleOpenWorkSamples = () => {
    window.open('https://drive.google.com/drive/folders/1nqIe5G0wnzvvyL5pGBrdr30f-Q7Nq4Pn?usp=sharing', '_blank');
  };
  
  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/17FLfdEeSbjm6C6WwRI3zLcMKLQqRJjO9/view?usp=sharing', '_blank');
  };

  const toolsLinks = [
    { name: 'Grocery List', href: '/tools/grocery-list' },
    { name: 'Download Samples', href: '#', action: handleOpenWorkSamples },
    { name: 'My CV', href: '#', action: handleDownloadCV },
    { name: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/hishamcato' },
  ];

  return (
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
      <NavigationMenuContent className="absolute left-0 top-full mt-2 z-50">
        <div className="w-48 p-2 bg-white border border-gray-200 shadow-xl rounded-md z-50">
          {toolsLinks.map((tool) => (
            <NavigationMenuLink
              key={tool.name}
              href={tool.href}
              onClick={tool.action}
              target={tool.href.startsWith('http') ? '_blank' : undefined}
              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors font-medium"
            >
              {tool.name}
            </NavigationMenuLink>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ToolsDropdown;
