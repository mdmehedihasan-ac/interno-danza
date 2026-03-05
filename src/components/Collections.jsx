// Immagini estratte direttamente da internodanza.com
const collections = [
  {
    id: 1,
    label: 'Danza Classica & Punte',
    subtitle: 'Bloch · Capezio · Gaynor Minden',
    description:
      'La scarpetta da punta perfetta nasce da un fitting esperto. Una selezione esclusiva tra i migliori marchi al mondo, per ogni livello e morfologia del piede.',
    image: 'https://www.internodanza.com/wp-content/uploads/2025/08/S01160-ETU.jpg',
    url: 'https://www.internodanza.com/punte-pointe-ballet-scarpe-shoes/',
  },
  {
    id: 2,
    label: 'Abbigliamento da Danza',
    subtitle: 'Wear Moi · BalletRosa · Mirella · Deha',
    description:
      'Body, tutù, costumi e abbigliamento tecnico per danza classica, contemporanea, jazz e ginnastica ritmica. Collezioni donna, bambina e uomo.',
    image: 'https://www.internodanza.com/wp-content/uploads/2025/08/bagatelle_front_fuxia.jpg',
    url: 'https://www.internodanza.com/women-balletwear-dancewear/',
  },
  {
    id: 3,
    label: 'Ballo & Scarpe da Ballo',
    subtitle: 'Rosso Latino · Paoul · Rummos',
    description:
      "Scarpe da ballo su misura, bilanciate e costruite sull\u2019anatomia del tuo piede. Tango, latino, standard. Infinite combinazioni di materiali e colori.",
    image: 'https://www.internodanza.com/wp-content/uploads/2020/03/rl005.jpg',
    url: 'https://www.internodanza.com/dance-wedding-custom-shoes/',
  },
  {
    id: 4,
    label: 'Interno Sposa & Cerimonia',
    subtitle: 'Scarpe su misura · Made in Italy',
    description:
      'Il comfort esclusivo della scarpa da ballo, trasformato nella tua calzatura da sposa. Personalizzata in ogni dettaglio, indimenticabile per il tuo giorno.',
    image: 'https://www.internodanza.com/wp-content/uploads/2022/07/rsp17.jpg',
    url: 'https://www.internodanza.com/dance-wedding-custom-shoes/',
  },
]

export default function Collections() {
  return (
    <section id="collezioni" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Intestazione sezione */}
        <div className="text-center mb-20">
          <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-5 font-light">
            Le Nostre Collezioni
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-snug">
            Una Selezione d'Eccellenza
          </h2>
          <div className="w-12 h-px bg-stone-300 mx-auto mt-7" />
        </div>

        {/* Griglia 4 colonne */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {collections.map((col) => (
            <article key={col.id} className="group">

              {/* Immagine */}
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-stone-100">
                <img
                  src={col.image}
                  alt={col.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                {/* Overlay al hover */}
                <div className="absolute inset-0 bg-[#c3197a]/0 group-hover:bg-[#c3197a]/10 transition-all duration-500" />
              </div>

              {/* Testo */}
              <p className="text-[10px] tracking-[0.28em] uppercase text-stone-400 mb-2 font-light">
                {col.subtitle}
              </p>
              <h3 className="font-serif text-[22px] text-stone-900 mb-3 leading-snug">
                {col.label}
              </h3>
              <p className="text-sm text-stone-500 font-light leading-relaxed mb-5">
                {col.description}
              </p>
              <a
                href={col.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-stone-900 border-b border-stone-900/50 pb-0.5 hover:text-stone-400 hover:border-stone-400 transition-colors duration-300 font-light"
              >
                Scopri di più
                <span className="text-base leading-none">→</span>
              </a>
            </article>
          ))}
        </div>

        {/* Mini-griglia highlight prodotti */}
        <div className="mt-28 pt-16 border-t border-stone-200">
          <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-12 text-center font-light">
            Highlights · Back to Dance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { src: 'https://www.internodanza.com/wp-content/uploads/2025/08/LUNA_pelle.jpg', alt: 'Luna Capezio – Mezzepunte pelle' },
              { src: 'https://www.internodanza.com/wp-content/uploads/2025/08/STELLA_canvas.jpg', alt: 'Stella Capezio – Mezzepunte canvas' },
              { src: 'https://www.internodanza.com/wp-content/uploads/2025/08/Liberty_Gaynor.jpg', alt: 'Liberty Gaynor Minden' },
              { src: 'https://www.internodanza.com/wp-content/uploads/2022/08/2037-Hanami-nude.jpg', alt: 'Hanami Capezio – nude' },
              { src: 'https://www.internodanza.com/wp-content/uploads/2025/08/Gaynor-Lyra.png', alt: 'Lyra Gaynor Minden (Punte Premium)' },
              { src: 'https://www.internodanza.com/wp-content/uploads/2025/08/S01160-ETU.jpg', alt: 'ETU Bloch – Punte innovative' },
            ].map((item, i) => (
              <div key={i} className="overflow-hidden aspect-square bg-stone-100 group cursor-pointer">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
