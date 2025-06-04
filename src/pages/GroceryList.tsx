
import { useState } from 'react';
import { Plus, Trash2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface GroceryItem {
  id: string;
  name: string;
  completed: boolean;
}

const GroceryList = () => {
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      const item: GroceryItem = {
        id: Date.now().toString(),
        name: newItem.trim(),
        completed: false
      };
      setItems([...items, item]);
      setNewItem('');
    }
  };

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addItem();
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
              Keep track of your grocery shopping items
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>My Grocery List</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a new item..."
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button onClick={addItem}>
                  <Plus size={16} />
                  Add
                </Button>
              </div>

              <div className="space-y-2">
                {items.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    No items yet. Add your first grocery item above!
                  </p>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border ${
                        item.completed ? 'bg-muted/50' : 'bg-background'
                      }`}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleItem(item.id)}
                        className={`h-8 w-8 ${
                          item.completed ? 'text-green-600' : 'text-muted-foreground'
                        }`}
                      >
                        <Check size={16} />
                      </Button>
                      
                      <span
                        className={`flex-1 ${
                          item.completed
                            ? 'line-through text-muted-foreground'
                            : 'text-foreground'
                        }`}
                      >
                        {item.name}
                      </span>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteItem(item.id)}
                        className="h-8 w-8 text-red-500 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    {items.filter(item => !item.completed).length} of {items.length} items remaining
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GroceryList;
