import { Link } from 'react-router-dom'
import HeroLuxury from '../components/HeroLuxury'
import BrandsBar from '../components/BrandsBar'
import { productCategoryMap } from '../data/products'

const categoryHighlights = [
  {
    title: 'Women',
    subtitle: 'Dancewear & Collections',
    to: '/collections',
    image: 'https://www.internodanza.com/wp-content/uploads/2025/08/bagatelle_front_fuxia.jpg',
  },
  {
    title: 'Girls Collection',
    subtitle: 'Junior Dancewear',
    to: '/collections/girls',
    image: 'https://www.internodanza.com/wp-content/uploads/2020/10/vetrina.jpg',
  },
  {
    title: 'Pointe Shoes',
    subtitle: 'Back to Dance',
    to: '/pointe-ballet/pointe-shoes',
    image: 'https://www.internodanza.com/wp-content/uploads/2025/08/S01160-ETU.jpg',
  },
  {
    title: 'Dance & Wedding',
    subtitle: 'Ballo e Cerimonia',
    to: '/pointe-ballet/dance-wedding-shoes',
    image: 'https://www.internodanza.com/wp-content/uploads/2022/07/rsp17.jpg',
  },
]

const backToDanceNames = ['Liberty', 'Bloch ETU', 'Lyra', 'Hanami', 'Luna', 'Stella']

const youtubeVideos = [
  {
    title: 'Ballet Foot Stretcher',
    subtitle: 'Tutorial supporto piede',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
    href: 'http://www.youtube.com/@internodanza',
  },
  {
    title: 'Merlet Special Unboxing',
    subtitle: 'Nuove punte in boutique',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=80',
    href: 'http://www.youtube.com/@internodanza',
  },
  {
    title: 'Pointe Fitting Session',
    subtitle: 'Scelta modello e fitting',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    href: 'http://www.youtube.com/@internodanza',
  },
  {
    title: 'Interno Sposa Stories',
    subtitle: 'Scarpe su misura',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
    href: 'http://www.youtube.com/@internodanza',
  },
]

export default function HomePage() {
  const featuredPunte = (productCategoryMap['pointe-shoes']?.products ?? []).filter((product) =>
    backToDanceNames.includes(product.name),
  )

  return (
    <>
      <HeroLuxury />

      <section className="py-10 border-y border-stone-200 bg-white">
        <p className="text-center text-[10px] tracking-[0.42em] uppercase text-[#c3197a] mb-6 font-light px-8">
          I Nostri Marchi
        </p>
        <BrandsBar />
      </section>

      <section className="pt-20 pb-16 px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          <div>
            <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-4 font-light">
              Chi Siamo
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight mb-6">
              Interno Danza, boutique specializzata a Ferrara
            </h2>
            <p className="text-stone-600 leading-relaxed font-light mb-5">
              Interno Danza nasce come punto di riferimento per chi vive la danza ogni giorno: allieve, insegnanti,
              professionisti e appassionati. Selezioniamo capi tecnici, scarpe e accessori con attenzione a qualita,
              vestibilita e durata.
            </p>
            <p className="text-stone-600 leading-relaxed font-light mb-8">
              Dalla prima lezione alle esigenze di palcoscenico, accompagniamo ogni cliente con consulenza dedicata,
              prova guidata e supporto nella scelta del prodotto giusto, incluse le sessioni di pointe shoe fitting.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-[#c3197a] text-[#c3197a] text-[11px] tracking-[0.24em] uppercase px-7 py-3 hover:bg-[#c3197a] hover:text-white transition-all duration-300 font-light"
            >
              Scopri il negozio
              <span className="text-base leading-none">→</span>
            </Link>
          </div>

          <aside className="border border-stone-200 bg-white p-7 md:p-8">
            <p className="text-[10px] tracking-[0.32em] uppercase text-stone-400 mb-4 font-light">I nostri valori</p>
            <ul className="space-y-4 text-sm text-stone-700 font-light leading-relaxed">
              <li>Selezione curata dei migliori brand per danza classica, modern e ballo.</li>
              <li>Consulenza reale in boutique per calzata, comfort e performance.</li>
              <li>Proposte per donna, girls, men e boys, con focus anche su wedding shoes.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-4 font-light">
              Category Highlights
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-snug">
              Collezioni in Primo Piano
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {categoryHighlights.map((card) => (
              <article key={card.to} className="group border border-stone-200 bg-white overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/55 via-stone-900/10 to-transparent" />
                </div>

                <div className="p-6">
                  <p className="text-[10px] tracking-[0.28em] uppercase text-stone-400 mb-3 font-light">{card.subtitle}</p>
                  <h3 className="font-serif text-3xl text-stone-900 mb-5">{card.title}</h3>

                  <Link
                    to={card.to}
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-stone-900 border-b border-stone-900/50 pb-0.5 hover:text-stone-500 hover:border-stone-500 transition-colors duration-300 font-light"
                  >
                    Apri categoria
                    <span className="text-base leading-none">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 border border-[#c3197a] text-[#c3197a] text-[11px] tracking-[0.24em] uppercase px-8 py-4 hover:bg-[#c3197a] hover:text-white transition-all duration-300 font-light"
            >
              Vai all'hub collezioni
              <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-stone-100/45">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-4 font-light">
              Highlights Back to Dance
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-snug">
              I 6 Must-Have del Momento
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {featuredPunte.map((product) => (
              <article key={product.id} className="group bg-white border border-stone-200 overflow-hidden">
                <div className="aspect-square overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-stone-400 mb-1 font-light">{product.brand}</p>
                  <h3 className="font-serif text-lg text-stone-900 leading-tight">{product.name}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/pointe-ballet/pointe-shoes"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-stone-900 border-b border-stone-900/50 pb-0.5 hover:text-stone-500 hover:border-stone-500 transition-colors duration-300 font-light"
            >
              Vedi tutte le punte
              <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-4 font-light">
              Canale YouTube & Social Feed
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-snug">
              Tutorial, Unboxing e Novita
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {youtubeVideos.map((video) => (
              <a
                key={video.title}
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-stone-200 bg-white overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={video.image}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-[10px] tracking-[0.22em] uppercase text-white/85 font-light">
                    YouTube
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] tracking-[0.24em] uppercase text-stone-400 mb-2 font-light">{video.subtitle}</p>
                  <h3 className="font-serif text-2xl text-stone-900 leading-snug">{video.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
