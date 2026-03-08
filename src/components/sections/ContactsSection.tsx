import { useState } from 'react';
import Icon from '@/components/ui/icon';

const CONTACT_INFO = [
  { icon: 'MapPin', label: 'Адрес', value: 'ул. Ленина, 42, офис 101', sub: 'Центральный район' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (900) 123-45-67', sub: 'Ежедневно 9:00–20:00' },
  { icon: 'Mail', label: 'Email', value: 'info@technoservice.ru', sub: 'Ответим в течение часа' },
  { icon: 'Clock', label: 'График', value: 'Пн–Вс: 9:00–20:00', sub: 'Без выходных' },
];

export default function ContactsSection() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', comment: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <div className="section-divider" />
          <p className="text-xs font-body uppercase tracking-widest text-primary mb-3">Связь</p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground">КОНТАКТЫ</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border mb-8">
              {CONTACT_INFO.map((info, i) => (
                <div key={i} className="bg-background p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={info.icon} size={14} className="text-primary" />
                    <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{info.label}</span>
                  </div>
                  <div className="font-body font-medium text-foreground text-sm">{info.value}</div>
                  <div className="font-body text-xs text-muted-foreground mt-0.5">{info.sub}</div>
                </div>
              ))}
            </div>

            <div className="border border-border bg-background h-52 flex items-center justify-center">
              <div className="text-center">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-2" />
                <p className="font-body text-sm text-muted-foreground">Карта</p>
                <p className="font-body text-xs text-muted-foreground">ул. Ленина, 42</p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              {[
                { icon: 'MessageCircle', label: 'WhatsApp' },
                { icon: 'Send', label: 'Telegram' },
                { icon: 'Phone', label: 'Позвонить' },
              ].map((social, i) => (
                <button
                  key={i}
                  className="flex items-center gap-2 border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 font-body text-xs font-medium px-4 py-2.5 transition-all"
                >
                  <Icon name={social.icon} size={14} />
                  {social.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="border border-border bg-background p-6 lg:p-8">
              <h3 className="font-display text-xl font-medium text-foreground mb-6">ЗАПИСАТЬСЯ НА РЕМОНТ</h3>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="CheckCircle" size={24} className="text-primary" />
                  </div>
                  <div className="font-display text-lg text-foreground mb-2">Заявка принята!</div>
                  <p className="font-body text-sm text-muted-foreground">Мы перезвоним вам в течение 15 минут.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full bg-secondary border border-border text-foreground font-body text-sm px-3 py-2.5 outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-secondary border border-border text-foreground font-body text-sm px-3 py-2.5 outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Услуга</label>
                    <select
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-secondary border border-border text-foreground font-body text-sm px-3 py-2.5 outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Выбрать...</option>
                      <option>Ремонт смартфона</option>
                      <option>Замена экрана</option>
                      <option>Замена аккумулятора</option>
                      <option>Ремонт после воды</option>
                      <option>Ремонт планшета</option>
                      <option>Ремонт ноутбука</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground uppercase tracking-wider block mb-1.5">Комментарий</label>
                    <textarea
                      value={form.comment}
                      onChange={e => setForm({ ...form, comment: e.target.value })}
                      placeholder="Опишите проблему..."
                      rows={3}
                      className="w-full bg-secondary border border-border text-foreground font-body text-sm px-3 py-2.5 outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground font-body font-medium text-sm py-3 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Icon name="Send" size={14} />
                    Отправить заявку
                  </button>
                  <p className="font-body text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
