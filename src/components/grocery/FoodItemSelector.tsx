
import { Input } from '@/components/ui/input';
import type { Language, FoodItem } from './FoodData';

interface FoodItemSelectorProps {
  item: FoodItem & { category: string };
  itemKey: string;
  language: Language;
  isSelected: boolean;
  unit: string;
  placeholder: string;
  onToggle: (key: string) => void;
  onUnitChange: (key: string, value: string) => void;
}

const FoodItemSelector = ({
  item,
  itemKey,
  language,
  isSelected,
  unit,
  placeholder,
  onToggle,
  onUnitChange
}: FoodItemSelectorProps) => {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
        isSelected ? 'bg-primary/10 border-primary' : 'hover:bg-muted'
      }`}
      onClick={() => onToggle(itemKey)}
    >
      <div className="flex items-center gap-2 flex-1">
        <span className="text-2xl">{item.emoji}</span>
        <span className="font-medium">{item.names[language]}</span>
        <span className="text-sm text-muted-foreground">({item.category})</span>
      </div>
      
      {isSelected && (
        <Input
          placeholder={placeholder}
          value={unit}
          onChange={(e) => {
            e.stopPropagation();
            onUnitChange(itemKey, e.target.value);
          }}
          onClick={(e) => e.stopPropagation()}
          className="w-32"
        />
      )}
    </div>
  );
};

export default FoodItemSelector;
