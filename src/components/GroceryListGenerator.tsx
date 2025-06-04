
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Plus, Search } from 'lucide-react';
import { GroceryListGeneratorProps, Language } from '@/types/grocery';
import { translations } from '@/data/translations';
import { foodCategories } from '@/data/foodCategories';
import { useGroceryFilter } from '@/hooks/useGroceryFilter';
import LanguageSelector from './LanguageSelector';
import FoodItemInput from './FoodItemInput';

const GroceryListGenerator = ({ onAddItems }: GroceryListGeneratorProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [units, setUnits] = useState<Record<string, string>>({});
  const [language, setLanguage] = useState<Language>('en');

  const filteredCategories = useGroceryFilter(searchTerm, language);
  const t = translations[language];

  const handleUnitChange = (itemKey: string, unit: string) => {
    setUnits(prev => ({ ...prev, [itemKey]: unit }));
  };

  const handleAddSelected = () => {
    const itemsToAdd = Object.entries(units)
      .filter(([_, unit]) => unit.trim() !== '')
      .map(([itemKey, unit]) => {
        // Find the item in foodCategories to get both name and emoji
        for (const category of Object.values(foodCategories)) {
          const item = category.find(item => item.names[language] === itemKey);
          if (item) {
            return {
              name: unit.trim() ? `${unit} ${item.names[language]}` : item.names[language],
              emoji: item.emoji
            };
          }
        }
        return { name: itemKey, emoji: '🛒' }; // fallback
      });
    
    if (itemsToAdd.length > 0) {
      onAddItems(itemsToAdd);
      setUnits({});
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Plus size={20} />
            {t.title}
          </CardTitle>
          <LanguageSelector language={language} onLanguageChange={setLanguage} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                placeholder={t.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button onClick={handleAddSelected} disabled={Object.values(units).every(unit => !unit.trim())}>
              {t.addSelected}
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
                    <FoodItemInput
                      key={`${item.names.en}-${index}`}
                      item={item}
                      language={language}
                      value={units[item.names[language]] || ''}
                      onChange={(value) => handleUnitChange(item.names[language], value)}
                      placeholder={t.placeholder}
                    />
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
