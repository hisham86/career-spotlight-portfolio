
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
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
    { name: 'Grocery List', href: '/tools/grocery-list' },
    { name: 'Download Samples', href: '#', action: handleOpenWorkSamples },
    { name: 'My CV', href: '#', action: handleDownloadCV },
    { name: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/hishamcato' },
  ];

  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md py-4 px-6 animate-fade-in">
      <nav className="flex flex-col space-y-4">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-900 hover:text-primary py-2 transition-colors duration-200"
            onClick={onClose}
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
                onClose();
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
          onClick={onClose}
        >
          Contact
        </a>
        
        <a
          href="#contact"
          className="btn-primary inline-flex justify-center"
          onClick={onClose}
        >
          Get in Touch
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
