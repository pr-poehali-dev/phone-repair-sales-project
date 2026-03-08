import Icon from '@/components/ui/icon';

interface FooterProps {
  onNavigate: (id: string) => void;
}

const LINKS = [
  { id: 'home', label: 'Главная' },
  { id: 'services', label: 'Услуги' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'about', label: 'О компании' },
  { id: 'faq', label: 'FAQ' },
  { id: 'blog', label: 'Блог' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <Icon name="Wrench" size={16} className="text-white" />
              </div>
              <span className="font-display text-lg font-semibold tracking-wide text-foreground">
                DOCTOR <span className="text-primary">GSM</span>
              </span>
            </button>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Профессиональный ремонт и продажа телефонов с 2016 года. Гарантия на все виды работ.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Разделы</h4>
            <div className="flex flex-col gap-2">
              {LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Контакты</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={14} className="text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-muted-foreground">ул. Ленина, 42, офис 101</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={14} className="text-primary shrink-0" />
                <a href="tel:+79001234567" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +7 (900) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={14} className="text-primary shrink-0" />
                <a href="mailto:info@technoservice.ru" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  info@technoservice.ru
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={14} className="text-primary shrink-0" />
                <span className="font-body text-sm text-muted-foreground">Пн–Вс: 9:00–20:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Doctor GSM. Все права защищены.
          </p>
          <div className="flex gap-4">
            <button className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </button>
            <button className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
              Публичная оферта
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}