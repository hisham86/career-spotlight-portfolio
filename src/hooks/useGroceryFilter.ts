
import { useMemo } from 'react';
import { foodCategories } from '@/data/foodCategories';
import { Language } from '@/types/grocery';

export const useGroceryFilter = (searchTerm: string, language: Language) => {
  return useMemo(() => {
    if (!searchTerm) return foodCategories;
    
    const filtered: Partial<typeof foodCategories> = {};
    Object.entries(foodCategories).forEach(([category, items]) => {
      const filteredItems = items.filter(item =>
        item.names[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.names.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.emoji.includes(searchTerm)
      );
      if (filteredItems.length > 0) {
        filtered[category as keyof typeof foodCategories] = filteredItems;
      }
    });
    return filtered;
  }, [searchTerm, language]);
};
