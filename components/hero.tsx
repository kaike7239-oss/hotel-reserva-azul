export function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full">
      <img
        src="/images/hero-pool.png"
        alt="Piscina de borda infinita na cobertura do hotel ao entardecer, com vista para a cidade"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-background">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-background/80">
          Hotéis & Restaurantes
        </p>
        <h1 className="max-w-4xl text-balance font-serif text-5xl font-light leading-[1.05] md:text-7xl lg:text-8xl">
          A arte de receber, elevada ao sublime
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-base font-light leading-relaxed text-background/85 md:text-lg">
          Uma coleção de refúgios que unem design atemporal, gastronomia de
          excelência e um serviço profundamente humano.
        </p>
        <a
          href="#reservas"
          className="mt-10 border border-background px-8 py-3 text-xs uppercase tracking-[0.25em] text-background transition-colors hover:bg-background hover:text-foreground"
        >
          Reserve sua estadia
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-background/70">
        <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
      </div>
    </section>
  )
}
