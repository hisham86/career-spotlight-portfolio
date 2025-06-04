
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GroceryListGenerator from '@/components/GroceryListGenerator';
import Receipt from '@/components/Receipt';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

interface GroceryItem {
  id: string;
  name: string;
  completed: boolean;
  unit?: string;
  emoji?: string;
}

const GroceryList = () => {
  // Demo items to show how the list looks
  const demoItems: GroceryItem[] = [
    { id: 'demo-1', name: 'Avocado', completed: false, emoji: '🥑' },
    { id: 'demo-2', name: 'Bread', completed: true, emoji: '🍞' },
    { id: 'demo-3', name: 'Milk', completed: false, emoji: '🥛' },
    { id: 'demo-4', name: 'Banana', completed: false, emoji: '🍌' },
  ];

  const [items, setItems] = useState<GroceryItem[]>(demoItems);
  const [isDemo, setIsDemo] = useState(true);

  const addMultipleItems = (itemsData: { name: string; emoji: string }[]) => {
    // Clear demo items when user adds their first real items
    if (isDemo) {
      setIsDemo(false);
    }
    
    const newItems: GroceryItem[] = itemsData.map((itemData, index) => ({
      id: (Date.now() + index).toString(),
      name: itemData.name.trim(),
      completed: false,
      emoji: itemData.emoji,
    }));
    
    // If demo mode, replace demo items, otherwise append to existing items
    setItems(isDemo ? newItems : [...items, ...newItems]);
  };

  const clearList = () => {
    setItems([]);
    setIsDemo(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container max-w-2xl mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Grocery List</h1>
            <p className="text-muted-foreground">
              Create & share visual grocery list.
            </p>
          </div>

          {isDemo && items.length > 0 && (
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground bg-blue-50 border border-blue-200 rounded-lg p-3">
                📋 This is a preview of how your grocery list will look. Add your items below to get started!
              </p>
            </div>
          )}

          <Receipt items={items} />
          
          {items.length > 0 && !isDemo && (
            <div className="flex justify-center mb-6">
              <Button 
                variant="outline" 
                onClick={clearList}
                className="flex items-center gap-2"
              >
                <Trash2 size={16} />
                Clear List
              </Button>
            </div>
          )}

          <GroceryListGenerator onAddItems={addMultipleItems} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GroceryList;
