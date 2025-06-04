
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GroceryListGenerator from '@/components/GroceryListGenerator';
import Receipt from '@/components/Receipt';

interface GroceryItem {
  id: string;
  name: string;
  completed: boolean;
}

const GroceryList = () => {
  const [items, setItems] = useState<GroceryItem[]>([]);

  const addMultipleItems = (itemNames: string[]) => {
    const newItems: GroceryItem[] = itemNames.map((name, index) => ({
      id: (Date.now() + index).toString(),
      name: name.trim(),
      completed: false
    }));
    setItems([...items, ...newItems]);
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
          <GroceryListGenerator onAddItems={addMultipleItems} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GroceryList;
