import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface ReceiptItem {
  id: string;
  name: string;
  completed: boolean;
  unit?: string;
}

interface ReceiptProps {
  items: ReceiptItem[];
}

const Receipt = ({ items }: ReceiptProps) => {
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

  const getItemEmoji = (itemName: string): string => {
    const name = itemName.toLowerCase();
    
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
      
      <div className="p-4 pt-6 space-y-2 text-black">
        {/* Receipt Header */}
        <div className="text-center text-xs">
          <div className="font-bold">GROCERY LIST</div>
          <div>*********************</div>
          <div>{currentDate} {dayName} {currentTime}</div>
        </div>
        
        <Separator className="my-2" />
        
        {/* Items List */}
        <div className="space-y-1">
          {items.map((item, index) => (
            <div key={item.id} className="text-xs flex justify-between items-center">
              <span className={`flex-1 ${item.completed ? 'line-through text-gray-500' : ''}`}>
                {String(index + 1).padStart(2, '0')}. {getItemEmoji(item.name)} {item.name}{item.unit ? ` x ${item.unit}` : ''}
              </span>
              <span className="ml-2">
                {item.completed ? '✓' : '○'}
              </span>
            </div>
          ))}
        </div>
        
        <Separator className="my-2" />
        
        {/* Receipt Footer */}
        <div className="text-center text-xs space-y-1 pb-2">
          <div>*********************</div>
          <div>TOTAL ITEMS: {items.length}</div>
          <div>*********************</div>
          <div className="text-gray-600">If not sure, ask.</div>
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
