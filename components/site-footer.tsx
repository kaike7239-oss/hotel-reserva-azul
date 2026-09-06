const COLUMNS = [
  {
    title: 'Explorar',
    links: ['Hotéis', 'Restaurantes', 'Spa & Bem-estar', 'Eventos'],
  },
  {
    title: 'Institucional',
    links: ['Sobre', 'Imprensa', 'Carreiras', 'Sustentabilidade'],
  },
  {
    title: 'Contato',
    links: ['Fale conosco', 'Reservas', 'Presentes', 'Newsletter'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-background pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 border-b border-border pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-3xl tracking-[0.35em]">FASANO</p>
            <p className="mt-6 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Uma tradição de hospitalidade e sofisticação que atravessa
              gerações.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs uppercase tracking-[0.25em] text-accent">
                {col.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Fasano. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Termos
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
