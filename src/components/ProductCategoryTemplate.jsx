import { Link } from 'react-router-dom'
import { createWhatsAppLink } from '../utils/whatsapp'

export default function ProductCategoryTemplate({ category }) {
  if (!category) return null

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-4 font-light">
            Catalogo Interno Danza
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight mb-5">
            {category.heroTitle}
          </h1>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-stone-600 font-light leading-relaxed mb-8">
            {category.heroSubtitle}
          </p>
          <Link
            to={category.group === 'pointe' ? '/pointe-ballet' : '/collections'}
            className="inline-flex items-center gap-2 w-fit text-[11px] tracking-[0.22em] uppercase border border-[#c3197a]/40 px-6 py-3 hover:bg-[#c3197a] hover:text-white transition-all duration-300 font-light text-[#c3197a]"
          >
            <span className="text-base leading-none">←</span>
            {category.group === 'pointe' ? 'Pointe e Ballet Shoes' : 'Collections'}
          </Link>
        </div>

        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-4 font-light">
            Selezione Disponibile
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Prodotti in Evidenza</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
          {category.products.map((product) => {
            const text = `Ciao, vorrei sapere se avete disponibilita in negozio per l'articolo ${product.name}.`

            return (
              <article key={product.id} className="bg-white border border-stone-200">
                <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={`${product.name} - ${product.brand}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col min-h-[260px]">
                  <p className="text-[10px] tracking-[0.28em] uppercase text-stone-400 mb-3 font-light">
                    {product.brand}
                  </p>
                  <h3 className="font-serif text-2xl text-stone-900 mb-3 leading-snug">{product.name}</h3>
                  <p className="text-sm text-stone-600 font-light leading-relaxed mb-8 flex-1">
                    {product.description}
                  </p>

                  <a
                    href={createWhatsAppLink(text)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-center border border-[#c3197a] text-[#c3197a] text-[11px] tracking-[0.24em] uppercase px-5 py-3 hover:bg-[#c3197a] hover:text-white transition-all duration-300 font-light"
                  >
                    Verifica Disponibilita
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
