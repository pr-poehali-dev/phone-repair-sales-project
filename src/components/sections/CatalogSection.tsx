import { useState } from 'react';
import Icon from '@/components/ui/icon';

const CATEGORIES = ['Все', 'Смартфоны', 'Аксессуары', 'Запчасти', 'Планшеты'];

const PRODUCTS = [
  {
    name: 'iPhone 15 128GB',
    category: 'Смартфоны',
    price: '89 990 ₽',
    badge: 'В наличии',
    badgeColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    img: '📱',
  },
  {
    name: 'Samsung Galaxy S24',
    category: 'Смартфоны',
    price: '74 990 ₽',
    badge: 'В наличии',
    badgeColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    img: '📱',
  },
  {
    name: 'Xiaomi Redmi Note 13',
    category: 'Смартфоны',
    price: '24 990 ₽',
    badge: 'Хит',
    badgeColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    img: '📱',
  },
  {
    name: 'Чехол кожаный iPhone 15',
    category: 'Аксессуары',
    price: '1 990 ₽',
    badge: 'В наличии',
    badgeColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    img: '🛡️',
  },
  {
    name: 'Беспроводная зарядка 15W',
    category: 'Аксессуары',
    price: '2 490 ₽',
    badge: 'Популярное',
    badgeColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    img: '🔋',
  },
  {
    name: 'Кабель USB-C 2м',
    category: 'Аксессуары',
    price: '690 ₽',
    badge: 'В наличии',
    badgeColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    img: '🔌',
  },
  {
    name: 'Экран iPhone 14 OLED',
    category: 'Запчасти',
    price: '8 500 ₽',
    badge: 'Оригинал',
    badgeColor: 'text-primary bg-primary/10 border-primary/20',
    img: '🖥️',
  },
  {
    name: 'Аккумулятор Samsung S22',
    category: 'Запчасти',
    price: '2 200 ₽',
    badge: 'Оригинал',
    badgeColor: 'text-primary bg-primary/10 border-primary/20',
    img: '🔋',
  },
  {
    name: 'iPad Air M2 256GB',
    category: 'Планшеты',
    price: '79 990 ₽',
    badge: 'В наличии',
    badgeColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    img: '📲',
  },
];

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filtered = activeCategory === 'Все'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <div className="section-divider" />
            <p className="text-xs font-body uppercase tracking-widest text-primary mb-3">Магазин</p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground">КАТАЛОГ</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs font-medium px-4 py-2 border transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {filtered.map((product, i) => (
            <div key={i} className="bg-background p-6 card-hover group">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{product.img}</div>
                <span className={`text-xs font-body font-medium px-2 py-0.5 border ${product.badgeColor}`}>
                  {product.badge}
                </span>
              </div>
              <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
              <h3 className="font-body font-medium text-foreground mb-3">{product.name}</h3>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="font-display text-xl font-semibold text-foreground">{product.price}</span>
                <button className="flex items-center gap-1.5 text-xs font-body font-medium text-primary hover:text-primary/80 transition-colors">
                  <Icon name="ShoppingCart" size={14} />
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="border border-border text-muted-foreground font-body text-sm font-medium px-8 py-3 hover:bg-secondary hover:text-foreground transition-colors flex items-center gap-2 mx-auto">
            <Icon name="Package" size={16} />
            Показать все товары
          </button>
        </div>
      </div>
    </section>
  );
}
