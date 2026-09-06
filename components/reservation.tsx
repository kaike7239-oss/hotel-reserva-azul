'use client'

export function Reservation() {
  return (
    <section id="reservas" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-accent">
          Reservas
        </p>
        <h2 className="text-balance font-serif text-4xl font-light leading-tight md:text-6xl">
          Sua próxima experiência começa aqui
        </h2>

        <form
          className="mx-auto mt-12 grid max-w-3xl gap-4 text-left sm:grid-cols-2 lg:grid-cols-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
              Destino
            </span>
            <select className="border border-primary-foreground/30 bg-transparent px-4 py-3 text-sm outline-none focus:border-accent">
              <option className="text-foreground">São Paulo</option>
              <option className="text-foreground">Rio de Janeiro</option>
              <option className="text-foreground">Punta del Este</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
              Check-in
            </span>
            <input
              type="date"
              className="border border-primary-foreground/30 bg-transparent px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
              Check-out
            </span>
            <input
              type="date"
              className="border border-primary-foreground/30 bg-transparent px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
              Hóspedes
            </span>
            <select className="border border-primary-foreground/30 bg-transparent px-4 py-3 text-sm outline-none focus:border-accent">
              <option className="text-foreground">1 hóspede</option>
              <option className="text-foreground">2 hóspedes</option>
              <option className="text-foreground">3 hóspedes</option>
              <option className="text-foreground">4+ hóspedes</option>
            </select>
          </label>

          <button
            type="submit"
            className="mt-2 bg-accent px-8 py-4 text-xs uppercase tracking-[0.25em] text-accent-foreground transition-opacity hover:opacity-90 sm:col-span-2 lg:col-span-4"
          >
            Verificar disponibilidade
          </button>
        </form>

        <p className="mt-8 text-sm text-primary-foreground/60">
          Ou ligue para{' '}
          <span className="text-primary-foreground">+55 11 3896 4000</span> — à
          sua disposição, 24 horas.
        </p>
      </div>
    </section>
  )
}
