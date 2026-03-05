import { Link } from 'react-router-dom'
import { navPointe } from '../data/products'
import { categoryHubCards } from '../data/products'

export default function PointeBalletPage() {
  const cards = categoryHubCards.filter((c) => c.group === 'pointe')

  return (
    <div className="pt-20 pb-24 bg-stone-50">
      {/* Header */}
      <section className="pt-20 pb-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-5 font-light">
            Scarpe e Accessori
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 leading-snug mb-7">
            Pointe e Ballet Shoes
          </h1>
          <div className="w-12 h-px bg-stone-300 mx-auto mb-7" />
          <p className="text-sm text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
            La nostra selezione di scarpe da punta, mezzepunte, jazz, modern e da ballo. Fitting professionale disponibile in negozio.
          </p>
        </div>
      </section>

      {/* Quick links bar */}
      <section className="px-8 mb-14">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {navPointe.items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-[10px] tracking-[0.26em] uppercase text-stone-600 border border-stone-300 px-5 py-2.5 hover:border-[#c3197a] hover:text-[#c3197a] transition-colors duration-300 font-light"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Category cards */}
      <section className="px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((category) => (
            <article key={category.key} className="bg-white border border-stone-200 overflow-hidden group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/55 via-stone-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/70 font-light mb-2">Categoria</p>
                  <h2 className="font-serif text-3xl leading-tight">{category.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-stone-600 font-light leading-relaxed mb-6">{category.subtitle}</p>
                <Link
                  to={category.path}
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-stone-900 border-b border-stone-900/50 pb-0.5 hover:text-stone-500 hover:border-stone-500 transition-colors duration-300 font-light"
                >
                  Apri categoria
                  <span className="text-base leading-none">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
