
import { useEffect, useState } from 'react';

type PageView = {
  path: string;
  timestamp: number;
  referrer: string;
};

type UserInteraction = {
  type: 'click' | 'scroll' | 'section_view';
  target: string;
  timestamp: number;
};

const Analytics = () => {
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [interactions, setInteractions] = useState<UserInteraction[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Track page view on component mount
  useEffect(() => {
    const newPageView = {
      path: window.location.pathname,
      timestamp: Date.now(),
      referrer: document.referrer
    };
    
    setPageViews(prev => [...prev, newPageView]);
    console.log('Page view recorded:', newPageView);
    
    // Set up scroll tracking
    const handleScroll = () => {
      // Throttle to avoid too many events
      if (!window.scrollTrackTimeout) {
        window.scrollTrackTimeout = setTimeout(() => {
          // Get current visible section
          const sections = document.querySelectorAll('section[id]');
          let currentSection = '';
          
          sections.forEach(section => {
            const sectionTop = (section as HTMLElement).offsetTop;
            const sectionHeight = (section as HTMLElement).offsetHeight;
            if (
              window.scrollY >= (sectionTop - 200) && 
              window.scrollY < (sectionTop + sectionHeight - 200)
            ) {
              currentSection = section.id;
            }
          });
          
          if (currentSection) {
            trackInteraction('section_view', currentSection);
          }
          
          window.scrollTrackTimeout = null;
        }, 1000);
      }
    };
    
    // Set up click tracking
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        let targetInfo = target.innerText || 'unknown';
        if (target.tagName === 'A' && (target as HTMLAnchorElement).href) {
          targetInfo = `link:${(target as HTMLAnchorElement).href}`;
        }
        trackInteraction('click', targetInfo);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      if (window.scrollTrackTimeout) {
        clearTimeout(window.scrollTrackTimeout);
      }
    };
  }, []);
  
  const trackInteraction = (type: 'click' | 'scroll' | 'section_view', target: string) => {
    const newInteraction = {
      type,
      target,
      timestamp: Date.now()
    };
    
    setInteractions(prev => {
      // Limit size to prevent memory issues
      const updated = [...prev, newInteraction].slice(-100);
      console.log('User interaction recorded:', newInteraction);
      return updated;
    });
  };
  
  // Format timestamp to readable format
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };
  
  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white rounded-full p-3 shadow-lg z-50 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Show Analytics"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"></path>
          <path d="M18 17V9"></path>
          <path d="M13 17V5"></path>
          <path d="M8 17v-3"></path>
        </svg>
      </button>
    );
  }
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[80vh] overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Real-time Analytics</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-800"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Page Views ({pageViews.length})</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-3 text-left text-gray-800">Time</th>
                      <th className="py-2 px-3 text-left text-gray-800">Path</th>
                      <th className="py-2 px-3 text-left text-gray-800">Referrer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageViews.map((view, i) => (
                      <tr key={i} className="border-t">
                        <td className="py-2 px-3 text-gray-800">{formatTime(view.timestamp)}</td>
                        <td className="py-2 px-3 text-gray-800">{view.path}</td>
                        <td className="py-2 px-3 truncate max-w-[150px] text-gray-800">{view.referrer || 'Direct'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">User Interactions ({interactions.length})</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-3 text-left text-gray-800">Time</th>
                      <th className="py-2 px-3 text-left text-gray-800">Type</th>
                      <th className="py-2 px-3 text-left text-gray-800">Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    {interactions.map((interaction, i) => (
                      <tr key={i} className="border-t">
                        <td className="py-2 px-3 text-gray-800">{formatTime(interaction.timestamp)}</td>
                        <td className="py-2 px-3 text-gray-800">{interaction.type}</td>
                        <td className="py-2 px-3 truncate max-w-[200px] text-gray-800">{interaction.target}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-6">
            <button 
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
