import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import { navPointe, categoryHubCards } from '../data/products'

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
            <CategoryCard key={category.key} category={category} />
          ))}
        </div>
      </section>
    </div>
  )
}
