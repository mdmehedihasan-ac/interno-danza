// Immagini estratte da internodanza.com/punte-pointe-ballet-scarpe-shoes/ e /dance-wedding-custom-shoes/
import { createWhatsAppLink } from '../utils/whatsapp'

export default function Services() {
  const fittingMessage = 'Salve, vorrei prenotare una seduta di Pointe Shoe Fitting in negozio.'
  const customShoesMessage = 'Salve, vorrei prendere appuntamento per la realizzazione di scarpe su misura (Interno Sposa/Ballo).'

  return (
    <section id="servizi" className="bg-stone-100/40 py-32">
      <div className="max-w-7xl mx-auto px-8">

        {/* Titolo sezione */}
        <div className="text-center mb-24">
          <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-5 font-light">
            Servizi Esclusivi
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-snug">
            L'Esperienza che Fa la Differenza
          </h2>
          <div className="w-12 h-px bg-stone-300 mx-auto mt-7" />
        </div>

        {/* Blocco 1 — Pointe Fitting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">

          {/* Immagine */}
          <div className="relative overflow-hidden aspect-[4/5] bg-stone-100">
            <img
              src="https://www.internodanza.com/wp-content/uploads/2025/08/Gaynor-Lyra.png"
              alt="Gaynor Minden Lyra – Pointe Shoe Fitting"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            {/* Label overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/60 to-transparent p-8">
              <p className="text-white/70 text-[10px] tracking-[0.3em] uppercase font-light">
                Gaynor Minden · Lyra
              </p>
            </div>
          </div>

          {/* Testo */}
          <div>
            <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-4 font-light">
              Servizio Specializzato
            </p>
            <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-2 leading-snug">
              Pointe Shoe
            </h3>
            <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 leading-snug italic">
              Fitting
            </h3>
            <div className="w-10 h-px bg-stone-300 mb-8" />
            <p className="text-base text-stone-600 font-light leading-relaxed mb-6">
              Scegliere la scarpetta da punta giusta è una delle decisioni più importanti per ogni ballerina. 
              Richiede esperienza, competenza e attenzione all'anatomia individuale del piede.
            </p>
            <p className="text-base text-stone-600 font-light leading-relaxed mb-10">
              Le nostre esperte vi accompagnano con cura in ogni scelta, analizzando forma del piede, 
              livello tecnico e stile di danza per trovare il modello perfetto tra le più importanti 
              collezioni mondiali.
            </p>

            {/* Brand list */}
            <div className="border-t border-stone-200 pt-8">
              <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-4 font-light">
                Collezione disponibile in negozio
              </p>
              <div className="flex flex-wrap gap-3">
                {['Bloch ETU', 'Gaynor Minden', 'Capezio', 'Merlet', 'Grishko', 'Russian Pointe', 'Repetto'].map((b) => (
                  <span
                    key={b}
                    className="text-[10px] tracking-[0.15em] uppercase text-stone-600 border border-stone-200 px-3 py-1.5 font-light"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <a
                href={createWhatsAppLink(fittingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block border border-[#c3197a] text-[#c3197a] text-[11px] tracking-[0.28em] uppercase px-10 py-4 hover:bg-[#c3197a] hover:text-white transition-all duration-300 font-light"
              >
                Prenota Fitting su WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-stone-200 mb-28" />

        {/* Blocco 2 — Scarpe su Misura */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Testo — a sinistra */}
          <div className="order-2 lg:order-1">
            <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-4 font-light">
              Interno Sposa ®
            </p>
            <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-2 leading-snug">
              Scarpe su Misura
            </h3>
            <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 leading-snug italic">
              & Cerimonia
            </h3>
            <div className="w-10 h-px bg-stone-300 mb-8" />
            <p className="text-base text-stone-600 font-light leading-relaxed mb-6">
              Matrimonio, cerimonia, laurea, gala. O semplicemente un paio di scarpe esclusive 
              per le tue occasioni speciali. Create sui tuoi piedi per una comodità mai provata.
            </p>
            <p className="text-base text-stone-600 font-light leading-relaxed mb-10">
              Materiali di alta qualità, solette maxi soft da ballo e personalizzazione in ogni dettaglio. 
              Made in Italy. Gioca d'anticipo per avere il tuo paio in tempo per la prova dell'abito in Atelier.
            </p>

            <a
              href={createWhatsAppLink(customShoesMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#c3197a] text-[#c3197a] text-[11px] tracking-[0.28em] uppercase px-10 py-4 hover:bg-[#c3197a] hover:text-white transition-all duration-300 font-light"
            >
              Prenota Sposa/Ballo su WhatsApp
            </a>
          </div>

          {/* Gallery immagini scarpe — destra */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-3">
            {[
              { src: 'https://www.internodanza.com/wp-content/uploads/2020/03/rsp02.jpg', alt: 'Scarpe sposa Rosso Latino' },
              { src: 'https://www.internodanza.com/wp-content/uploads/2022/07/rl012.jpg', alt: 'Scarpe da ballo eleganti' },
              { src: 'https://www.internodanza.com/wp-content/uploads/2022/07/rlp006.jpg', alt: 'Scarpe cerimonia personalizzate' },
              { src: 'https://www.internodanza.com/wp-content/uploads/2022/07/rsp17.jpg', alt: 'Scarpe sposa su misura' },
            ].map((item, i) => (
              <div key={i} className={`overflow-hidden bg-stone-100 ${i === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
