export default function GalleryPage() {
  const images = [
    'https://www.internodanza.com/wp-content/uploads/2025/08/S01160-ETU.jpg',
    'https://www.internodanza.com/wp-content/uploads/2025/08/bagatelle_front_fuxia.jpg',
    'https://www.internodanza.com/wp-content/uploads/2025/08/Gaynor-Lyra.png',
    'https://www.internodanza.com/wp-content/uploads/2025/08/Liberty_Gaynor.jpg',
    'https://www.internodanza.com/wp-content/uploads/2022/08/2037-Hanami-nude.jpg',
    'https://www.internodanza.com/wp-content/uploads/2025/08/LUNA_pelle.jpg',
    'https://www.internodanza.com/wp-content/uploads/2025/08/STELLA_canvas.jpg',
    'https://www.internodanza.com/wp-content/uploads/2022/07/rsp17.jpg',
    'https://www.internodanza.com/wp-content/uploads/2022/07/rl012.jpg',
    'https://www.internodanza.com/wp-content/uploads/2022/07/rlp006.jpg',
    'https://www.internodanza.com/wp-content/uploads/2020/03/rl005.jpg',
    'https://www.internodanza.com/wp-content/uploads/2020/10/vetrina.jpg',
  ]

  return (
    <div className="pt-20 pb-24 bg-stone-50">
      {/* Header */}
      <section className="pt-20 pb-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-5 font-light">
            Interno Danza — Ferrara
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 leading-snug mb-7">
            Gallery
          </h1>
          <div className="w-12 h-px bg-stone-300 mx-auto mb-7" />
          <p className="text-sm text-stone-500 font-light max-w-xl mx-auto leading-relaxed">
            Immagini dal negozio, dalla nostra selezione di calzature e abbigliamento per la danza.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-8">
        <div className="max-w-7xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden bg-stone-100">
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
