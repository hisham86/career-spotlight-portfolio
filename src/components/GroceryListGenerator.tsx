
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Plus, Search } from 'lucide-react';

interface GroceryListGeneratorProps {
  onAddItems: (items: string[]) => void;
}

const GroceryListGenerator = ({ onAddItems }: GroceryListGeneratorProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [units, setUnits] = useState<Record<string, string>>({});

  const foodCategories = {
    'Fruits': [
      { emoji: '🥑', name: 'Avocado' },
      { emoji: '🍌', name: 'Banana' },
      { emoji: '🫐', name: 'Blueberries' },
      { emoji: '🍒', name: 'Cherries' },
      { emoji: '🥥', name: 'Coconut' },
      { emoji: '🍇', name: 'Grapes' },
      { emoji: '🍏', name: 'Green Apple' },
      { emoji: '🥝', name: 'Kiwi' },
      { emoji: '🍋', name: 'Lemon' },
      { emoji: '🍋‍🟩', name: 'Lime' },
      { emoji: '🥭', name: 'Mango' },
      { emoji: '🍈', name: 'Melon' },
      { emoji: '🍊', name: 'Orange' },
      { emoji: '🍑', name: 'Peach' },
      { emoji: '🍐', name: 'Pear' },
      { emoji: '🍍', name: 'Pineapple' },
      { emoji: '🍎', name: 'Red Apple' },
      { emoji: '🍓', name: 'Strawberry' },
      { emoji: '🍉', name: 'Watermelon' },
    ],
    'Vegetables': [
      { emoji: '🫘', name: 'Beans' },
      { emoji: '🫜', name: 'Beans' },
      { emoji: '🫛', name: 'Bell Pepper' },
      { emoji: '🫑', name: 'Bell Pepper' },
      { emoji: '🥦', name: 'Broccoli' },
      { emoji: '🥕', name: 'Carrot' },
      { emoji: '🌰', name: 'Chestnut' },
      { emoji: '🌽', name: 'Corn' },
      { emoji: '🥒', name: 'Cucumber' },
      { emoji: '🍆', name: 'Eggplant' },
      { emoji: '🧄', name: 'Garlic' },
      { emoji: '🫚', name: 'Ginger' },
      { emoji: '🌶', name: 'Hot Pepper' },
      { emoji: '🥬', name: 'Leafy Greens' },
      { emoji: '🫒', name: 'Olives' },
      { emoji: '🧅', name: 'Onion' },
      { emoji: '🥔', name: 'Potato' },
      { emoji: '🍠', name: 'Sweet Potato' },
      { emoji: '🍅', name: 'Tomato' },
    ],
    'Protein & Meat': [
      { emoji: '🥓', name: 'Bacon' },
      { emoji: '🦴', name: 'Bone' },
      { emoji: '🍗', name: 'Chicken' },
      { emoji: '🥚', name: 'Egg' },
      { emoji: '🧆', name: 'Falafel' },
      { emoji: '🍥', name: 'Fish Cake' },
      { emoji: '🍳', name: 'Fried Egg' },
      { emoji: '🍖', name: 'Meat' },
      { emoji: '🥜', name: 'Peanuts' },
      { emoji: '🍤', name: 'Shrimp' },
      { emoji: '🥩', name: 'Steak' },
    ],
    'Dairy & Cheese': [
      { emoji: '🧈', name: 'Butter' },
      { emoji: '🧀', name: 'Cheese' },
      { emoji: '🥛', name: 'Milk' },
    ],
    'Grains & Bread': [
      { emoji: '🥯', name: 'Bagel' },
      { emoji: '🍞', name: 'Bread' },
      { emoji: '🥐', name: 'Croissant' },
      { emoji: '🫓', name: 'Flatbread' },
      { emoji: '🍜', name: 'Noodles' },
      { emoji: '🍝', name: 'Pasta' },
      { emoji: '🥨', name: 'Pretzel' },
      { emoji: '🍚', name: 'Rice' },
      { emoji: '🍙', name: 'Rice Ball' },
      { emoji: '🍘', name: 'Rice Cracker' },
    ],
    'Beverages': [
      { emoji: '🍺', name: 'Beer' },
      { emoji: '🍻', name: 'Beer Mugs' },
      { emoji: '🧋', name: 'Bubble Tea' },
      { emoji: '🥂', name: 'Champagne' },
      { emoji: '🍾', name: 'Champagne Bottle' },
      { emoji: '☕️', name: 'Coffee' },
      { emoji: '🧃', name: 'Juice Box' },
      { emoji: '🧉', name: 'Mate' },
      { emoji: '🥤', name: 'Soft Drink' },
      { emoji: '🍵', name: 'Tea' },
      { emoji: '🍹', name: 'Tropical Drink' },
      { emoji: '🥃', name: 'Whiskey' },
      { emoji: '🍷', name: 'Wine' },
    ],
    'Prepared Foods': [
      { emoji: '🍱', name: 'Bento' },
      { emoji: '🌯', name: 'Burrito' },
      { emoji: '🍛', name: 'Curry' },
      { emoji: '🥟', name: 'Dumpling' },
      { emoji: '🫕', name: 'Fondue' },
      { emoji: '🍟', name: 'French Fries' },
      { emoji: '🍔', name: 'Hamburger' },
      { emoji: '🌭', name: 'Hot Dog' },
      { emoji: '🥘', name: 'Paella' },
      { emoji: '🍕', name: 'Pizza' },
      { emoji: '🥗', name: 'Salad' },
      { emoji: '🥪', name: 'Sandwich' },
      { emoji: '🍲', name: 'Stew' },
      { emoji: '🍣', name: 'Sushi' },
      { emoji: '🌮', name: 'Taco' },
      { emoji: '🥡', name: 'Takeout Box' },
      { emoji: '🫔', name: 'Tamale' },
      { emoji: '🥙', name: 'Wrap' },
    ],
    'Sweets & Desserts': [
      { emoji: '🎂', name: 'Birthday Cake' },
      { emoji: '🍰', name: 'Cake' },
      { emoji: '🍬', name: 'Candy' },
      { emoji: '🍫', name: 'Chocolate' },
      { emoji: '🍪', name: 'Cookie' },
      { emoji: '🧁', name: 'Cupcake' },
      { emoji: '🍮', name: 'Custard' },
      { emoji: '🍡', name: 'Dango' },
      { emoji: '🍩', name: 'Donut' },
      { emoji: '🥠', name: 'Fortune Cookie' },
      { emoji: '🍯', name: 'Honey' },
      { emoji: '🍨', name: 'Ice Cream' },
      { emoji: '🍭', name: 'Lollipop' },
      { emoji: '🥮', name: 'Moon Cake' },
      { emoji: '🥞', name: 'Pancakes' },
      { emoji: '🥧', name: 'Pie' },
      { emoji: '🍿', name: 'Popcorn' },
      { emoji: '🍧', name: 'Shaved Ice' },
      { emoji: '🍦', name: 'Soft Ice Cream' },
      { emoji: '🧇', name: 'Waffle' },
    ],
    'Other': [
      { emoji: '🥣', name: 'Bowl' },
      { emoji: '🥫', name: 'Canned Food' },
      { emoji: '🥢', name: 'Chopsticks' },
      { emoji: '🍴', name: 'Fork and Knife' },
      { emoji: '🧊', name: 'Ice' },
      { emoji: '🫙', name: 'Jar' },
      { emoji: '🢂', name: 'Oden' },
      { emoji: '🦪', name: 'Oyster' },
      { emoji: '🍽', name: 'Plate' },
      { emoji: '🫗', name: 'Pouring Liquid' },
      { emoji: '🍶', name: 'Sake' },
      { emoji: '🧂', name: 'Salt' },
      { emoji: '🥄', name: 'Spoon' },
      { emoji: '🫖', name: 'Teapot' },
    ],
  };

  const getFilteredCategories = () => {
    if (!searchTerm) return foodCategories;
    
    const filtered: typeof foodCategories = {};
    Object.entries(foodCategories).forEach(([category, items]) => {
      const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.emoji.includes(searchTerm)
      );
      if (filteredItems.length > 0) {
        filtered[category] = filteredItems;
      }
    });
    return filtered;
  };

  const handleUnitChange = (itemName: string, unit: string) => {
    setUnits(prev => ({ ...prev, [itemName]: unit }));
  };

  const handleAddSelected = () => {
    const itemsToAdd = Object.entries(units)
      .filter(([_, unit]) => unit.trim() !== '')
      .map(([name, unit]) => `${unit} ${name}`);
    
    if (itemsToAdd.length > 0) {
      onAddItems(itemsToAdd);
      setUnits({});
    }
  };

  const filteredCategories = getFilteredCategories();

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus size={20} />
          Grocery List Generator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                placeholder="Find emojis by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button onClick={handleAddSelected} disabled={Object.values(units).every(unit => !unit.trim())}>
              Add Selected
            </Button>
          </div>

          <div className="space-y-6">
            {Object.entries(filteredCategories).map(([category, items]) => (
              <div key={category}>
                <div className="relative flex items-center justify-center mb-4">
                  <Separator className="flex-1" />
                  <div className="px-4 bg-background text-sm font-medium text-muted-foreground">
                    {category}
                  </div>
                  <Separator className="flex-1" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {items.map((item, index) => (
                    <div key={`${item.name}-${index}`} className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="text-lg flex-shrink-0">{item.emoji}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{item.name}</div>
                        <Input
                          placeholder="e.g. 2 kg, 1 bunch"
                          value={units[item.name] || ''}
                          onChange={(e) => handleUnitChange(item.name, e.target.value)}
                          className="h-8 mt-1"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroceryListGenerator;
