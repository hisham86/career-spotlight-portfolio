import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Copy, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

interface ReceiptItem {
  id: string;
  name: string;
  completed: boolean;
  unit?: string;
  emoji?: string;
}

interface ReceiptProps {
  items: ReceiptItem[];
}

const Receipt = ({ items }: ReceiptProps) => {
  const { toast } = useToast();
  const receiptRef = useRef<HTMLDivElement>(null);
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });
  
  const dayName = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
  }).toUpperCase();
  
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const getItemEmoji = (item: ReceiptItem): string => {
    // If item already has an emoji, use it
    if (item.emoji) {
      return item.emoji;
    }

    // Fallback to name-based emoji detection
    const name = item.name.toLowerCase();
    
    // Fruits
    if (name.includes('apple')) return '🍎';
    if (name.includes('banana')) return '🍌';
    if (name.includes('orange')) return '🍊';
    if (name.includes('avocado')) return '🥑';
    if (name.includes('grape')) return '🍇';
    if (name.includes('strawberry')) return '🍓';
    if (name.includes('lemon')) return '🍋';
    if (name.includes('watermelon')) return '🍉';
    if (name.includes('pineapple')) return '🍍';
    if (name.includes('peach')) return '🍑';
    
    // Vegetables
    if (name.includes('carrot')) return '🥕';
    if (name.includes('tomato')) return '🍅';
    if (name.includes('lettuce') || name.includes('salad')) return '🥬';
    if (name.includes('broccoli')) return '🥦';
    if (name.includes('potato')) return '🥔';
    if (name.includes('onion')) return '🧅';
    if (name.includes('pepper')) return '🌶️';
    if (name.includes('corn')) return '🌽';
    if (name.includes('cucumber')) return '🥒';
    if (name.includes('eggplant')) return '🍆';
    
    // Dairy & Protein
    if (name.includes('milk')) return '🥛';
    if (name.includes('cheese')) return '🧀';
    if (name.includes('egg')) return '🥚';
    if (name.includes('chicken')) return '🐔';
    if (name.includes('beef')) return '🥩';
    if (name.includes('fish')) return '🐟';
    
    // Grains & Bread
    if (name.includes('bread')) return '🍞';
    if (name.includes('rice')) return '🍚';
    if (name.includes('pasta')) return '🍝';
    
    // Default grocery icon
    return '🛒';
  };

  const copyReceiptToClipboard = async () => {
    if (items.length === 0) {
      toast({
        title: "Empty list",
        description: "Add some items to your grocery list first!",
      });
      return;
    }

    const textReceipt = `🛒 GROCERY LIST
*********************
${currentDate} ${dayName} ${currentTime}

${items.map((item, index) => {
  const nameParts = item.name.split(' ');
  const hasUnit = nameParts.length > 1 && /^\d/.test(nameParts[0]);
  const unit = hasUnit ? nameParts[0] : '';
  const itemName = hasUnit ? nameParts.slice(1).join(' ') : item.name;
  
  return `${String(index + 1).padStart(2, '0')}. ${getItemEmoji(item)} ${itemName}${unit ? ` (${unit})` : ''} ${item.completed ? '✓' : '○'}`;
}).join('\n')}

*********************
TOTAL ITEMS: ${items.length}
*********************`;

    try {
      await navigator.clipboard.writeText(textReceipt);
      toast({
        title: "Copied!",
        description: "Grocery list copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const downloadReceiptAsImage = async () => {
    if (!receiptRef.current) {
      toast({
        title: "Download failed",
        description: "Unable to capture receipt",
        variant: "destructive",
      });
      return;
    }

    if (items.length === 0) {
      toast({
        title: "Empty list",
        description: "Add some items to your grocery list first!",
      });
      return;
    }

    try {
      const canvas = await html2canvas(receiptRef.current, {
        backgroundColor: '#ffffff',
        scale: 2, // Higher resolution
        useCORS: true,
      });
      
      // Convert to JPEG
      const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
      
      // Create download link
      const link = document.createElement('a');
      link.download = `grocery-list-${new Date().toISOString().split('T')[0]}.jpg`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Downloaded!",
        description: "Grocery list image saved to your device",
      });
    } catch (err) {
      toast({
        title: "Download failed",
        description: "Unable to generate image",
        variant: "destructive",
      });
    }
  };

  if (items.length === 0) {
    return (
      <Card className="mb-6 p-6 bg-white shadow-sm border-dashed border-2 border-gray-200">
        <div className="text-center text-gray-400">
          <div className="text-lg mb-2">📋</div>
          <p className="text-sm">Your grocery list will appear here</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="mb-6 bg-white shadow-sm max-w-xs mx-auto relative overflow-hidden" style={{ fontFamily: 'monospace' }}>
      {/* Perforated top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-white border-b-2 border-dotted border-gray-400" style={{
        backgroundImage: 'radial-gradient(circle, transparent 1px, white 1px)',
        backgroundSize: '4px 4px',
        borderBottom: '2px dotted #9ca3af'
      }}></div>
      
      <div ref={receiptRef} className="p-4 pt-6 space-y-2 text-black">
        {/* Receipt Header */}
        <div className="text-center text-xs">
          <div className="font-bold">GROCERY LIST</div>
          <div>*********************</div>
          <div>{currentDate} {dayName} {currentTime}</div>
        </div>
        
        <Separator className="my-2" />
        
        {/* Items List */}
        <div className="space-y-1">
          {items.map((item, index) => {
            // Extract unit from item name if it exists
            const nameParts = item.name.split(' ');
            const hasUnit = nameParts.length > 1 && /^\d/.test(nameParts[0]);
            const unit = hasUnit ? nameParts[0] : '';
            const itemName = hasUnit ? nameParts.slice(1).join(' ') : item.name;
            
            return (
              <div key={item.id} className="text-xs flex justify-between items-center">
                <span className={`flex-1 ${item.completed ? 'line-through text-gray-500' : ''}`}>
                  {String(index + 1).padStart(2, '0')}. {getItemEmoji(item)} {itemName}{unit ? ` (${unit})` : ''}
                </span>
                <span className="ml-2">
                  {item.completed ? '✓' : '○'}
                </span>
              </div>
            );
          })}
        </div>
        
        <Separator className="my-2" />
        
        {/* Receipt Footer */}
        <div className="text-center text-xs space-y-1 pb-2">
          <div>*********************</div>
          <div>TOTAL ITEMS: {items.length}</div>
          <div>*********************</div>
          <div className="text-gray-600">If not sure, ask.</div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-center gap-2 pt-2">
          <Button 
            variant="default" 
            size="sm" 
            onClick={copyReceiptToClipboard}
            className="flex items-center gap-2 text-xs bg-blue-600 hover:bg-blue-700 text-white border-none shadow-md"
          >
            <Copy size={12} />
            COPY
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            onClick={downloadReceiptAsImage}
            className="flex items-center gap-2 text-xs bg-green-600 hover:bg-green-700 text-white border-none shadow-md"
          >
            <Download size={12} />
            DOWNLOAD
          </Button>
        </div>
      </div>
      
      {/* Perforated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-white border-t-2 border-dotted border-gray-400" style={{
        backgroundImage: 'radial-gradient(circle, transparent 1px, white 1px)',
        backgroundSize: '4px 4px',
        borderTop: '2px dotted #9ca3af'
      }}></div>
    </Card>
  );
};

export default Receipt;
