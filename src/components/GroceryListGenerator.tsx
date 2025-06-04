import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Search } from 'lucide-react';

interface GroceryListGeneratorProps {
  onAddItems: (items: string[]) => void;
}

const GroceryListGenerator = ({ onAddItems }: GroceryListGeneratorProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [units, setUnits] = useState<Record<string, string>>({});

  const foodItems = [
    { emoji: '🥑', name: 'Avocado' },
    { emoji: '🥓', name: 'Bacon' },
    { emoji: '🥯', name: 'Bagel' },
    { emoji: '🍌', name: 'Banana' },
    { emoji: '🫘', name: 'Beans' },
    { emoji: '🫜', name: 'Beans' },
    { emoji: '🍺', name: 'Beer' },
    { emoji: '🍻', name: 'Beer Mugs' },
    { emoji: '🫛', name: 'Bell Pepper' },
    { emoji: '🫑', name: 'Bell Pepper' },
    { emoji: '🍱', name: 'Bento' },
    { emoji: '🎂', name: 'Birthday Cake' },
    { emoji: '🫐', name: 'Blueberries' },
    { emoji: '🦴', name: 'Bone' },
    { emoji: '🥣', name: 'Bowl' },
    { emoji: '🍞', name: 'Bread' },
    { emoji: '🥦', name: 'Broccoli' },
    { emoji: '🧋', name: 'Bubble Tea' },
    { emoji: '🌯', name: 'Burrito' },
    { emoji: '🧈', name: 'Butter' },
    { emoji: '🍰', name: 'Cake' },
    { emoji: '🍬', name: 'Candy' },
    { emoji: '🥫', name: 'Canned Food' },
    { emoji: '🥕', name: 'Carrot' },
    { emoji: '🥂', name: 'Champagne' },
    { emoji: '🍾', name: 'Champagne Bottle' },
    { emoji: '🧀', name: 'Cheese' },
    { emoji: '🍒', name: 'Cherries' },
    { emoji: '🌰', name: 'Chestnut' },
    { emoji: '🍗', name: 'Chicken' },
    { emoji: '🍫', name: 'Chocolate' },
    { emoji: '🥢', name: 'Chopsticks' },
    { emoji: '🥥', name: 'Coconut' },
    { emoji: '☕️', name: 'Coffee' },
    { emoji: '🍪', name: 'Cookie' },
    { emoji: '🌽', name: 'Corn' },
    { emoji: '🥐', name: 'Croissant' },
    { emoji: '🥒', name: 'Cucumber' },
    { emoji: '🧁', name: 'Cupcake' },
    { emoji: '🍛', name: 'Curry' },
    { emoji: '🍮', name: 'Custard' },
    { emoji: '🍡', name: 'Dango' },
    { emoji: '🍩', name: 'Donut' },
    { emoji: '🥟', name: 'Dumpling' },
    { emoji: '🍆', name: 'Eggplant' },
    { emoji: '🥚', name: 'Egg' },
    { emoji: '🧆', name: 'Falafel' },
    { emoji: '🍥', name: 'Fish Cake' },
    { emoji: '🫓', name: 'Flatbread' },
    { emoji: '🫕', name: 'Fondue' },
    { emoji: '🍴', name: 'Fork and Knife' },
    { emoji: '🥠', name: 'Fortune Cookie' },
    { emoji: '🍟', name: 'French Fries' },
    { emoji: '🍳', name: 'Fried Egg' },
    { emoji: '🧄', name: 'Garlic' },
    { emoji: '🫚', name: 'Ginger' },
    { emoji: '🍇', name: 'Grapes' },
    { emoji: '🍏', name: 'Green Apple' },
    { emoji: '🍔', name: 'Hamburger' },
    { emoji: '🍯', name: 'Honey' },
    { emoji: '🌭', name: 'Hot Dog' },
    { emoji: '🌶', name: 'Hot Pepper' },
    { emoji: '🧊', name: 'Ice' },
    { emoji: '🍨', name: 'Ice Cream' },
    { emoji: '🫙', name: 'Jar' },
    { emoji: '🧃', name: 'Juice Box' },
    { emoji: '🥝', name: 'Kiwi' },
    { emoji: '🥬', name: 'Leafy Greens' },
    { emoji: '🍋', name: 'Lemon' },
    { emoji: '🍋‍🟩', name: 'Lime' },
    { emoji: '🍭', name: 'Lollipop' },
    { emoji: '🥭', name: 'Mango' },
    { emoji: '🧉', name: 'Mate' },
    { emoji: '🍖', name: 'Meat' },
    { emoji: '🍈', name: 'Melon' },
    { emoji: '🥛', name: 'Milk' },
    { emoji: '🥮', name: 'Moon Cake' },
    { emoji: '🍜', name: 'Noodles' },
    { emoji: '🢂', name: 'Oden' },
    { emoji: '🫒', name: 'Olives' },
    { emoji: '🧅', name: 'Onion' },
    { emoji: '🍊', name: 'Orange' },
    { emoji: '🦪', name: 'Oyster' },
    { emoji: '🥘', name: 'Paella' },
    { emoji: '🥞', name: 'Pancakes' },
    { emoji: '🍝', name: 'Pasta' },
    { emoji: '🍑', name: 'Peach' },
    { emoji: '🥜', name: 'Peanuts' },
    { emoji: '🍐', name: 'Pear' },
    { emoji: '🥧', name: 'Pie' },
    { emoji: '🍍', name: 'Pineapple' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🍽', name: 'Plate' },
    { emoji: '🍿', name: 'Popcorn' },
    { emoji: '🫗', name: 'Pouring Liquid' },
    { emoji: '🥔', name: 'Potato' },
    { emoji: '🥨', name: 'Pretzel' },
    { emoji: '🍎', name: 'Red Apple' },
    { emoji: '🍚', name: 'Rice' },
    { emoji: '🍙', name: 'Rice Ball' },
    { emoji: '🍘', name: 'Rice Cracker' },
    { emoji: '🍶', name: 'Sake' },
    { emoji: '🥗', name: 'Salad' },
    { emoji: '🧂', name: 'Salt' },
    { emoji: '🥪', name: 'Sandwich' },
    { emoji: '🍧', name: 'Shaved Ice' },
    { emoji: '🍤', name: 'Shrimp' },
    { emoji: '🍦', name: 'Soft Ice Cream' },
    { emoji: '🥤', name: 'Soft Drink' },
    { emoji: '🥄', name: 'Spoon' },
    { emoji: '🥩', name: 'Steak' },
    { emoji: '🍲', name: 'Stew' },
    { emoji: '🍓', name: 'Strawberry' },
    { emoji: '🍣', name: 'Sushi' },
    { emoji: '🍠', name: 'Sweet Potato' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🥡', name: 'Takeout Box' },
    { emoji: '🫔', name: 'Tamale' },
    { emoji: '🍵', name: 'Tea' },
    { emoji: '🫖', name: 'Teapot' },
    { emoji: '🍅', name: 'Tomato' },
    { emoji: '🍹', name: 'Tropical Drink' },
    { emoji: '🧇', name: 'Waffle' },
    { emoji: '🍉', name: 'Watermelon' },
    { emoji: '🥃', name: 'Whiskey' },
    { emoji: '🍷', name: 'Wine' },
    { emoji: '🥙', name: 'Wrap' },
  ];

  const filteredItems = foodItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.emoji.includes(searchTerm)
  );

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

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Emoji</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="w-32">Unit/Quantity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.map((item, index) => (
                  <TableRow key={`${item.name}-${index}`}>
                    <TableCell className="text-lg">{item.emoji}</TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <Input
                        placeholder="e.g. 2 kg, 1 bunch"
                        value={units[item.name] || ''}
                        onChange={(e) => handleUnitChange(item.name, e.target.value)}
                        className="h-8"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroceryListGenerator;
