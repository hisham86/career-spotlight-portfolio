
import { Language } from '@/types/grocery';

export const languages: Record<Language, string> = {
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

export const translations: Record<Language, {
  title: string;
  search: string;
  addSelected: string;
  placeholder: string;
}> = {
  en: {
    title: 'Grocery List Generator',
    search: 'Find emojis by name or description...',
    addSelected: 'Add Selected',
    placeholder: '2 kg, 1 bunch'
  },
  ms: {
    title: 'Penjana Senarai Runcit',
    search: 'Cari emoji mengikut nama atau penerangan...',
    addSelected: 'Tambah Yang Dipilih',
    placeholder: '2 kg, 1 ikat'
  },
  zh: {
    title: '购物清单生成器',
    search: '按名称或描述查找表情符号...',
    addSelected: '添加所选',
    placeholder: '2公斤，1束'
  },
  ko: {
    title: '장보기 목록 생성기',
    search: '이름이나 설명으로 이모지 찾기...',
    addSelected: '선택한 항목 추가',
    placeholder: '2kg, 1다발'
  },
  ja: {
    title: '買い物リスト生成器',
    search: '名前や説明で絵文字を検索...',
    addSelected: '選択したものを追加',
    placeholder: '2kg、1束'
  },
  ar: {
    title: 'مولد قائمة البقالة',
    search: 'البحث عن الرموز التعبيرية بالاسم أو الوصف...',
    addSelected: 'إضافة المحدد',
    placeholder: '2 كيلو، 1 حزمة'
  },
  it: {
    title: 'Generatore Lista Spesa',
    search: 'Trova emoji per nome o descrizione...',
    addSelected: 'Aggiungi Selezionati',
    placeholder: '2 kg, 1 mazzo'
  },
  es: {
    title: 'Generador de Lista de Compras',
    search: 'Buscar emojis por nombre o descripción...',
    addSelected: 'Agregar Seleccionados',
    placeholder: '2 kg, 1 manojo'
  },
  ru: {
    title: 'Генератор Списка Покупок',
    search: 'Найти эмодзи по названию или описанию...',
    addSelected: 'Добавить Выбранные',
    placeholder: '2 кг, 1 пучок'
  }
};
