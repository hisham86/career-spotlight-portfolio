import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Search, Globe } from 'lucide-react';

interface ItemWithEmoji {
  name: string;
  emoji?: string;
  unit?: string;
}

interface GroceryListGeneratorProps {
  onAddItems: (items: ItemWithEmoji[]) => void;
}

type Language = 'en' | 'ms' | 'zh' | 'ko' | 'ja' | 'ar' | 'it' | 'es' | 'ru';

const GroceryListGenerator = ({ onAddItems }: GroceryListGeneratorProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [units, setUnits] = useState<Record<string, string>>({});
  const [language, setLanguage] = useState<Language>('en');

  const languages = {
    en: '🇺🇸 English',
    ms: '🇲🇾 Bahasa Malaysia',
    zh: '🇨🇳 中文简体',
    ko: '🇰🇷 한국어',
    ja: '🇯🇵 日本語',
    ar: '🇸🇦 العربية',
    it: '🇮🇹 Italiano',
    es: '🇪🇸 Español',
    ru: '🇷🇺 Русский'
  };

  const translations = {
    en: {
      title: 'Grocery List Generator',
      search: 'Find emojis by name or description...',
      addSelected: 'Add Selected',
      placeholder: 'e.g. 2 kg, 1 bunch'
    },
    ms: {
      title: 'Penjana Senarai Runcit',
      search: 'Cari emoji mengikut nama atau penerangan...',
      addSelected: 'Tambah Yang Dipilih',
      placeholder: 'cth. 2 kg, 1 ikat'
    },
    zh: {
      title: '购物清单生成器',
      search: '按名称或描述查找表情符号...',
      addSelected: '添加所选',
      placeholder: '例如：2公斤，1束'
    },
    ko: {
      title: '장보기 목록 생성기',
      search: '이름이나 설명으로 이모지 찾기...',
      addSelected: '선택한 항목 추가',
      placeholder: '예: 2kg, 1다발'
    },
    ja: {
      title: '買い物リスト生成器',
      search: '名前や説明で絵文字を検索...',
      addSelected: '選択したものを追加',
      placeholder: '例：2kg、1束'
    },
    ar: {
      title: 'مولد قائمة البقالة',
      search: 'البحث عن الرموز التعبيرية بالاسم أو الوصف...',
      addSelected: 'إضافة المحدد',
      placeholder: 'مثال: 2 كيلو، 1 حزمة'
    },
    it: {
      title: 'Generatore Lista Spesa',
      search: 'Trova emoji per nome o descrizione...',
      addSelected: 'Aggiungi Selezionati',
      placeholder: 'es. 2 kg, 1 mazzo'
    },
    es: {
      title: 'Generador de Lista de Compras',
      search: 'Buscar emojis por nombre o descripción...',
      addSelected: 'Agregar Seleccionados',
      placeholder: 'ej. 2 kg, 1 manojo'
    },
    ru: {
      title: 'Генератор Списка Покупок',
      search: 'Найти эмодзи по названию или описанию...',
      addSelected: 'Добавить Выбранные',
      placeholder: 'напр. 2 кг, 1 пучок'
    }
  };

  const foodCategories = {
    'Fruits': [
      { emoji: '🥑', names: { en: 'Avocado', ms: 'Avokado', zh: '牛油果', ko: '아보카도', ja: 'アボカド', ar: 'أفوكادو', it: 'Avocado', es: 'Aguacate', ru: 'Авокадо' } },
      { emoji: '🍌', names: { en: 'Banana', ms: 'Pisang', zh: '香蕉', ko: '바나나', ja: 'バナナ', ar: 'موز', it: 'Banana', es: 'Plátano', ru: 'Банан' } },
      { emoji: '🫐', names: { en: 'Blueberries', ms: 'Bluberi', zh: '蓝莓', ko: '블루베리', ja: 'ブルーベリー', ar: 'التوت الأزرق', it: 'Mirtilli', es: 'Arándanos', ru: 'Черника' } },
      { emoji: '🍒', names: { en: 'Cherries', ms: 'Ceri', zh: '樱桃', ko: '체리', ja: 'チェリー', ar: 'كرز', it: 'Ciliegie', es: 'Cerezas', ru: 'Вишня' } },
      { emoji: '🥥', names: { en: 'Coconut', ms: 'Kelapa', zh: '椰子', ko: '코코넛', ja: 'ココナッツ', ar: 'جوز الهند', it: 'Cocco', es: 'Coco', ru: 'Кокос' } },
      { emoji: '🍇', names: { en: 'Grapes', ms: 'Anggur', zh: '葡萄', ko: '포도', ja: 'ブドウ', ar: 'عنب', it: 'Uva', es: 'Uvas', ru: 'Виноград' } },
      { emoji: '🍏', names: { en: 'Green Apple', ms: 'Epal Hijau', zh: '青苹果', ko: '청사과', ja: '青りんご', ar: 'تفاح أخضر', it: 'Mela Verde', es: 'Manzana Verde', ru: 'Зеленое Яблоко' } },
      { emoji: '🥝', names: { en: 'Kiwi', ms: 'Kiwi', zh: '猕猴桃', ko: '키위', ja: 'キウイ', ar: 'كيوي', it: 'Kiwi', es: 'Kiwi', ru: 'Киви' } },
      { emoji: '🍋', names: { en: 'Lemon', ms: 'Lemon', zh: '柠檬', ko: '레몬', ja: 'レモン', ar: 'ليمون', it: 'Limone', es: 'Limón', ru: 'Лимон' } },
      { emoji: '🍋‍🟩', names: { en: 'Lime', ms: 'Limau Nipis', zh: '青柠', ko: '라임', ja: 'ライム', ar: 'لايم', it: 'Lime', es: 'Lima', ru: 'Лайм' } },
      { emoji: '🥭', names: { en: 'Mango', ms: 'Mangga', zh: '芒果', ko: '망고', ja: 'マンゴー', ar: 'مانجو', it: 'Mango', es: 'Mango', ru: 'Манго' } },
      { emoji: '🍈', names: { en: 'Melon', ms: 'Tembikai', zh: '甜瓜', ko: '멜론', ja: 'メロン', ar: 'شمام', it: 'Melone', es: 'Melón', ru: 'Дыня' } },
      { emoji: '🍊', names: { en: 'Orange', ms: 'Oren', zh: '橙子', ko: '오렌지', ja: 'オレンジ', ar: 'برتقال', it: 'Arancia', es: 'Naranja', ru: 'Апельсин' } },
      { emoji: '🍑', names: { en: 'Peach', ms: 'Pic', zh: '桃子', ko: '복숭아', ja: '桃', ar: 'خوخ', it: 'Pesca', es: 'Durazno', ru: 'Персик' } },
      { emoji: '🍐', names: { en: 'Pear', ms: 'Pear', zh: '梨', ko: '배', ja: '梨', ar: 'كمثرى', it: 'Pera', es: 'Pera', ru: 'Груша' } },
      { emoji: '🍍', names: { en: 'Pineapple', ms: 'Nanas', zh: '菠萝', ko: '파인애플', ja: 'パイナップル', ar: 'أناناس', it: 'Ananas', es: 'Piña', ru: 'Ананас' } },
      { emoji: '🍎', names: { en: 'Red Apple', ms: 'Epal Merah', zh: '红苹果', ko: '빨간 사과', ja: '赤いりんご', ar: 'تفاح أحمر', it: 'Mela Rossa', es: 'Manzana Roja', ru: 'Красное Яблоко' } },
      { emoji: '🍓', names: { en: 'Strawberry', ms: 'Strawberi', zh: '草莓', ko: '딸기', ja: 'イチゴ', ar: 'فراولة', it: 'Fragola', es: 'Fresa', ru: 'Клубника' } },
      { emoji: '🍉', names: { en: 'Watermelon', ms: 'Tembikai Suika', zh: '西瓜', ko: '수박', ja: 'スイカ', ar: 'بطيخ', it: 'Anguria', es: 'Sandía', ru: 'Арбуз' } }
    ]
  };

  const filteredItems = Object.entries(foodCategories).flatMap(([category, items]) =>
    items.filter(item =>
      item.names[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.emoji.includes(searchTerm)
    ).map(item => ({ ...item, category }))
  );

  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

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
          <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
            <SelectTrigger className="w-48">
              <Globe className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(languages).map(([code, name]) => (
                <SelectItem key={code} value={code}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder={translations[language].search}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        
        <div className="max-h-96 overflow-y-auto space-y-2">
          {filteredItems.map((item) => {
            const key = `${item.category}|${item.names[language]}`;
            const isSelected = selectedItems.has(key);
            
            return (
              <div
                key={key}
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                  isSelected ? 'bg-primary/10 border-primary' : 'hover:bg-muted'
                }`}
                onClick={() => toggleItem(key)}
              >
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="font-medium">{item.names[language]}</span>
                  <span className="text-sm text-muted-foreground">({item.category})</span>
                </div>
                
                {isSelected && (
                  <Input
                    placeholder={translations[language].placeholder}
                    value={units[key] || ''}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleUnitChange(key, e.target.value);
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="w-32"
                  />
                )}
              </div>
            );
          })}
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
