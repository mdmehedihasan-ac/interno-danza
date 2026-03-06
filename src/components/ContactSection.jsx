import { createWhatsAppLink } from '../utils/whatsapp'

const INFO = {
  address: { line1: 'Via Ragno, 14', line2: '44121 Ferrara (FE)' },
  phone: '0532 790406',
  hours: [
    { days: 'Lunedi', time: '16:00 - 19:00' },
    { days: 'Mar - Mer - Ven - Sab', time: '10:00 - 12:30 / 16:00 - 19:00' },
    { days: 'Giovedi - Domenica', time: 'Chiuso' },
  ],
}

const leadActions = [
  {
    id: 'fitting',
    title: 'Prenota Fitting',
    subtitle: 'Pointe shoe fitting in negozio',
    message: 'Salve, vorrei prenotare una seduta di Pointe Shoe Fitting in negozio.',
  },
  {
    id: 'articoli',
    title: 'Informazioni Articoli',
    subtitle: 'Disponibilita e varianti prodotto',
    message: 'Ciao, vorrei ricevere informazioni sugli articoli disponibili in negozio.',
  },
  {
    id: 'sposa',
    title: 'Scarpe Sposa/Ballo',
    subtitle: 'Appuntamento su misura',
    message: 'Salve, vorrei prendere appuntamento per la realizzazione di scarpe su misura (Interno Sposa/Ballo).',
  },
]

export default function ContactSection() {
  return (
    <section id="contatti" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[10px] tracking-[0.42em] uppercase text-stone-400 mb-5 font-light">
            Contatti WhatsApp
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-snug">
            Lead Station
          </h2>
          <div className="w-12 h-px bg-stone-300 mx-auto mt-7" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {leadActions.map((action) => (
            <a
              key={action.id}
              href={createWhatsAppLink(action.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-stone-200 p-8 hover:border-[#c3197a] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
            >
              <h3 className="font-serif text-3xl text-stone-900 mb-3 leading-tight">{action.title}</h3>
              <p className="text-[11px] tracking-[0.2em] uppercase text-stone-500 font-light mb-8">{action.subtitle}</p>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-stone-800 border-b border-stone-300 pb-0.5 group-hover:text-[#c3197a] group-hover:border-[#c3197a] transition-colors duration-300">
                Apri su WhatsApp
                <span className="text-base leading-none">↗</span>
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 border-t border-stone-200 pt-12">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-3 font-light">Dove Siamo</p>
            <p className="text-lg text-stone-800 font-light leading-relaxed">
              {INFO.address.line1}
              <br />
              {INFO.address.line2}
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-3 font-light">Orari</p>
            <div className="space-y-3">
              {INFO.hours.map((entry) => (
                <div key={entry.days} className="flex justify-between items-baseline gap-4 border-b border-stone-200 pb-3 last:border-b-0 last:pb-0">
                  <span className="text-sm text-stone-700 font-light uppercase tracking-[0.08em]">{entry.days}</span>
                  <span className="h-px flex-1 bg-stone-200" />
                  <span className={`text-sm font-light ${entry.time === 'Chiuso' ? 'text-stone-400' : 'text-stone-700'}`}>
                    {entry.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-3 font-light">Telefono Fisso</p>
            <a
              href={`tel:${INFO.phone.replace(/\s/g, '')}`}
              className="text-base text-stone-700 font-light hover:text-[#c3197a] transition-colors"
            >
              {INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
