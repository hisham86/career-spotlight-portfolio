
import { Input } from '@/components/ui/input';
import { FoodItem, Language } from '@/types/grocery';

interface FoodItemInputProps {
  item: FoodItem;
  language: Language;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const FoodItemInput = ({ item, language, value, onChange, placeholder }: FoodItemInputProps) => {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="text-lg flex-shrink-0">{item.emoji}</div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm truncate">{item.names[language]}</div>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 mt-1"
        />
      </div>
    </div>
  );
};

export default FoodItemInput;
