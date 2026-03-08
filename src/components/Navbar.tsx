import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const NAV_ITEMS = [
  { id: 'home', label: 'Главная' },
  { id: 'services', label: 'Услуги' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'about', label: 'О компании' },
  { id: 'faq', label: 'FAQ' },
  { id: 'blog', label: 'Блог' },
  { id: 'contacts', label: 'Контакты' },
];

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <button onClick={() => handleNav('home')} className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary flex items-center justify-center">
            <Icon name="Wrench" size={16} className="text-white" />
          </div>
          <span className="font-display text-lg font-semibold tracking-wide text-foreground">
            DOCTOR <span className="text-primary">GSM</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`nav-link text-sm font-body font-medium tracking-wide transition-colors pb-0.5 ${
                activeSection === item.id
                  ? 'text-primary active'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+79001234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="Phone" size={14} />
            <span className="font-body">+7 (900) 123-45-67</span>
          </a>
          <button
            onClick={() => handleNav('contacts')}
            className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 hover:bg-primary/90 transition-colors"
          >
            Записаться
          </button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-card border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left py-2.5 px-3 text-sm font-body font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-border mt-2">
              <a href="tel:+79001234567" className="flex items-center gap-2 py-2.5 px-3 text-sm text-muted-foreground">
                <Icon name="Phone" size={14} />
                +7 (900) 123-45-67
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}