import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Search, Globe } from 'lucide-react';

interface GroceryListGeneratorProps {
  onAddItems: (items: string[]) => void;
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
      { emoji: '🍉', names: { en: 'Watermelon', ms: 'Tembikai Suika', zh: '西瓜', ko: '수박', ja: 'スイカ', ar: 'بطيخ', it: 'Anguria', es: 'Sandía', ru: 'Арбуз' } },
    ],
    'Vegetables': [
      { emoji: '🫘', names: { en: 'Beans', ms: 'Kacang', zh: '豆类', ko: '콩', ja: '豆', ar: 'فاصولياء', it: 'Fagioli', es: 'Frijoles', ru: 'Бобы' } },
      { emoji: '🫜', names: { en: 'Beans', ms: 'Kacang', zh: '豆类', ko: '콩', ja: '豆', ar: 'فاصولياء', it: 'Fagioli', es: 'Frijoles', ru: 'Бобы' } },
      { emoji: '🫛', names: { en: 'Bell Pepper', ms: 'Lada Benggala', zh: '甜椒', ko: '피망', ja: 'ピーマン', ar: 'فلفل حلو', it: 'Peperone', es: 'Pimiento', ru: 'Болгарский Перец' } },
      { emoji: '🫑', names: { en: 'Bell Pepper', ms: 'Lada Benggala', zh: '甜椒', ko: '피망', ja: 'ピーマン', ar: 'فلفل حلو', it: 'Peperone', es: 'Pimiento', ru: 'Болгарский Перец' } },
      { emoji: '🥦', names: { en: 'Broccoli', ms: 'Brokoli', zh: '西兰花', ko: '브로콜리', ja: 'ブロッコリー', ar: 'بروكلي', it: 'Broccoli', es: 'Brócoli', ru: 'Брокколи' } },
      { emoji: '🥕', names: { en: 'Carrot', ms: 'Lobak Merah', zh: '胡萝卜', ko: '당근', ja: '人参', ar: 'جزر', it: 'Carota', es: 'Zanahoria', ru: 'Морковь' } },
      { emoji: '🌰', names: { en: 'Chestnut', ms: 'Buah Berangan', zh: '栗子', ko: '밤', ja: '栗', ar: 'كستناء', it: 'Castagna', es: 'Castaña', ru: 'Каштан' } },
      { emoji: '🌽', names: { en: 'Corn', ms: 'Jagung', zh: '玉米', ko: '옥수수', ja: 'トウモロコシ', ar: 'ذرة', it: 'Mais', es: 'Maíz', ru: 'Кукуруза' } },
      { emoji: '🥒', names: { en: 'Cucumber', ms: 'Timun', zh: '黄瓜', ko: '오이', ja: 'キュウリ', ar: 'خيار', it: 'Cetriolo', es: 'Pepino', ru: 'Огурец' } },
      { emoji: '🍆', names: { en: 'Eggplant', ms: 'Terung', zh: '茄子', ko: '가지', ja: 'ナス', ar: 'باذنجان', it: 'Melanzana', es: 'Berenjena', ru: 'Баклажан' } },
      { emoji: '🧄', names: { en: 'Garlic', ms: 'Bawang Putih', zh: '大蒜', ko: '마늘', ja: 'ニンニク', ar: 'ثوم', it: 'Aglio', es: 'Ajo', ru: 'Чеснок' } },
      { emoji: '🫚', names: { en: 'Ginger', ms: 'Halia', zh: '生姜', ko: '생강', ja: '生姜', ar: 'زنجبيل', it: 'Zenzero', es: 'Jengibre', ru: 'Имбирь' } },
      { emoji: '🌶', names: { en: 'Hot Pepper', ms: 'Cili Padi', zh: '辣椒', ko: '고추', ja: '唐辛子', ar: 'فلفل حار', it: 'Peperoncino', es: 'Chile', ru: 'Острый Перец' } },
      { emoji: '🥬', names: { en: 'Leafy Greens', ms: 'Sayuran Hijau', zh: '绿叶菜', ko: '잎채소', ja: '葉野菜', ar: 'خضروات ورقية', it: 'Verdure a Foglia', es: 'Hojas Verdes', ru: 'Листовая Зелень' } },
      { emoji: '🫒', names: { en: 'Olives', ms: 'Zaitun', zh: '橄榄', ko: '올리브', ja: 'オリーブ', ar: 'زيتون', it: 'Olive', es: 'Aceitunas', ru: 'Оливки' } },
      { emoji: '🧅', names: { en: 'Onion', ms: 'Bawang', zh: '洋葱', ko: '양파', ja: '玉ねぎ', ar: 'بصل', it: 'Cipolla', es: 'Cebolla', ru: 'Лук' } },
      { emoji: '🥔', names: { en: 'Potato', ms: 'Kentang', zh: '土豆', ko: '감자', ja: 'ジャガイモ', ar: 'بطاطس', it: 'Patata', es: 'Papa', ru: 'Картофель' } },
      { emoji: '🍠', names: { en: 'Sweet Potato', ms: 'Ubi Keledek', zh: '红薯', ko: '고구마', ja: 'サツマイモ', ar: 'بطاطا حلوة', it: 'Patata Dolce', es: 'Batata', ru: 'Сладкий Картофель' } },
      { emoji: '🍅', names: { en: 'Tomato', ms: 'Tomato', zh: '番茄', ko: '토마토', ja: 'トマト', ar: 'طماطم', it: 'Pomodoro', es: 'Tomate', ru: 'Помидор' } },
    ],
    'Protein & Meat': [
      { emoji: '🥓', names: { en: 'Bacon', ms: 'Bacon', zh: '培根', ko: '베이컨', ja: 'ベーコン', ar: 'لحم مقدد', it: 'Bacon', es: 'Tocino', ru: 'Бекон' } },
      { emoji: '🦴', names: { en: 'Bone', ms: 'Tulang', zh: '骨头', ko: '뼈', ja: '骨', ar: 'عظم', it: 'Osso', es: 'Hueso', ru: 'Кость' } },
      { emoji: '🍗', names: { en: 'Chicken', ms: 'Ayam', zh: '鸡肉', ko: '닭고기', ja: '鶏肉', ar: 'دجاج', it: 'Pollo', es: 'Pollo', ru: 'Курица' } },
      { emoji: '🥚', names: { en: 'Egg', ms: 'Telur', zh: '鸡蛋', ko: '달걀', ja: '卵', ar: 'بيض', it: 'Uovo', es: 'Huevo', ru: 'Яйцо' } },
      { emoji: '🧆', names: { en: 'Falafel', ms: 'Falafel', zh: '法拉费', ko: '팔라펠', ja: 'ファラフェル', ar: 'فلافل', it: 'Falafel', es: 'Falafel', ru: 'Фалафель' } },
      { emoji: '🍥', names: { en: 'Fish Cake', ms: 'Kek Ikan', zh: '鱼糕', ko: '어묵', ja: 'かまぼこ', ar: 'كعكة السمك', it: 'Torta di Pesce', es: 'Pastel de Pescado', ru: 'Рыбная Лепешка' } },
      { emoji: '🍳', names: { en: 'Fried Egg', ms: 'Telur Goreng', zh: '煎蛋', ko: '계란후라이', ja: '目玉焼き', ar: 'بيض مقلي', it: 'Uovo Fritto', es: 'Huevo Frito', ru: 'Жареное Яйцо' } },
      { emoji: '🍖', names: { en: 'Meat', ms: 'Daging', zh: '肉类', ko: '고기', ja: '肉', ar: 'لحم', it: 'Carne', es: 'Carne', ru: 'Мясо' } },
      { emoji: '🥜', names: { en: 'Peanuts', ms: 'Kacang Tanah', zh: '花生', ko: '땅콩', ja: 'ピーナッツ', ar: 'فول سوداني', it: 'Arachidi', es: 'Cacahuetes', ru: 'Арахис' } },
      { emoji: '🍤', names: { en: 'Shrimp', ms: 'Udang', zh: '虾', ko: '새우', ja: 'エビ', ar: 'جمبري', it: 'Gamberi', es: 'Camarón', ru: 'Креветки' } },
      { emoji: '🥩', names: { en: 'Steak', ms: 'Stik', zh: '牛排', ko: '스테이크', ja: 'ステーキ', ar: 'شريحة لحم', it: 'Bistecca', es: 'Filete', ru: 'Стейк' } },
    ],
    'Dairy & Cheese': [
      { emoji: '🧈', names: { en: 'Butter', ms: 'Mentega', zh: '黄油', ko: '버터', ja: 'バター', ar: 'زبدة', it: 'Burro', es: 'Mantequilla', ru: 'Масло' } },
      { emoji: '🧀', names: { en: 'Cheese', ms: 'Keju', zh: '奶酪', ko: '치즈', ja: 'チーズ', ar: 'جبن', it: 'Formaggio', es: 'Queso', ru: 'Сыр' } },
      { emoji: '🥛', names: { en: 'Milk', ms: 'Susu', zh: '牛奶', ko: '우유', ja: '牛乳', ar: 'حليب', it: 'Latte', es: 'Leche', ru: 'Молоко' } },
    ],
    'Grains & Bread': [
      { emoji: '🥯', names: { en: 'Bagel', ms: 'Bagel', zh: '百吉饼', ko: '베이글', ja: 'ベーグル', ar: 'بيغل', it: 'Bagel', es: 'Bagel', ru: 'Бейгл' } },
      { emoji: '🍞', names: { en: 'Bread', ms: 'Roti', zh: '面包', ko: '빵', ja: 'パン', ar: 'خبز', it: 'Pane', es: 'Pan', ru: 'Хлеб' } },
      { emoji: '🥐', names: { en: 'Croissant', ms: 'Croissant', zh: '羊角面包', ko: '크루아상', ja: 'クロワッサン', ar: 'كرواسون', it: 'Croissant', es: 'Croissant', ru: 'Круассан' } },
      { emoji: '🫓', names: { en: 'Flatbread', ms: 'Roti Pipih', zh: '薄饼', ko: '플랫브레드', ja: 'フラットブレッド', ar: 'خبز مسطح', it: 'Pane Piatto', es: 'Pan Plano', ru: 'Лепешка' } },
      { emoji: '🍜', names: { en: 'Noodles', ms: 'Mee', zh: '面条', ko: '국수', ja: '麺', ar: 'نودلز', it: 'Noodles', es: 'Fideos', ru: 'Лапша' } },
      { emoji: '🍝', names: { en: 'Pasta', ms: 'Pasta', zh: '意大利面', ko: '파스타', ja: 'パスタ', ar: 'مكرونة', it: 'Pasta', es: 'Pasta', ru: 'Паста' } },
      { emoji: '🥨', names: { en: 'Pretzel', ms: 'Pretzel', zh: '椒盐脆饼', ko: '프레첼', ja: 'プレッツェル', ar: 'بريتزل', it: 'Pretzel', es: 'Pretzel', ru: 'Крендель' } },
      { emoji: '🍚', names: { en: 'Rice', ms: 'Nasi', zh: '米饭', ko: '밥', ja: 'ご飯', ar: 'أرز', it: 'Riso', es: 'Arroz', ru: 'Рис' } },
      { emoji: '🍙', names: { en: 'Rice Ball', ms: 'Bola Nasi', zh: '饭团', ko: '주먹밥', ja: 'おにぎり', ar: 'كرة أرز', it: 'Polpetta di Riso', es: 'Bola de Arroz', ru: 'Рисовый Шарик' } },
      { emoji: '🍘', names: { en: 'Rice Cracker', ms: 'Keropok Nasi', zh: '米饼', ko: '쌀과자', ja: '煎餅', ar: 'بسكويت الأرز', it: 'Cracker di Riso', es: 'Galleta de Arroz', ru: 'Рисовый Крекер' } },
    ],
    'Beverages': [
      { emoji: '🍺', names: { en: 'Beer', ms: 'Bir', zh: '啤酒', ko: '맥주', ja: 'ビール', ar: 'بيرة', it: 'Birra', es: 'Cerveza', ru: 'Пиво' } },
      { emoji: '🍻', names: { en: 'Beer Mugs', ms: 'Mug Bir', zh: '啤酒杯', ko: '맥주잔', ja: 'ビールジョッキ', ar: 'أكواب البيرة', it: 'Boccali di Birra', es: 'Jarras de Cerveza', ru: 'Пивные Кружки' } },
      { emoji: '🧋', names: { en: 'Bubble Tea', ms: 'Teh Bubble', zh: '珍珠奶茶', ko: '버블티', ja: 'タピオカティー', ar: 'شاي الفقاعات', it: 'Bubble Tea', es: 'Té de Burbujas', ru: 'Пузырьковый Чай' } },
      { emoji: '🥂', names: { en: 'Champagne', ms: 'Champagne', zh: '香槟', ko: '샴페イン', ja: 'シャンパン', ar: 'شامبانيا', it: 'Champagne', es: 'Champán', ru: 'Шампанское' } },
      { emoji: '🍾', names: { en: 'Champagne Bottle', ms: 'Botol Champagne', zh: '香槟瓶', ko: '샴페인 병', ja: 'シャンパンボトル', ar: 'زجاجة شامبانيا', it: 'Bottiglia di Champagne', es: 'Botella de Champán', ru: 'Бутылка Шампанского' } },
      { emoji: '☕️', names: { en: 'Coffee', ms: 'Kopi', zh: '咖啡', ko: '커피', ja: 'コーヒー', ar: 'قهوة', it: 'Caffè', es: 'Café', ru: 'Кофе' } },
      { emoji: '🧃', names: { en: 'Juice Box', ms: 'Kotak Jus', zh: '果汁盒', ko: '주스박스', ja: 'ジュースボックス', ar: 'علبة عصير', it: 'Brick di Succo', es: 'Caja de Jugo', ru: 'Коробка Сока' } },
      { emoji: '🧉', names: { en: 'Mate', ms: 'Mate', zh: '马黛茶', ko: '마테차', ja: 'マテ茶', ar: 'مشروب المتة', it: 'Mate', es: 'Mate', ru: 'Мате' } },
      { emoji: '🥤', names: { en: 'Soft Drink', ms: 'Minuman Ringan', zh: '软饮料', ko: '탄산음료', ja: 'ソフトドリンク', ar: 'مشروب غازي', it: 'Bibita', es: 'Refresco', ru: 'Газировка' } },
      { emoji: '🍵', names: { en: 'Tea', ms: 'Teh', zh: '茶', ko: '차', ja: '茶', ar: 'شاي', it: 'Tè', es: 'Té', ru: 'Чай' } },
      { emoji: '🍹', names: { en: 'Tropical Drink', ms: 'Minuman Tropika', zh: '热带饮料', ko: '트로피컬 음료', ja: 'トロピカルドリンク', ar: 'مشروب استوائي', it: 'Drink Tropicale', es: 'Bebida Tropical', ru: 'Тропический Напиток' } },
      { emoji: '🥃', names: { en: 'Whiskey', ms: 'Wiski', zh: '威士忌', ko: '위스키', ja: 'ウイスキー', ar: 'ويسكي', it: 'Whiskey', es: 'Whisky', ru: 'Виски' } },
      { emoji: '🍷', names: { en: 'Wine', ms: 'Wain', zh: '红酒', ko: '와인', ja: 'ワイン', ar: 'نبيذ', it: 'Vino', es: 'Vino', ru: 'Вино' } },
    ],
    'Prepared Foods': [
      { emoji: '🍱', names: { en: 'Bento', ms: 'Bento', zh: '便当', ko: '도시락', ja: '弁当', ar: 'بينتو', it: 'Bento', es: 'Bento', ru: 'Бенто' } },
      { emoji: '🌯', names: { en: 'Burrito', ms: 'Burrito', zh: '卷饼', ko: '부리토', ja: 'ブリトー', ar: 'بوريتو', it: 'Burrito', es: 'Burrito', ru: 'Буррито' } },
      { emoji: '🍛', names: { en: 'Curry', ms: 'Kari', zh: '咖喱', ko: '카레', ja: 'カレー', ar: 'كاري', it: 'Curry', es: 'Curry', ru: 'Карри' } },
      { emoji: '🥟', names: { en: 'Dumpling', ms: 'Dumpling', zh: '饺子', ko: '만두', ja: '餃子', ar: 'زلابية', it: 'Raviolo', es: 'Dumpling', ru: 'Пельмень' } },
      { emoji: '🫕', names: { en: 'Fondue', ms: 'Fondue', zh: '火锅', ko: '퐁뒤', ja: 'フォンデュ', ar: 'فوندو', it: 'Fonduta', es: 'Fondue', ru: 'Фондю' } },
      { emoji: '🍟', names: { en: 'French Fries', ms: 'Kentang Goreng', zh: '薯条', ko: '감자튀김', ja: 'フライドポテト', ar: 'بطاطس مقلية', it: 'Patatine Fritte', es: 'Papas Fritas', ru: 'Картофель Фри' } },
      { emoji: '🍔', names: { en: 'Hamburger', ms: 'Hamburger', zh: '汉堡包', ko: '햄버거', ja: 'ハンバーガー', ar: 'همبرغر', it: 'Hamburger', es: 'Hamburguesa', ru: 'Гамбургер' } },
      { emoji: '🌭', names: { en: 'Hot Dog', ms: 'Hot Dog', zh: '热狗', ko: '핫도그', ja: 'ホットドッグ', ar: 'هوت دوج', it: 'Hot Dog', es: 'Perro Caliente', ru: 'Хот-дог' } },
      { emoji: '🥘', names: { en: 'Paella', ms: 'Paella', zh: '西班牙海鲜饭', ko: '빠에야', ja: 'パエリア', ar: 'بايلا', it: 'Paella', es: 'Paella', ru: 'Паэлья' } },
      { emoji: '🍕', names: { en: 'Pizza', ms: 'Pizza', zh: '披萨', ko: '피자', ja: 'ピザ', ar: 'بيتزا', it: 'Pizza', es: 'Pizza', ru: 'Пицца' } },
      { emoji: '🥗', names: { en: 'Salad', ms: 'Salad', zh: '沙拉', ko: '샐러드', ja: 'サラダ', ar: 'سلطة', it: 'Insalata', es: 'Ensalada', ru: 'Салат' } },
      { emoji: '🥪', names: { en: 'Sandwich', ms: 'Sandwic', zh: '三明治', ko: '샌드위치', ja: 'サンドイッチ', ar: 'ساندويتش', it: 'Panino', es: 'Sándwich', ru: 'Сэндвич' } },
      { emoji: '🍲', names: { en: 'Stew', ms: 'Sup', zh: '炖菜', ko: '스튜', ja: 'シチュー', ar: 'حساء', it: 'Stufato', es: 'Guiso', ru: 'Тушеное Блюдо' } },
      { emoji: '🍣', names: { en: 'Sushi', ms: 'Sushi', zh: '寿司', ko: '초밥', ja: '寿司', ar: 'سوشي', it: 'Sushi', es: 'Sushi', ru: 'Суши' } },
      { emoji: '🌮', names: { en: 'Taco', ms: 'Taco', zh: '墨西哥玉米饼', ko: '타코', ja: 'タコス', ar: 'تاكو', it: 'Taco', es: 'Taco', ru: 'Тако' } },
      { emoji: '🥡', names: { en: 'Takeout Box', ms: 'Kotak Bungkus', zh: '外卖盒', ko: '테이크아웃 박스', ja: 'テイクアウトボックス', ar: 'علبة طعام', it: 'Scatola da Asporto', es: 'Caja de Comida', ru: 'Коробка На Вынос' } },
      { emoji: '🫔', names: { en: 'Tamale', ms: 'Tamale', zh: '玉米粽', ko: '타말레', ja: 'タマレ', ar: 'تامالي', it: 'Tamale', es: 'Tamal', ru: 'Тамале' } },
      { emoji: '🥙', names: { en: 'Wrap', ms: 'Wrap', zh: '卷饼', ko: '랩', ja: 'ラップ', ar: 'لفافة', it: 'Wrap', es: 'Wrap', ru: 'Ролл' } },
    ],
    'Sweets & Desserts': [
      { emoji: '🎂', names: { en: 'Birthday Cake', ms: 'Kek Hari Jadi', zh: '生日蛋糕', ko: '생일케이크', ja: 'バースデーケーキ', ar: 'كعكة عيد ميلاد', it: 'Torta di Compleanno', es: 'Pastel de Cumpleaños', ru: 'Торт Дня Рождения' } },
      { emoji: '🍰', names: { en: 'Cake', ms: 'Kek', zh: '蛋糕', ko: '케이크', ja: 'ケーキ', ar: 'كعكة', it: 'Torta', es: 'Pastel', ru: 'Торт' } },
      { emoji: '🍬', names: { en: 'Candy', ms: 'Gula-gula', zh: '糖果', ko: '사탕', ja: 'キャンディー', ar: 'حلوى', it: 'Caramella', es: 'Dulce', ru: 'Конфета' } },
      { emoji: '🍫', names: { en: 'Chocolate', ms: 'Coklat', zh: '巧克力', ko: '초콜릿', ja: 'チョコレート', ar: 'شوكولاتة', it: 'Cioccolato', es: 'Chocolate', ru: 'Шоколад' } },
      { emoji: '🍪', names: { en: 'Cookie', ms: 'Biskut', zh: '饼干', ko: '쿠키', ja: 'クッキー', ar: 'بسكويت', it: 'Biscotto', es: 'Galleta', ru: 'Печенье' } },
      { emoji: '🧁', names: { en: 'Cupcake', ms: 'Cupcake', zh: '纸杯蛋糕', ko: '컵케이크', ja: 'カップケーキ', ar: 'كب كيك', it: 'Cupcake', es: 'Magdalena', ru: 'Кекс' } },
      { emoji: '🍮', names: { en: 'Custard', ms: 'Kastard', zh: '蛋挞', ko: '커스터드', ja: 'カスタード', ar: 'كاسترد', it: 'Crema', es: 'Flan', ru: 'Заварной Крем' } },
      { emoji: '🍡', names: { en: 'Dango', ms: 'Dango', zh: '团子', ko: '당고', ja: '団子', ar: 'دانغو', it: 'Dango', es: 'Dango', ru: 'Данго' } },
      { emoji: '🍩', names: { en: 'Donut', ms: 'Donat', zh: '甜甜圈', ko: '도넛', ja: 'ドーナツ', ar: 'دونات', it: 'Ciambella', es: 'Dona', ru: 'Пончик' } },
      { emoji: '🥠', names: { en: 'Fortune Cookie', ms: 'Biskut Nasib', zh: '幸运饼干', ko: '포춘쿠키', ja: 'フォーチュンクッキー', ar: 'بسكويت الحظ', it: 'Biscotto della Fortuna', es: 'Galleta de la Fortuna', ru: 'Печенье Удачи' } },
      { emoji: '🍯', names: { en: 'Honey', ms: 'Madu', zh: '蜂蜜', ko: '꿀', ja: 'ハチミツ', ar: 'عسل', it: 'Miele', es: 'Miel', ru: 'Мед' } },
      { emoji: '🍨', names: { en: 'Ice Cream', ms: 'Ais Krim', zh: '冰淇淋', ko: '아이스크림', ja: 'アイスクリーム', ar: 'آيس كريم', it: 'Gelato', es: 'Helado', ru: 'Мягкое Мороженое' } },
      { emoji: '🍭', names: { en: 'Lollipop', ms: 'Lolipop', zh: '棒棒糖', ko: '막대사탕', ja: 'ロリポップ', ar: 'مصاصة', it: 'Lecca-lecca', es: 'Piruleta', ru: 'Леденец' } },
      { emoji: '🥮', names: { en: 'Moon Cake', ms: 'Kek Bulan', zh: '月饼', ko: '월병', ja: '月餅', ar: 'كعكة القمر', it: 'Torta della Luna', es: 'Pastel de Luna', ru: 'Лунный Пирог' } },
      { emoji: '🥞', names: { en: 'Pancakes', ms: 'Penkek', zh: '煎饼', ko: '팬케이크', ja: 'パンケーキ', ar: 'فطائر', it: 'Pancake', es: 'Panqueques', ru: 'Блины' } },
      { emoji: '🥧', names: { en: 'Pie', ms: 'Pai', zh: '馅饼', ko: '파이', ja: 'パイ', ar: 'فطيرة', it: 'Torta', es: 'Pastel', ru: 'Пирог' } },
      { emoji: '🍿', names: { en: 'Popcorn', ms: 'Popcorn', zh: '爆米花', ko: '팝콘', ja: 'ポップコーン', ar: 'فشار', it: 'Popcorn', es: 'Palomitas', ru: 'Попкорн' } },
      { emoji: '🍧', names: { en: 'Shaved Ice', ms: 'Ais Campur', zh: '刨冰', ko: '빙수', ja: 'かき氷', ar: 'ثلج مبشور', it: 'Granita', es: 'Raspado', ru: 'Колотый Лед' } },
      { emoji: '🍦', names: { en: 'Soft Ice Cream', ms: 'Ais Krim Lembut', zh: '软冰淇淋', ko: '소프트 아이스크림', ja: 'ソフトクリーム', ar: 'آيس كريم ناعم', it: 'Gelato Soft', es: 'Helado Suave', ru: 'Мягкое Мороженое' } },
      { emoji: '🧇', names: { en: 'Waffle', ms: 'Wafel', zh: '华夫饼', ko: '와플', ja: 'ワッフル', ar: 'وافل', it: 'Waffle', es: 'Gofre', ru: 'Вафля' } },
    ],
    'Other': [
      { emoji: '🥣', names: { en: 'Bowl', ms: 'Mangkuk', zh: '碗', ko: '그릇', ja: 'ボウル', ar: 'وعاء', it: 'Ciotola', es: 'Tazón', ru: 'Миска' } },
      { emoji: '🥫', names: { en: 'Canned Food', ms: 'Makanan Tin', zh: '罐头食品', ko: '통조림', ja: '缶詰', ar: 'طعام معلب', it: 'Cibo in Scatola', es: 'Comida Enlatada', ru: 'Консервы' } },
      { emoji: '🥢', names: { en: 'Chopsticks', ms: 'Penyepit', zh: '筷子', ko: '젓가락', ja: '箸', ar: 'عيدان الطعام', it: 'Bacchette', es: 'Palillos', ru: 'Палочки' } },
      { emoji: '🍴', names: { en: 'Fork and Knife', ms: 'Garpu dan Pisau', zh: '刀叉', ko: '포크와 나이프', ja: 'フォークとナイフ', ar: 'شوكة وسكين', it: 'Forchetta e Coltello', es: 'Tenedor y Cuchillo', ru: 'Вилка и Нож' } },
      { emoji: '🧊', names: { en: 'Ice', ms: 'Ais', zh: '冰块', ko: '얼음', ja: '氷', ar: 'ثلج', it: 'Ghiaccio', es: 'Hielo', ru: 'Лед' } },
      { emoji: '🫙', names: { en: 'Jar', ms: 'Balang', zh: '罐子', ko: '항아리', ja: '瓶', ar: 'برطمان', it: 'Barattolo', es: 'Frasco', ru: 'Банка' } },
      { emoji: '🦪', names: { en: 'Oyster', ms: 'Tiram', zh: '牡蛎', ko: '굴', ja: '牡蠣', ar: 'محار', it: 'Ostrica', es: 'Ostra', ru: 'Устрица' } },
      { emoji: '🍽', names: { en: 'Plate', ms: 'Pinggan', zh: '盘子', ko: '접시', ja: '皿', ar: 'طبق', it: 'Piatto', es: 'Plato', ru: 'Тарелка' } },
      { emoji: '🫗', names: { en: 'Pouring Liquid', ms: 'Menuang Cecair', zh: '倾倒液体', ko: '액체 붓기', ja: '液体を注ぐ', ar: 'سكب السائل', it: 'Versare Liquido', es: 'Verter Líquido', ru: 'Наливание Жидкости' } },
      { emoji: '🍶', names: { en: 'Sake', ms: 'Sake', zh: '清酒', ko: '사케', ja: '日本酒', ar: 'ساكي', it: 'Sake', es: 'Sake', ru: 'Саке' } },
      { emoji: '🧂', names: { en: 'Salt', ms: 'Garam', zh: '盐', ko: '소금', ja: '塩', ar: 'ملح', it: 'Sale', es: 'Sal', ru: 'Соль' } },
      { emoji: '🥄', names: { en: 'Spoon', ms: 'Sudu', zh: '勺子', ko: '숟가락', ja: 'スプーン', ar: 'ملعقة', it: 'Cucchiaio', es: 'Cuchara', ru: 'Ложка' } },
      { emoji: '🫖', names: { en: 'Teapot', ms: 'Teko', zh: '茶壶', ko: '찻주전자', ja: '急須', ar: 'إبريق الشاي', it: 'Teiera', es: 'Tetera', ru: 'Чайник' } },
    ],
  };

  const getFilteredCategories = () => {
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
  };

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

  const filteredCategories = getFilteredCategories();
  const t = translations[language];

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Plus size={20} />
            {t.title}
          </CardTitle>
          <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
            <SelectTrigger className="w-[200px]">
              <Globe size={16} className="mr-2" />
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
                    <div key={`${item.names.en}-${index}`} className="flex items-center gap-3 p-3">
                      <div className="text-lg flex-shrink-0">{item.emoji}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{item.names[language]}</div>
                        <Input
                          placeholder={t.placeholder}
                          value={units[item.names[language]] || ''}
                          onChange={(e) => handleUnitChange(item.names[language], e.target.value)}
                          className="h-8 mt-1"
                        />
                      </div>
                    </div>
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
