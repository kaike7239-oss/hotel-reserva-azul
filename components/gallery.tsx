const IMAGES = [
  { src: '/images/terrace.png', alt: 'Terraço com vegetação e vista da cidade', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/detail.png', alt: 'Detalhe de arranjo floral no lobby', span: '' },
  { src: '/images/bar.png', alt: 'Bar de coquetéis à noite', span: '' },
  { src: '/images/suite.png', alt: 'Interior de suíte de luxo', span: 'md:col-span-2' },
]

export function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-accent">
            Galeria
          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-tight md:text-5xl">
            Momentos que permanecem
          </h2>
        </div>
        <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
          Um vislumbre da atmosfera que espera por você — do amanhecer sereno às
          noites vibrantes.
        </p>
      </div>

      <div className="grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-4">
        {IMAGES.map((img) => (
          <div
            key={img.src}
            className={`group relative overflow-hidden ${img.span}`}
          >
            <img
              src={img.src || '/placeholder.svg'}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
