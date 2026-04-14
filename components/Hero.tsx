'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

const TICKER = 'FULLSTACK · DEVELOPER · CREATIVE · CODER · '.repeat(6)

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] as const },
})

export default function Hero() {
  const t = useTranslations('hero')

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '0 clamp(1.5rem, 6vw, 6rem)',
      overflow: 'hidden',
    }}>

      {/* Ticker */}
      <div style={{
        position: 'absolute', top: 24, left: 0, right: 0,
        overflow: 'hidden', height: 26,
        display: 'flex', alignItems: 'center',
        pointerEvents: 'none',
      }}>
        <span style={{
          display: 'inline-block', whiteSpace: 'nowrap',
          fontSize: '0.65rem', letterSpacing: '0.2em',
          color: 'var(--color-text-muted)', textTransform: 'uppercase',
          animation: 'ticker 20s linear infinite',
        }}>
          {TICKER}
        </span>
      </div>

      {/* Fond violet flou */}
      <div style={{
        position: 'absolute', top: '50%', transform: 'translateY(-50%)',
        left: -128, width: 500, height: 500, borderRadius: '50%',
        background: 'rgba(139,92,246,0.05)',
        filter: 'blur(120px)', pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 640 }}>

        {/* Badge disponible */}
        <motion.div {...fadeUp(0)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 14px', marginBottom: '1.5rem',
          background: 'var(--color-bg-card)',
          border: '1px solid rgba(16,185,129,0.3)',
          borderRadius: 999, color: 'var(--color-emerald)',
          fontSize: '0.75rem', fontFamily: 'var(--font-code)',
        }}>

        </motion.div>

        {/* Greeting */}
        <motion.p {...fadeUp(0.1)} style={{
          fontFamily: 'var(--font-code)',
          color: 'var(--color-text-muted)',
          fontSize: 'clamp(0.85rem, 2vw, 1rem)',
          marginBottom: '0.75rem', letterSpacing: '0.05em',
        }}>
          <span style={{ color: 'var(--color-violet)' }}>&lt;hi&gt;</span>
          {' '}{t('greeting')}{' '}
          <span style={{ color: 'var(--color-violet)', fontWeight: 600 }}>{t('name')}</span>
          {' '}<span style={{ color: 'var(--color-emerald)' }}>&lt;/hi&gt;</span>
        </motion.p>

        {/* Titre */}
        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: 'var(--font-head)',
          fontSize: 'clamp(2.8rem, 9vw, 5.5rem)',
          fontWeight: 900, lineHeight: 1,
          marginBottom: '1.25rem',
          color: 'var(--color-text)',
        }}>
          {t('title1')}<br />
          <span style={{ color: 'var(--color-violet)' }}>{t('title2')}</span>
          <span style={{ color: 'var(--color-emerald)' }}>.</span>

        </motion.h1>

        {/* Sub */}
        <motion.p {...fadeUp(0.3)} style={{
          fontFamily: 'var(--font-code)',
          color: 'var(--color-text-muted)',
          fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
          marginBottom: '2rem', letterSpacing: '0.03em',
        }}>
          <span style={{ color: 'rgba(139,92,246,0.7)' }}>&lt;role&gt;</span>
          {' '}{t('sub')}{' '}
          <span style={{ color: 'rgba(16,185,129,0.7)' }}>&lt;/role&gt;</span>
        </motion.p>

        {/* CTA */}
        <motion.div {...fadeUp(0.4)} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <button
            onClick={() => scrollTo('contact')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '0.75rem 1.75rem', borderRadius: 8,
              background: 'var(--color-violet)', color: '#fff',
              border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-code)', fontSize: '0.88rem', fontWeight: 600,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                ; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(139,92,246,0.4)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = ''
                ; (e.currentTarget as HTMLButtonElement).style.boxShadow = ''
            }}
          >
            {t('cta1')}
            <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8rem' }} />
          </button>

          <button
            onClick={() => scrollTo('projects')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '0.75rem 1.75rem', borderRadius: 8,
              background: 'transparent', color: 'var(--color-text)',
              border: '1px solid var(--color-border)', cursor: 'pointer',
              fontFamily: 'var(--font-code)', fontSize: '0.88rem', fontWeight: 600,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                ; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border-hover)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = ''
                ; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)'
            }}
          >
            {t('cta2')}
          </button>

          <a
            href="/asset/Ibrahima NDIR.pdf"
            download
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '0.75rem 1.75rem', borderRadius: 8,
              background: 'transparent', color: 'var(--color-violet)',
              border: '1px solid rgba(139,92,246,0.4)', cursor: 'pointer',
              fontFamily: 'var(--font-code)', fontSize: '0.88rem', fontWeight: 600,
              transition: 'all 0.2s ease', textDecoration: 'none',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-violet)'
                ; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'
                ; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                ; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-violet)'
                ; (e.currentTarget as HTMLAnchorElement).style.transform = ''
            }}
          >
            <i className="fa-solid fa-download" style={{ fontSize: '0.85rem' }} />
            {t('cv')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}