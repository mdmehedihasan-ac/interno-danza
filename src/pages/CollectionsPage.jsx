import CategoryCard from '../components/CategoryCard'
import { categoryHubCards, navCollections } from '../data/products'

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
