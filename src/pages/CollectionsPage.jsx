import { Link } from 'react-router-dom'
import { categoryHubCards, navCollections } from '../data/products'

function CategoryCard({ category }) {
  return (
    <article className="bg-white border border-stone-200 overflow-hidden group">
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
  )
}

export default function CollectionsPage() {
  const womenCards = categoryHubCards.filter((c) =>
    navCollections.women.items.some((i) => i.path === c.path)
  )
  const otherCards = categoryHubCards.filter((c) =>
    navCollections.topLevel.some((i) => i.path === c.path)
  )

  return (
    <div className="pt-20 pb-24 bg-stone-50">
      {/* Header */}
      <section className="pt-20 pb-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-5 font-light">
            Abbigliamento e Accessori
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 leading-snug mb-7">
            Collections
          </h1>
          <div className="w-12 h-px bg-stone-300 mx-auto" />
        </div>
      </section>

      {/* Women */}
      <section className="px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <h2 className="font-serif text-2xl text-stone-900">Women</h2>
            <div className="flex-1 h-px bg-stone-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {womenCards.map((category) => (
              <CategoryCard key={category.key} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Girls + Men */}
      <section className="px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <h2 className="font-serif text-2xl text-stone-900">Girls &amp; Men</h2>
            <div className="flex-1 h-px bg-stone-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {otherCards.map((category) => (
              <CategoryCard key={category.key} category={category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
