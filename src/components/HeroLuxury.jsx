import { Link } from 'react-router-dom'

// Hero image: vetrina reale del negozio Interno Danza (gallery)
// Estratta da: https://www.internodanza.com/gallery/
const HERO_BG = 'https://www.internodanza.com/wp-content/uploads/2020/10/vetrina.jpg'

export default function HeroLuxury() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 blur-md transition-transform duration-[8000ms]"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      />

      {/* Gradient Overlay — basso opaco, alto leggero */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/45 to-stone-900/25" />

      {/* Linea verticale decorativa */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="h-32 w-px bg-white/20" />
      </div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="h-32 w-px bg-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto">

        <h1 className="font-serif text-5xl md:text-6xl lg:text-[72px] leading-[1.15] mb-8 tracking-tight">
          L'Arte del Movimento,
          <br />
          <em className="font-serif font-normal italic text-[#c3197a]">su Misura per Te.</em>
        </h1>

        <div className="w-16 h-px bg-white/30 mx-auto mb-8" />

        <p className="text-base md:text-lg text-white/70 font-light tracking-wide max-w-2xl mx-auto mb-14 leading-relaxed">
          Boutique specializzata in articoli per la Danza, il Ballo
          e calzature da Cerimonia nel cuore di Ferrara.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/collections"
            className="inline-block border border-white/80 text-white text-[11px] tracking-[0.28em] uppercase px-12 py-4 hover:bg-white hover:text-[#c3197a] transition-all duration-300 font-light"
          >
            Esplora le Collezioni
          </Link>
          <Link
            to="/pointe-ballet"
            className="inline-flex items-center gap-2 text-[#f2a0cd] text-[11px] tracking-[0.28em] uppercase hover:text-white transition-colors duration-300 font-light"
          >
            Pointe Shoe Fitting
            <span className="text-base leading-none">↓</span>
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="h-14 w-px bg-white/20 animate-pulse" />
      </div>

    </section>
  )
}
