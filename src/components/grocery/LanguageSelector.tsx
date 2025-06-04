
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';

type Language = 'en' | 'ms' | 'zh' | 'ko' | 'ja' | 'ar' | 'it' | 'es' | 'ru';

interface LanguageSelectorProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

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

const LanguageSelector = ({ language, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <Select value={language} onValueChange={(value: Language) => onLanguageChange(value)}>
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
  );
};

export default LanguageSelector;
export type { Language };
