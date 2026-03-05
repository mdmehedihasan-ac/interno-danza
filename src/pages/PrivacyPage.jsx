export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 px-8 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white border border-stone-200 p-8 md:p-12">
        <p className="text-[10px] tracking-[0.35em] uppercase text-stone-400 mb-4 font-light">Informativa</p>
        <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">Privacy Policy</h1>

        <div className="space-y-7 text-sm md:text-base text-stone-700 font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-3">Titolare del Trattamento</h2>
            <p>
              Interno Danza (Eff&Pi S.r.l.), con sede in Via Ragno 14, 44121 Ferrara (FE), tratta i dati personali nel
              rispetto del Regolamento UE 2016/679 (GDPR) e della normativa italiana vigente.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-3">Dati Raccolti</h2>
            <p>
              Possiamo trattare dati di contatto (nome, numero di telefono, email), dati forniti volontariamente via
              WhatsApp/moduli e dati tecnici di navigazione necessari al funzionamento del sito.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-3">Finalita del Trattamento</h2>
            <p>
              I dati sono trattati per rispondere alle richieste degli utenti, gestire appuntamenti e informazioni sui
              prodotti, adempiere obblighi di legge e migliorare la qualita del servizio.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-3">Diritti dell'Interessato</h2>
            <p>
              L'utente puo richiedere accesso, rettifica, cancellazione, limitazione, opposizione e portabilita dei
              dati, oltre a proporre reclamo al Garante per la protezione dei dati personali.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-stone-900 mb-3">Contatti Privacy</h2>
            <p>
              Per esercitare i propri diritti o richiedere informazioni: tel. 0532 790406, WhatsApp 327 185 2783,
              indirizzo Via Ragno 14, Ferrara.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
