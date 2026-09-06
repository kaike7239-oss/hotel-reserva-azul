export function Wellness() {
  return (
    <section id="bem-estar" className="relative">
      <div className="relative h-[560px] w-full md:h-[680px]">
        <img
          src="/images/spa.png"
          alt="Spa de luxo com piscina interna e iluminação suave à luz de velas"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 text-center text-background">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-background/80">
            Bem-estar
          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-tight md:text-6xl">
            Um santuário para corpo e alma
          </h2>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-background/85">
            Spa, piscinas aquecidas e rituais de relaxamento inspirados em
            tradições de todo o mundo. Um convite ao reencontro consigo mesmo.
          </p>
          <a
            href="#reservas"
            className="mt-10 border border-background px-8 py-3 text-xs uppercase tracking-[0.25em] transition-colors hover:bg-background hover:text-foreground"
          >
            Conheça o spa
          </a>
        </div>
      </div>
    </section>
  )
}
