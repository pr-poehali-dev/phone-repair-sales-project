import Icon from '@/components/ui/icon';

const POSTS = [
  {
    tag: 'Советы',
    date: '05 марта 2026',
    title: 'Как продлить срок службы аккумулятора смартфона',
    excerpt: 'Разбираем главные мифы о зарядке телефона и объясняем, как правильно ухаживать за батареей.',
    readTime: '4 мин',
  },
  {
    tag: 'Ремонт',
    date: '28 февраля 2026',
    title: 'Что делать, если телефон упал в воду: пошаговая инструкция',
    excerpt: 'Первые 10 минут после попадания воды критически важны. Рассказываем, что нужно сделать сразу.',
    readTime: '6 мин',
  },
  {
    tag: 'Обзор',
    date: '20 февраля 2026',
    title: 'Сравнение: iPhone 15 против Samsung Galaxy S24',
    excerpt: 'Подробное сравнение двух флагманов 2024 года по камере, производительности и цене.',
    readTime: '8 мин',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <div className="section-divider" />
            <p className="text-xs font-body uppercase tracking-widest text-primary mb-3">Статьи</p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground">БЛОГ</h2>
          </div>
          <button className="flex items-center gap-2 font-body text-sm text-primary hover:opacity-80 transition-opacity self-start lg:self-auto">
            Все статьи
            <Icon name="ArrowRight" size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {POSTS.map((post, i) => (
            <article key={i} className="bg-card p-6 card-hover group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="badge-blue text-xs font-body px-2.5 py-0.5">{post.tag}</span>
                <span className="text-xs font-body text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <Icon name="Clock" size={12} className="text-muted-foreground" />
                <span className="text-xs font-body text-muted-foreground">{post.readTime} чтения</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
