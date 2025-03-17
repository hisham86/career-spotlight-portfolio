
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle = ({ title, subtitle, align = 'left' }: SectionTitleProps) => {
  const ref = useScrollReveal<HTMLDivElement>();
  
  return (
    <div
      ref={ref}
      className={`reveal-text mb-12 ${
        align === 'center'
          ? 'text-center'
          : align === 'right'
          ? 'text-right'
          : 'text-left'
      }`}
    >
      {subtitle && (
        <p className="inline-block mb-2 px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
