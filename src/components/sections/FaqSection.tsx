import { useState } from 'react';
import Icon from '@/components/ui/icon';

const FAQS = [
  {
    q: 'Сколько стоит диагностика?',
    a: 'Диагностика бесплатна при заказе ремонта. Если вы решили не ремонтировать устройство, стоимость диагностики составит 300–500 ₽ в зависимости от сложности.',
  },
  {
    q: 'Как долго длится ремонт?',
    a: 'Большинство ремонтов выполняем за 30–90 минут. Сложные случаи (восстановление платы, ремонт после воды) могут занять до 3 дней.',
  },
  {
    q: 'Даёте ли гарантию на ремонт?',
    a: 'Да, мы даём гарантию 6 месяцев на все виды работ. При возникновении той же проблемы — устраняем бесплатно.',
  },
  {
    q: 'Используете ли вы оригинальные запчасти?',
    a: 'Работаем только с сертифицированными поставщиками. Используем оригинальные запчасти или качественные совместимые аналоги — по согласованию с клиентом.',
  },
  {
    q: 'Можно ли оставить телефон на несколько дней?',
    a: 'Да. Принимаем устройства на длительное хранение с выдачей квитанции. Телефон застрахован на время ремонта.',
  },
  {
    q: 'Работаете ли вы в выходные?',
    a: 'Да, работаем 7 дней в неделю с 9:00 до 20:00. Принимаем заказы без выходных и праздников.',
  },
  {
    q: 'Как отследить статус ремонта?',
    a: 'После сдачи устройства вы получаете номер заказа. По нему можно узнать статус у нас в сервисе, по телефону или в чате.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="section-divider" />
            <p className="text-xs font-body uppercase tracking-widest text-primary mb-3">Вопросы</p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-6">FAQ</h2>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
              Не нашли ответ на свой вопрос? Позвоните нам или напишите в чат.
            </p>
            <a
              href="tel:+79001234567"
              className="flex items-center gap-2 text-primary font-body text-sm font-medium hover:opacity-80 transition-opacity"
            >
              <Icon name="Phone" size={16} />
              +7 (900) 123-45-67
            </a>
          </div>

          <div className="lg:col-span-2 divide-y divide-border border-t border-border">
            {FAQS.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left group"
                >
                  <span className={`font-body font-medium text-sm transition-colors ${open === i ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                    {faq.q}
                  </span>
                  <Icon
                    name={open === i ? 'ChevronUp' : 'ChevronDown'}
                    size={16}
                    className={`shrink-0 ml-4 transition-colors ${open === i ? 'text-primary' : 'text-muted-foreground'}`}
                  />
                </button>
                {open === i && (
                  <div className="pb-4">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
