
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Plus, Search } from 'lucide-react';
import LanguageSelector from './grocery/LanguageSelector';
import FoodItemSelector from './grocery/FoodItemSelector';
import { foodCategories } from './grocery/FoodData';
import { translations } from './grocery/Translations';
import type { Language } from './grocery/FoodData';

interface ItemWithEmoji {
  name: string;
  emoji?: string;
  unit?: string;
}

interface GroceryListGeneratorProps {
  onAddItems: (items: ItemWithEmoji[]) => void;
}

const GroceryListGenerator = ({ onAddItems }: GroceryListGeneratorProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [units, setUnits] = useState<Record<string, string>>({});
  const [language, setLanguage] = useState<Language>('en');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const filteredItems = Object.entries(foodCategories).flatMap(([category, items]) =>
    items.filter(item =>
      item.names[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.emoji.includes(searchTerm)
    ).map(item => ({ ...item, category }))
  );

  const toggleItem = (key: string) => {
    const newSelection = new Set(selectedItems);
    if (newSelection.has(key)) {
      newSelection.delete(key);
    } else {
      newSelection.add(key);
    }
    setSelectedItems(newSelection);
  };

  const handleAddSelected = () => {
    const itemsToAdd: ItemWithEmoji[] = [];
    
    selectedItems.forEach(key => {
      const [category, itemName] = key.split('|');
      const item = foodCategories[category as keyof typeof foodCategories]?.find(
        item => item.names[language] === itemName
      );
      
      if (item) {
        itemsToAdd.push({
          name: item.names[language],
          emoji: item.emoji,
          unit: units[key] || ''
        });
      }
    });
    
    onAddItems(itemsToAdd);
    setSelectedItems(new Set());
    setUnits({});
  };

  const handleUnitChange = (key: string, value: string) => {
    setUnits(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            {translations[language].title}
          </CardTitle>
          <LanguageSelector language={language} onLanguageChange={setLanguage} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder={translations[language].search}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        
        <div className="max-h-96 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {filteredItems.map((item) => {
              const key = `${item.category}|${item.names[language]}`;
              
              return (
                <FoodItemSelector
                  key={key}
                  item={item}
                  itemKey={key}
                  language={language}
                  isSelected={selectedItems.has(key)}
                  unit={units[key] || ''}
                  placeholder={translations[language].placeholder}
                  onToggle={toggleItem}
                  onUnitChange={handleUnitChange}
                />
              );
            })}
          </div>
        </div>
        
        {selectedItems.size > 0 && (
          <>
            <Separator />
            <Button onClick={handleAddSelected} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              {translations[language].addSelected} ({selectedItems.size})
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default GroceryListGenerator;
