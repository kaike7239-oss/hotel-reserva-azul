const DESTINATIONS = [
  { city: 'São Paulo', detalhe: 'Jardins', img: '/images/facade.png' },
  { city: 'Rio de Janeiro', detalhe: 'Ipanema', img: '/images/terrace.png' },
  { city: 'Punta del Este', detalhe: 'Uruguai', img: '/images/detail.png' },
]

export function Destinations() {
  return (
    <section id="destinos" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-accent">
            Destinos
          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-tight md:text-5xl">
            Endereços inesquecíveis
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <article key={d.city} className="group cursor-pointer">
              <div className="relative h-[440px] overflow-hidden">
                <img
                  src={d.img || '/placeholder.svg'}
                  alt={`Hotel em ${d.city}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between border-b border-border pb-4">
                <h3 className="font-serif text-2xl font-light">{d.city}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {d.detalhe}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
