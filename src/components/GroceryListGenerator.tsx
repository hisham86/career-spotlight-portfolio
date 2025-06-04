
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';

interface GroceryListGeneratorProps {
  onAddItems: (items: string[]) => void;
}

const GroceryListGenerator = ({ onAddItems }: GroceryListGeneratorProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const groceryCategories = {
    'Weekly Essentials': [
      'Milk', 'Bread', 'Eggs', 'Butter', 'Cheese', 'Yogurt', 'Bananas', 'Apples', 'Onions', 'Potatoes'
    ],
    'Breakfast': [
      'Cereal', 'Oatmeal', 'Orange Juice', 'Coffee', 'Bagels', 'Cream Cheese', 'Berries', 'Pancake Mix'
    ],
    'Lunch': [
      'Sandwich Bread', 'Deli Meat', 'Lettuce', 'Tomatoes', 'Mayo', 'Soup Cans', 'Crackers', 'Cheese Slices'
    ],
    'Dinner': [
      'Chicken Breast', 'Ground Beef', 'Pasta', 'Rice', 'Olive Oil', 'Garlic', 'Bell Peppers', 'Broccoli'
    ],
    'Snacks': [
      'Chips', 'Nuts', 'Granola Bars', 'Fruit Snacks', 'Pretzels', 'Popcorn', 'Dark Chocolate'
    ],
    'Cleaning Supplies': [
      'Dish Soap', 'Laundry Detergent', 'Paper Towels', 'Toilet Paper', 'All-Purpose Cleaner', 'Sponges'
    ]
  };

  const handleGenerateList = (category: string) => {
    const items = groceryCategories[category as keyof typeof groceryCategories];
    if (items) {
      onAddItems(items);
      setSelectedCategory('');
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus size={20} />
          Grocery List Generator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Quickly add common grocery items by category
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.keys(groceryCategories).map((category) => (
            <Button
              key={category}
              variant="outline"
              className="h-auto p-4 text-left justify-start"
              onClick={() => handleGenerateList(category)}
            >
              <div>
                <div className="font-medium">{category}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {groceryCategories[category as keyof typeof groceryCategories].length} items
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GroceryListGenerator;
