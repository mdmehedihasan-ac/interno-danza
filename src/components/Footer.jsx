import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 text-white/50 py-16 px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Logo + tagline */}
          <div>
            <p className="font-serif text-white text-[18px] tracking-[0.35em] uppercase mb-2">
              Interno Danza
            </p>
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/30 mb-5">Ferrara</p>
            <p className="text-sm font-light leading-relaxed text-white/40">
              Il tuo negozio di fiducia per la danza e molto di più. Una passione condivisa, giorno dopo giorno.
            </p>
          </div>

          {/* Contatti */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5 font-light">Contatti</p>
            <div className="space-y-2 text-sm font-light">
              <p>Via Ragno, 14 · 44121 Ferrara (FE) - Italy</p>
              <a href="tel:0532790406" className="block hover:text-white/80 transition-colors">0532 790406</a>
              <a href="https://wa.me/393271852783" target="_blank" rel="noopener noreferrer" className="block hover:text-white/80 transition-colors">
                WhatsApp 327 185 2783
              </a>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5 font-light">Seguici</p>
            <div className="flex flex-col gap-2 text-sm font-light">
              <a href="https://www.facebook.com/internodanza.ferrara/" target="_blank" rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors">Facebook</a>
              <a href="https://www.instagram.com/internodanza.ferrara/" target="_blank" rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors">Instagram</a>
              <a href="http://www.youtube.com/@internodanza" target="_blank" rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors">YouTube</a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-[11px] tracking-wide font-light text-white/55">
            <div className="space-y-1">
              <p>© {year} Interno danza® di Eff&Pi S.r.l.</p>
              <p>C.F. e P. IVA 01850950385</p>
              <p>Cap. soc. 10'000 EUR i.v.</p>
            </div>
            <div className="space-y-1 md:text-right">
              <p>Nr. REA 203578</p>
              <p>Codice SDI M5UXCR1</p>
              <p>Via Ragno, 14 44121 Ferrara (FE) - Italy</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] tracking-wide font-light text-white/50">
              Boutique specializzata danza, ballo e scarpe su misura.
            </p>
            <div className="flex gap-6 text-[11px] font-light">
            <Link to="/privacy" className="hover:text-white/80 transition-colors tracking-wide">Privacy Policy</Link>
            <Link to="/cookie" className="hover:text-white/80 transition-colors tracking-wide">Cookie Policy</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
