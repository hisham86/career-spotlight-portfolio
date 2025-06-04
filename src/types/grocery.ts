
export type Language = 'en' | 'ms' | 'zh' | 'ko' | 'ja' | 'ar' | 'it' | 'es' | 'ru';

export interface FoodItem {
  emoji: string;
  names: Record<Language, string>;
}

export interface GroceryItem {
  id: string;
  name: string;
  completed: boolean;
  unit?: string;
  emoji?: string;
}

export interface GroceryListGeneratorProps {
  onAddItems: (items: { name: string; emoji: string }[]) => void;
}
