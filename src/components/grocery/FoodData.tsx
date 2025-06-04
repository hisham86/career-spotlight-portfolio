
type Language = 'en' | 'ms' | 'zh' | 'ko' | 'ja' | 'ar' | 'it' | 'es' | 'ru';

interface FoodItem {
  emoji: string;
  names: Record<Language, string>;
}

export const foodCategories: Record<string, FoodItem[]> = {
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

export type { Language, FoodItem };
