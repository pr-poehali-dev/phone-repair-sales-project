import Icon from '@/components/ui/icon';

const ADVANTAGES = [
  { icon: 'Award', title: 'Сертифицированные мастера', desc: 'Каждый специалист прошёл обучение и имеет сертификаты производителей' },
  { icon: 'Clock', title: 'Быстрый ремонт', desc: 'Большинство ремонтов выполняем за 30–60 минут при вас' },
  { icon: 'Shield', title: 'Гарантия 6 месяцев', desc: 'Даём гарантию на все виды работ и установленные запчасти' },
  { icon: 'Package', title: 'Оригинальные запчасти', desc: 'Работаем только с сертифицированными поставщиками оригинальных компонентов' },
];

const TEAM = [
  { name: 'Алексей Петров', role: 'Главный инженер', exp: '10 лет' },
  { name: 'Мария Кузнецова', role: 'Старший техник', exp: '7 лет' },
  { name: 'Дмитрий Волков', role: 'Специалист по Apple', exp: '5 лет' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="section-divider" />
            <p className="text-xs font-body uppercase tracking-widest text-primary mb-3">Кто мы</p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-6">О КОМПАНИИ</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Doctor GSM — профессиональный сервисный центр с 2016 года. Мы специализируемся
              на ремонте смартфонов, планшетов и ноутбуков всех марок. За это время
              выполнили более 12 000 успешных ремонтов.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Работаем официально, выдаём гарантийные талоны. Наши мастера постоянно
              проходят обучение и сертификацию у производителей.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Официальный сервисный партнёр Samsung и Xiaomi',
                'Сертифицированные специалисты по Apple',
                'Бесплатная диагностика при заказе ремонта',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon name="Check" size={14} className="text-primary shrink-0" />
                  <span className="font-body text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/881d0178-6173-49da-a766-d87374826229/files/49844e3e-4b7c-46a6-9afc-a2ebf27d6b97.jpg"
              alt="Сервисный центр"
              className="w-full h-80 object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary p-5">
              <div className="font-display text-3xl font-bold text-white">8+</div>
              <div className="font-body text-xs text-white/80 uppercase tracking-wide">лет работы</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-16">
          {ADVANTAGES.map((adv, i) => (
            <div key={i} className="bg-card p-6">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={adv.icon} size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-base font-medium text-foreground mb-2">{adv.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8">НАША КОМАНДА</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TEAM.map((member, i) => (
              <div key={i} className="border border-border p-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center shrink-0">
                  <Icon name="User" size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="font-body font-semibold text-foreground text-sm">{member.name}</div>
                  <div className="font-body text-xs text-muted-foreground">{member.role}</div>
                  <div className="font-body text-xs text-primary mt-1">Опыт: {member.exp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}