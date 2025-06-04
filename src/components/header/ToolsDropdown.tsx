import { useState } from 'react';

interface ToolsDropdownProps {
  isScrolled: boolean;
}

const ToolsDropdown = ({ isScrolled }: ToolsDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWorkSamples = () => {
    window.open('https://drive.google.com/drive/folders/1nqIe5G0wnzvvyL5pGBrdr30f-Q7Nq4Pn?usp=sharing', '_blank');
    setIsOpen(false);
  };
  
  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/17FLfdEeSbjm6C6WwRI3zLcMKLQqRJjO9/view?usp=sharing', '_blank');
    setIsOpen(false);
  };

  const toolsLinks = [
    { name: 'Grocery List', href: 'https://h16d.com/grocery' },
    { name: 'Download Samples', href: '#', action: handleOpenWorkSamples },
    { name: 'My CV', href: '#', action: handleDownloadCV },
    { name: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/hishamcato' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`text-sm font-medium transition-colors duration-200 bg-transparent px-4 py-2 ${
          isScrolled 
            ? 'text-gray-900 hover:text-primary' 
            : 'text-white/80 hover:text-white'
        }`}
      >
        Tools
        <svg className="w-2.5 h-2.5 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-xl rounded-md z-50">
            <div className="p-2">
              {toolsLinks.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  onClick={(e) => {
                    if (tool.action) {
                      e.preventDefault();
                      tool.action();
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  target={tool.href.startsWith('http') ? '_blank' : undefined}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors font-medium"
                >
                  {tool.name}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ToolsDropdown;
