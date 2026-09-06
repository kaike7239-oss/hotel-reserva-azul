export function Accommodations() {
  return (
    <section id="acomodacoes" className="bg-primary text-primary-foreground">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[720px]">
          <img
            src="/images/suite.png"
            alt="Interior de suíte de luxo com painéis de madeira e vista para a cidade"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:px-20">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-accent">
            Acomodações
          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-tight md:text-5xl">
            Suítes que abraçam o silêncio e a luz
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-primary-foreground/70">
            Ambientes concebidos para o repouso absoluto: materiais nobres,
            enxovais impecáveis e vistas que emolduram cada cidade. Do quarto
            executivo às suítes de cobertura, cada detalhe convida ao descanso.
          </p>

          <ul className="mt-10 space-y-4 text-sm text-primary-foreground/80">
            {[
              'Quartos Deluxe com 42 m²',
              'Suítes Master com terraço privativo',
              'Coberturas com piscina exclusiva',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 border-b border-primary-foreground/15 pb-4"
              >
                <span className="h-px w-6 bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#reservas"
            className="mt-10 inline-block w-fit border border-primary-foreground px-8 py-3 text-xs uppercase tracking-[0.25em] transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            Ver acomodações
          </a>
        </div>
      </div>
    </section>
  )
}
