
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface ReceiptItem {
  id: string;
  name: string;
  completed: boolean;
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
  
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

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
    <Card className="mb-6 bg-white shadow-sm max-w-xs mx-auto" style={{ fontFamily: 'monospace' }}>
      <div className="p-4 space-y-2">
        {/* Receipt Header */}
        <div className="text-center text-xs">
          <div className="font-bold">GROCERY LIST</div>
          <div>*********************</div>
          <div>{currentDate} {currentTime}</div>
        </div>
        
        <Separator className="my-2" />
        
        {/* Items List */}
        <div className="space-y-1">
          {items.map((item, index) => (
            <div key={item.id} className="text-xs flex justify-between items-center">
              <span className={`flex-1 ${item.completed ? 'line-through text-gray-400' : ''}`}>
                {String(index + 1).padStart(2, '0')}. {item.name}
              </span>
              <span className="ml-2">
                {item.completed ? '✓' : '○'}
              </span>
            </div>
          ))}
        </div>
        
        <Separator className="my-2" />
        
        {/* Receipt Footer */}
        <div className="text-center text-xs space-y-1">
          <div>*********************</div>
          <div>TOTAL ITEMS: {items.length}</div>
          <div>COMPLETED: {items.filter(item => item.completed).length}</div>
          <div>*********************</div>
          <div className="text-gray-500">Thank you for shopping!</div>
        </div>
      </div>
    </Card>
  );
};

export default Receipt;
