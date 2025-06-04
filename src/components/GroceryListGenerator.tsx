
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
    { emoji: '🍏', name: 'Green Apple' },
    { emoji: '🍎', name: 'Red Apple' },
    { emoji: '🍐', name: 'Pear' },
    { emoji: '🍊', name: 'Orange' },
    { emoji: '🍋', name: 'Lemon' },
    { emoji: '🍋‍🟩', name: 'Lime' },
    { emoji: '🍌', name: 'Banana' },
    { emoji: '🍉', name: 'Watermelon' },
    { emoji: '🍇', name: 'Grapes' },
    { emoji: '🍓', name: 'Strawberry' },
    { emoji: '🫐', name: 'Blueberries' },
    { emoji: '🍈', name: 'Melon' },
    { emoji: '🍒', name: 'Cherries' },
    { emoji: '🍑', name: 'Peach' },
    { emoji: '🥭', name: 'Mango' },
    { emoji: '🍍', name: 'Pineapple' },
    { emoji: '🥥', name: 'Coconut' },
    { emoji: '🥝', name: 'Kiwi' },
    { emoji: '🍅', name: 'Tomato' },
    { emoji: '🍆', name: 'Eggplant' },
    { emoji: '🥑', name: 'Avocado' },
    { emoji: '🥦', name: 'Broccoli' },
    { emoji: '🫛', name: 'Bell Pepper' },
    { emoji: '🥬', name: 'Leafy Greens' },
    { emoji: '🫜', name: 'Beans' },
    { emoji: '🥒', name: 'Cucumber' },
    { emoji: '🌶', name: 'Hot Pepper' },
    { emoji: '🫑', name: 'Bell Pepper' },
    { emoji: '🌽', name: 'Corn' },
    { emoji: '🥕', name: 'Carrot' },
    { emoji: '🫒', name: 'Olives' },
    { emoji: '🧄', name: 'Garlic' },
    { emoji: '🧅', name: 'Onion' },
    { emoji: '🫚', name: 'Ginger' },
    { emoji: '🥔', name: 'Potato' },
    { emoji: '🍠', name: 'Sweet Potato' },
    { emoji: '🫘', name: 'Beans' },
    { emoji: '🥐', name: 'Croissant' },
    { emoji: '🥯', name: 'Bagel' },
    { emoji: '🍞', name: 'Bread' },
    { emoji: '🥖', name: 'Baguette' },
    { emoji: '🥨', name: 'Pretzel' },
    { emoji: '🧀', name: 'Cheese' },
    { emoji: '🥚', name: 'Egg' },
    { emoji: '🍳', name: 'Fried Egg' },
    { emoji: '🧈', name: 'Butter' },
    { emoji: '🥞', name: 'Pancakes' },
    { emoji: '🧇', name: 'Waffle' },
    { emoji: '🥓', name: 'Bacon' },
    { emoji: '🥩', name: 'Steak' },
    { emoji: '🍗', name: 'Chicken' },
    { emoji: '🍖', name: 'Meat' },
    { emoji: '🦴', name: 'Bone' },
    { emoji: '🌭', name: 'Hot Dog' },
    { emoji: '🍔', name: 'Hamburger' },
    { emoji: '🍟', name: 'French Fries' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🫓', name: 'Flatbread' },
    { emoji: '🥪', name: 'Sandwich' },
    { emoji: '🥙', name: 'Wrap' },
    { emoji: '🧆', name: 'Falafel' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🌯', name: 'Burrito' },
    { emoji: '🫔', name: 'Tamale' },
    { emoji: '🥗', name: 'Salad' },
    { emoji: '🥘', name: 'Paella' },
    { emoji: '🫕', name: 'Fondue' },
    { emoji: '🥫', name: 'Canned Food' },
    { emoji: '🍝', name: 'Pasta' },
    { emoji: '🍜', name: 'Noodles' },
    { emoji: '🍲', name: 'Stew' },
    { emoji: '🍛', name: 'Curry' },
    { emoji: '🍣', name: 'Sushi' },
    { emoji: '🍱', name: 'Bento' },
    { emoji: '🥟', name: 'Dumpling' },
    { emoji: '🦪', name: 'Oyster' },
    { emoji: '🍤', name: 'Shrimp' },
    { emoji: '🍙', name: 'Rice Ball' },
    { emoji: '🍚', name: 'Rice' },
    { emoji: '🍘', name: 'Rice Cracker' },
    { emoji: '🍥', name: 'Fish Cake' },
    { emoji: '🥠', name: 'Fortune Cookie' },
    { emoji: '🥮', name: 'Moon Cake' },
    { emoji: '🍢', name: 'Oden' },
    { emoji: '🍡', name: 'Dango' },
    { emoji: '🍧', name: 'Shaved Ice' },
    { emoji: '🍨', name: 'Ice Cream' },
    { emoji: '🍦', name: 'Soft Ice Cream' },
    { emoji: '🥧', name: 'Pie' },
    { emoji: '🧁', name: 'Cupcake' },
    { emoji: '🍰', name: 'Cake' },
    { emoji: '🎂', name: 'Birthday Cake' },
    { emoji: '🍮', name: 'Custard' },
    { emoji: '🍭', name: 'Lollipop' },
    { emoji: '🍬', name: 'Candy' },
    { emoji: '🍫', name: 'Chocolate' },
    { emoji: '🍿', name: 'Popcorn' },
    { emoji: '🍩', name: 'Donut' },
    { emoji: '🍪', name: 'Cookie' },
    { emoji: '🌰', name: 'Chestnut' },
    { emoji: '🥜', name: 'Peanuts' },
    { emoji: '🍯', name: 'Honey' },
    { emoji: '🥛', name: 'Milk' },
    { emoji: '🍼', name: 'Baby Bottle' },
    { emoji: '🫖', name: 'Teapot' },
    { emoji: '☕️', name: 'Coffee' },
    { emoji: '🍵', name: 'Tea' },
    { emoji: '🧃', name: 'Juice Box' },
    { emoji: '🥤', name: 'Soft Drink' },
    { emoji: '🧋', name: 'Bubble Tea' },
    { emoji: '🫙', name: 'Jar' },
    { emoji: '🍶', name: 'Sake' },
    { emoji: '🍺', name: 'Beer' },
    { emoji: '🍻', name: 'Beer Mugs' },
    { emoji: '🥂', name: 'Champagne' },
    { emoji: '🍷', name: 'Wine' },
    { emoji: '🫗', name: 'Pouring Liquid' },
    { emoji: '🥃', name: 'Whiskey' },
    { emoji: '🍸', name: 'Cocktail' },
    { emoji: '🍹', name: 'Tropical Drink' },
    { emoji: '🧉', name: 'Mate' },
    { emoji: '🍾', name: 'Champagne Bottle' },
    { emoji: '🧊', name: 'Ice' },
    { emoji: '🥄', name: 'Spoon' },
    { emoji: '🍴', name: 'Fork and Knife' },
    { emoji: '🍽', name: 'Plate' },
    { emoji: '🥣', name: 'Bowl' },
    { emoji: '🥡', name: 'Takeout Box' },
    { emoji: '🥢', name: 'Chopsticks' },
    { emoji: '🧂', name: 'Salt' },
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

          <div className="max-h-96 overflow-y-auto border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Emoji</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="w-32">Unit/Quantity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.map((item) => (
                  <TableRow key={item.name}>
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
