// Brand names estratti dal carosello ufficiale su internodanza.com
const brands = [
  'Bloch', 'Capezio', 'Gaynor Minden', 'Merlet', 'Grishko',
  'Russian Pointe', 'Repetto', 'Wear Moi', 'BalletRosa', 'Mirella',
  'Intermezzo', 'Sansha', 'Deha', 'Eurotard', 'Bunheads',
  'Katz', 'Danskin', 'Cecilia Kerche', 'Techdance', 'Pridance',
  'Mikelart', 'Like G', 'Pastorelli', 'Paoul', 'Rosso Latino', 'Rummos',
]

// Duplichiamo per creare l'effetto marquee infinito senza salti
const ticker = [...brands, ...brands]

export default function BrandsBar() {
  return (
    <section className="w-full bg-white py-6 overflow-hidden">
      <div className="flex items-center gap-0 whitespace-nowrap animate-marquee w-max">
        {ticker.map((brand, i) => (
          <span key={i} className="inline-flex items-center gap-6 text-stone-900 text-[10px] tracking-[0.42em] uppercase font-light">
            {brand}
            <span className="text-stone-500 text-xs">·</span>
          </span>
        ))}
      </div>
    </section>
  )
}
