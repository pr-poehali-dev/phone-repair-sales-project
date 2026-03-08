import Icon from '@/components/ui/icon';

const SERVICES = [
  {
    icon: 'Smartphone',
    title: 'Ремонт смартфонов',
    desc: 'Замена экрана, аккумулятора, разъёма зарядки, кнопок. Все марки и модели.',
    price: 'от 500 ₽',
    time: '30–60 мин',
  },
  {
    icon: 'Monitor',
    title: 'Ремонт планшетов',
    desc: 'Восстановление дисплея, замена батареи, ремонт корпуса и платы.',
    price: 'от 800 ₽',
    time: '1–2 часа',
  },
  {
    icon: 'Laptop',
    title: 'Ремонт ноутбуков',
    desc: 'Чистка, замена термопасты, восстановление клавиатуры, жёсткого диска.',
    price: 'от 1 200 ₽',
    time: '2–4 часа',
  },
  {
    icon: 'Battery',
    title: 'Замена аккумулятора',
    desc: 'Оригинальные аккумуляторы с гарантией 12 месяцев. Быстрая замена.',
    price: 'от 700 ₽',
    time: '20–40 мин',
  },
  {
    icon: 'Droplets',
    title: 'Ремонт после воды',
    desc: 'Ультразвуковая чистка, восстановление платы, сушка и диагностика.',
    price: 'от 1 500 ₽',
    time: '1–3 часа',
  },
  {
    icon: 'Shield',
    title: 'Диагностика',
    desc: 'Полная диагностика устройства. При заказе ремонта — бесплатно.',
    price: '0 – 500 ₽',
    time: '15–30 мин',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <div className="section-divider" />
          <p className="text-xs font-body uppercase tracking-widest text-primary mb-3">Что мы делаем</p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground">НАШИ УСЛУГИ</h2>
          <p className="font-body text-muted-foreground mt-3 max-w-md">
            Профессиональный ремонт с гарантией. Работаем с любыми устройствами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="bg-card p-6 card-hover group cursor-pointer"
            >
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name={service.icon} size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-body text-sm font-semibold text-primary">{service.price}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Icon name="Clock" size={12} />
                  {service.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 border border-primary/20 bg-primary/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Icon name="Info" size={18} className="text-primary shrink-0" />
            <p className="font-body text-sm text-muted-foreground">
              Точная стоимость определяется после диагностики. Даём гарантию на все виды работ.
            </p>
          </div>
          <span className="badge-blue text-xs font-body px-3 py-1 shrink-0">Гарантия 6 мес.</span>
        </div>
      </div>
    </section>
  );
}