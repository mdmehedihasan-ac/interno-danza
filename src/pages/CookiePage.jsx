export default function CookiePage() {
  return (
    <div className="pt-28 pb-24 px-8 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white border border-stone-200 p-8 md:p-12">
        <p className="text-[10px] tracking-[0.35em] uppercase text-stone-400 mb-4 font-light">Informativa</p>
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">Cookie Policy</h1>

        <div className="space-y-7 text-sm md:text-base text-stone-700 font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-3">Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti web inviano al dispositivo dell'utente durante la
              navigazione, per migliorare esperienza, sicurezza e funzionalita.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-3">Tipologie utilizzate</h2>
            <p>
              Questo sito puo utilizzare cookie tecnici necessari al funzionamento e, dove previsto, cookie analitici o
              di terze parti solo con le basi giuridiche applicabili e nel rispetto della normativa vigente.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-3">Gestione preferenze</h2>
            <p>
              L'utente puo gestire o disabilitare i cookie tramite le impostazioni del browser. La disattivazione dei
              cookie tecnici puo compromettere alcune funzionalita del sito.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-3">Aggiornamenti della policy</h2>
            <p>
              La presente informativa puo essere aggiornata in qualsiasi momento per adeguamento normativo o evoluzione
              dei servizi offerti dal sito.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-3">Contatti</h2>
            <p>
              Per maggiori informazioni sui cookie e sul trattamento dati: Interno Danza, Via Ragno 14, 44121 Ferrara
              (FE), tel. 0532 790406.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
