'use client'

import { useEffect, useState } from 'react'

const NAV = [
  { label: 'Hotéis', href: '#acomodacoes' },
  { label: 'Gastronomia', href: '#gastronomia' },
  { label: 'Bem-estar', href: '#bem-estar' },
  { label: 'Destinos', href: '#destinos' },
  { label: 'Galeria', href: '#galeria' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md py-4 border-b border-border'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <nav className="hidden flex-1 items-center gap-8 lg:flex">
          {NAV.slice(0, 3).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs uppercase tracking-[0.2em] transition-colors hover:text-accent ${
                scrolled ? 'text-foreground' : 'text-background'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          className={`font-serif text-2xl tracking-[0.35em] transition-colors lg:flex-1 lg:text-center ${
            scrolled ? 'text-foreground' : 'text-background'
          }`}
        >
          FASANO
        </a>

        <div className="flex flex-1 items-center justify-end gap-8">
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.slice(3).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs uppercase tracking-[0.2em] transition-colors hover:text-accent ${
                  scrolled ? 'text-foreground' : 'text-background'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#reservas"
            className={`hidden border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-colors lg:inline-block ${
              scrolled
                ? 'border-foreground text-foreground hover:bg-foreground hover:text-background'
                : 'border-background text-background hover:bg-background hover:text-foreground'
            }`}
          >
            Reservas
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className={`flex flex-col gap-1.5 lg:hidden ${
              scrolled ? 'text-foreground' : 'text-background'
            }`}
          >
            <span className="h-px w-6 bg-current" />
            <span className="h-px w-6 bg-current" />
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-4 border-t border-border/40 bg-background/95 px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#reservas"
              onClick={() => setOpen(false)}
              className="mt-2 border border-foreground px-5 py-3 text-center text-xs uppercase tracking-[0.2em] text-foreground"
            >
              Reservas
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
