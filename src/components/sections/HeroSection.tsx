import Icon from '@/components/ui/icon';

const STATS = [
  { value: '8 лет', label: 'на рынке' },
  { value: '12 000+', label: 'ремонтов' },
  { value: '30 мин', label: 'среднее время' },
  { value: '100%', label: 'гарантия' },
];

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-1/2 h-full overflow-hidden opacity-20">
          <img
            src="https://cdn.poehali.dev/projects/881d0178-6173-49da-a766-d87374826229/files/49844e3e-4b7c-46a6-9afc-a2ebf27d6b97.jpg"
            alt="Ремонт телефонов"
            className="w-full h-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-up animate-delay-100">
            <div className="badge-blue text-xs font-body font-medium px-3 py-1 tracking-wider uppercase">
              Сервисный центр
            </div>
            <div className="h-px flex-1 max-w-[60px] bg-primary/40" />
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-semibold leading-none tracking-wide mb-6 animate-fade-up animate-delay-200">
            РЕМОНТ<br />
            <span className="text-gradient">ТЕЛЕФОНОВ</span><br />
            <span className="text-foreground/60 text-4xl lg:text-5xl">И ПРОДАЖА</span>
          </h1>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg animate-fade-up animate-delay-300">
            Профессиональный сервис с гарантией. Ремонтируем любые смартфоны,
            планшеты и ноутбуки. Оригинальные запчасти и аксессуары в наличии.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up animate-delay-400">
            <button
              onClick={() => onNavigate('contacts')}
              className="bg-primary text-primary-foreground font-body font-medium px-6 py-3.5 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <Icon name="Calendar" size={16} />
              Записаться на ремонт
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="border border-border text-foreground font-body font-medium px-6 py-3.5 hover:bg-secondary transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <Icon name="ChevronRight" size={16} />
              Все услуги
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 mt-16 border border-border animate-fade-up animate-delay-500">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`px-6 py-5 ${i < STATS.length - 1 ? 'border-r border-border' : ''}`}
            >
              <div className="font-display text-3xl font-semibold text-primary">{stat.value}</div>
              <div className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
