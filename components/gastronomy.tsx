export function Gastronomy() {
  return (
    <section id="gastronomia" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-16 max-w-2xl">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-accent">
          Gastronomia
        </p>
        <h2 className="text-balance font-serif text-4xl font-light leading-tight md:text-5xl">
          A mesa como celebração
        </h2>
        <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
          Restaurantes e bares que se tornaram destinos por si só. Cozinha
          autoral, adegas premiadas e uma atmosfera que transforma cada refeição
          em memória.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="group relative overflow-hidden">
          <div className="relative h-[460px] md:h-[560px]">
            <img
              src="/images/restaurant.png"
              alt="Salão de restaurante fino com iluminação âmbar e detalhes em latão"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 p-8 text-background">
            <h3 className="font-serif text-3xl font-light">Il Ristorante</h3>
            <p className="mt-2 max-w-xs text-sm text-background/80">
              Alta gastronomia italiana em um ambiente íntimo e atemporal.
            </p>
          </div>
        </article>

        <article className="group relative overflow-hidden">
          <div className="relative h-[460px] md:h-[560px]">
            <img
              src="/images/bar.png"
              alt="Bar de coquetéis sofisticado com balcão de mármore verde e prateleiras iluminadas"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 p-8 text-background">
            <h3 className="font-serif text-3xl font-light">Baretto Bar</h3>
            <p className="mt-2 max-w-xs text-sm text-background/80">
              Coquetelaria de assinatura e música ao vivo até a madrugada.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
