'use client'

import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { key: 'home', icon: 'fa-solid fa-house', href: 'hero' },
  { key: 'about', icon: 'fa-solid fa-user', href: 'about' },
  { key: 'projects', icon: 'fa-solid fa-cube', href: 'projects' },
  { key: 'skills', icon: 'fa-solid fa-gear', href: 'skills' },
  { key: 'contact', icon: 'fa-solid fa-envelope', href: 'contact' },
]

export default function Nav() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const router = useRouter()
  const [active, setActive] = useState('hero')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)
  const isEN = pathname.startsWith('/en')

  /* Initialiser le thème depuis localStorage côté client */
  useEffect(() => {
    const saved = localStorage.getItem('ib-theme') as 'dark' | 'light' | null
    if (saved) {
      setTheme(saved)
      applyTheme(saved)
    }
    setMounted(true)
  }, [])

  /* Observer sections */
  useEffect(() => {
    if (!mounted) return

    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [mounted])

  const applyTheme = (t: 'dark' | 'light') => {
    document.documentElement.setAttribute('data-theme', t)
    localStorage.setItem('ib-theme', t)
  }

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
  }

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

 const toggleLang = () => {
  if (isEN) router.push(pathname.replace('/en', '/fr') || '/fr')
  else router.push(pathname.replace('/fr', '/en') || '/en')
}

  const btnBase: React.CSSProperties = {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 44, height: 44, borderRadius: 12,
    border: 'none', background: 'transparent', cursor: 'pointer',
    fontSize: '1rem', transition: 'all 0.2s ease',
  }

  return (
    <>
      {/* ══ NAV VERTICALE desktop ══ */}
      <nav id="nav-vertical" suppressHydrationWarning style={{
        display: 'none', position: 'fixed', left: 0, top: 0,
        width: 72, height: '100vh',
        background: 'rgba(15,15,18,0.97)',
        borderRight: '1px solid var(--color-border)',
        backdropFilter: 'blur(12px)',
        flexDirection: 'column', alignItems: 'center',
        padding: '1.5rem 0', zIndex: 100, gap: '0.25rem',
      }}>

        {/* Logo */}
        <div style={{ marginBottom: '1.25rem' }}>
          <span style={{
            fontFamily: 'var(--font-head)', fontSize: '1rem', fontWeight: 900,
            background: 'linear-gradient(135deg, var(--color-violet), var(--color-emerald))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            letterSpacing: '0.05em',
          }}>IB</span>
        </div>

        {/* Nav links */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', flex: 1 }}>
          {NAV_ITEMS.map(({ key, icon, href }) => (
            <li key={key}>
              <button
                onClick={() => scrollTo(href)}
                title={t(key as any)}
                style={{
                  ...btnBase,
                  color: active === href ? 'var(--color-violet)' : 'var(--color-text-muted)',
                  background: active === href ? 'rgba(139,92,246,0.12)' : 'transparent',
                  position: 'relative',
                }}
                className="nav-btn"
              >
                <i className={icon} />
                <span className="nav-tooltip" style={{
                  position: 'absolute', left: 'calc(100% + 12px)',
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                  fontSize: '0.72rem', padding: '4px 10px',
                  borderRadius: 6, whiteSpace: 'nowrap',
                  pointerEvents: 'none', opacity: 0,
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  transform: 'translateX(-6px)',
                }}>
                  {t(key as any)}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Ligne déco */}
        <div style={{
          width: 1, height: 32,
          background: 'linear-gradient(to bottom, var(--color-violet), transparent)',
          margin: '0.5rem 0',
        }} />

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
          style={{ ...btnBase, color: 'var(--color-text-muted)' }}
          className="nav-btn"
        >
          <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} />
        </button>

        {/* Lang switcher */}
        <button
          onClick={toggleLang}
          title={isEN ? 'Passer en français' : 'Switch to English'}
          style={{
            ...btnBase,
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-code)',
            fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em',
          }}
          className="nav-btn"
        >
          {isEN ? 'FR' : 'EN'}
        </button>
      </nav>

      {/* ══ BOTTOM BAR mobile ══ */}
      <nav id="nav-bottom" suppressHydrationWarning style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, height: 60,
        background: 'rgba(15,15,18,0.97)',
        borderTop: '1px solid var(--color-border)',
        backdropFilter: 'blur(14px)',
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        zIndex: 100,
      }}>
        {NAV_ITEMS.map(({ key, icon, href }) => (
          <button
            key={key}
            onClick={() => scrollTo(href)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: active === href ? 'var(--color-violet)' : 'var(--color-text-muted)',
              fontSize: '0.58rem', fontFamily: 'var(--font-code)',
              padding: '6px 4px', borderRadius: 10,
              transition: 'color 0.2s ease',
            }}
          >
            <i className={icon} style={{ fontSize: '1rem' }} />
            <span>{t(key as any)}</span>
          </button>
        ))}

        {/* Theme mobile */}
        <button
          onClick={toggleTheme}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: 'var(--color-text-muted)',
            fontSize: '0.58rem', fontFamily: 'var(--font-code)',
            padding: '6px 4px',
            transition: 'color 0.2s ease',
          }}
        >
          <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
            style={{ fontSize: '1rem' }} />
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>

        {/* Lang mobile */}
        <button
          onClick={toggleLang}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: 'var(--color-text-muted)',
            fontSize: '0.58rem', fontFamily: 'var(--font-code)',
            padding: '6px 4px',
            transition: 'color 0.2s ease',
          }}
        >
          <i className="fa-solid fa-globe" style={{ fontSize: '1rem' }} />
          <span>{isEN ? 'FR' : 'EN'}</span>
        </button>
      </nav>

      <style>{`
        /* Desktop nav visible */
        @media (min-width: 768px) {
          #nav-vertical { display: flex !important; }
          #nav-bottom    { display: none  !important; }
        }
        /* Tooltip au hover */
        .nav-btn:hover .nav-tooltip {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        .nav-btn:hover {
          background: var(--color-bg-card) !important;
          color: var(--color-text) !important;
        }

        /* ══ THEME CLAIR ══ */
        [data-theme="light"] {
          --color-bg:           #ffffff;
          --color-bg-card:      #f4f4f5;
          --color-bg-hover:     #e8e8ea;
          --color-border:       rgba(0,0,0,0.09);
          --color-border-hover: rgba(0,0,0,0.18);
          --color-text:         #111111;
          --color-text-muted:   #555555;
          --color-violet:       #7c3aed;
          --color-violet-glow:  rgba(124,58,237,0.18);
          --color-emerald:      #059669;
          --color-emerald-glow: rgba(5,150,105,0.18);
        }
        [data-theme="light"] #nav-vertical {
          background: rgba(255,255,255,0.97) !important;
        }
        [data-theme="light"] #nav-bottom {
          background: rgba(255,255,255,0.97) !important;
        }
      `}</style>
    </>
  )
}