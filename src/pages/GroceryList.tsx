
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GroceryListGenerator from '@/components/GroceryListGenerator';
import Receipt from '@/components/Receipt';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface GroceryItem {
  id: string;
  name: string;
  emoji?: string;
  unit?: string;
  completed: boolean;
}

interface ItemWithEmoji {
  name: string;
  emoji?: string;
  unit?: string;
}

const GroceryList = () => {
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [quickInput, setQuickInput] = useState('');

  const addMultipleItems = (itemsWithEmoji: ItemWithEmoji[]) => {
    const newItems: GroceryItem[] = itemsWithEmoji.map((item, index) => ({
      id: (Date.now() + index).toString(),
      name: item.name.trim(),
      emoji: item.emoji,
      unit: item.unit,
      completed: false
    }));
    setItems([...items, ...newItems]);
  };

  const handleQuickAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && quickInput.trim()) {
      const newItem: GroceryItem = {
        id: Date.now().toString(),
        name: quickInput.trim(),
        emoji: '📦',
        unit: '',
        completed: false
      };
      setItems([...items, newItem]);
      setQuickInput('');
    }
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

          <Receipt items={items} />
          
          <Card className="mb-6">
            <CardContent className="p-4">
              <Input
                placeholder="Type an item and press Enter to add..."
                value={quickInput}
                onChange={(e) => setQuickInput(e.target.value)}
                onKeyDown={handleQuickAdd}
                className="w-full"
              />
            </CardContent>
          </Card>

          <GroceryListGenerator onAddItems={addMultipleItems} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GroceryList;
