import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
  return (
    <article className="bg-white border border-stone-200 overflow-hidden group">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/55 via-stone-900/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/70 font-light mb-2">Categoria</p>
          <h2 className="font-serif text-3xl leading-tight">{category.title}</h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-stone-600 font-light leading-relaxed mb-6">{category.subtitle}</p>
        <Link
          to={category.path}
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-stone-900 border-b border-stone-900/50 pb-0.5 hover:text-stone-500 hover:border-stone-500 transition-colors duration-300 font-light"
        >
          Apri categoria
          <span className="text-base leading-none">→</span>
        </Link>
      </div>
    </article>
  )
}
