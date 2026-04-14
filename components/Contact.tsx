'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const SOCIAL_LINKS = [
  { icon: 'fa-brands fa-github',      href: 'https://github.com/ibrahimaNdir',                        label: 'GitHub'   },
  { icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/in/ibrahima-ndir-852648285/',   label: 'LinkedIn' },
  { icon: 'fa-brands fa-x-twitter',   href: 'https://x.com/iboudev',                                 label: 'X'        },
  { icon: 'fa-solid fa-envelope',     href: 'mailto:ibrahimandir2410@gmail.com',                      label: 'Gmail'    },
]

const JOB_ICONS = [
  'fa-solid fa-building',
  'fa-solid fa-rocket',
  'fa-solid fa-graduation-cap',
]

export default function Contact() {
  const t    = useTranslations('contact')
  const jobs = t.raw('jobs') as Array<{ role: string; company: string; period: string; current: boolean }>

  return (
    <section id="contact" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(4rem, 6vw, 7rem) clamp(1.25rem, 5vw, 5rem)',
    }}>
      <SectionHeader number="04" title={t('title')} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3.5rem',
          alignItems: 'start',
          maxWidth: 980,
        }}
        className="contact-grid"
      >
        {/* ── Colonne gauche : Contact ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          <p style={{
            color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.8,
          }}>
            {t('intro')}
          </p>

          {/* Email */}
          <a
            href="mailto:ibrahimandir2410@gmail.com"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: '0.88rem', color: 'var(--color-text-muted)',
              textDecoration: 'none', width: 'fit-content',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-violet)'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-muted)'}
          >
            <i className="fa-solid fa-envelope" style={{ color: 'var(--color-violet)' }} />
            ibrahimandir2410@gmail.com
          </a>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {SOCIAL_LINKS.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = 'var(--color-violet)'
                  el.style.borderColor = 'rgba(139,92,246,0.4)'
                  el.style.transform = 'translateY(-3px)'
                  el.style.boxShadow = '0 6px 20px var(--color-violet-glow)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = 'var(--color-text-muted)'
                  el.style.borderColor = 'var(--color-border)'
                  el.style.transform = ''
                  el.style.boxShadow = ''
                }}
              >
                <i className={icon} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Colonne droite : Work card ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          id="experience"
          style={{
            background: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 24,
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
          }}
        >
          {/* Header */}
          <div style={{
            display: 'flex', alignItems: 'center',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--color-border)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'rgba(139,92,246,0.12)',
                border: '1px solid rgba(139,92,246,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--color-violet)', fontSize: '0.85rem',
              }}>
                <i className="fa-solid fa-briefcase" />
              </div>
              <span style={{
                fontFamily: 'var(--font-head)', fontWeight: 700,
                fontSize: '1rem', color: 'var(--color-text)',
              }}>
                {t('work')}
              </span>
            </div>
          </div>

          {/* Jobs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {jobs.map((job, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '42px 1fr auto',
                  gap: '0.9rem',
                  alignItems: 'center',
                  padding: '0.9rem 0.75rem',
                  borderRadius: 14,
                  transition: 'background 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e =>
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(139,92,246,0.06)'}
                onMouseLeave={e =>
                  (e.currentTarget as HTMLDivElement).style.background = 'transparent'}
              >
                {/* Icon */}
                <div style={{
                  width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(139,92,246,0.1)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-violet)', fontSize: '0.9rem',
                }}>
                  <i className={JOB_ICONS[i] || JOB_ICONS[0]} />
                </div>

                {/* Meta */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
                  <span style={{
                    fontSize: '0.84rem', fontWeight: 600,
                    color: 'var(--color-text)',
                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {job.role}
                  </span>
                  <span style={{
                    fontSize: '0.73rem', color: 'var(--color-text-muted)',
                    display: 'flex', alignItems: 'center', gap: 4,
                  }}>
                    <i className="fa-solid fa-location-dot" style={{ fontSize: '0.6rem', color: 'var(--color-violet)', opacity: 0.7 }} />
                    {job.company}
                  </span>
                </div>

                {/* Période */}
                <div style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'flex-end', gap: 5, flexShrink: 0,
                }}>
                  <span style={{
                    fontSize: '0.68rem', color: 'var(--color-text-muted)',
                    fontFamily: 'var(--font-code)', whiteSpace: 'nowrap',
                  }}>
                    {job.period}
                  </span>
                  {job.current && (
                    <span style={{
                      padding: '2px 8px', fontSize: '0.6rem', fontWeight: 700,
                      fontFamily: 'var(--font-code)', letterSpacing: '0.08em',
                      textTransform: 'uppercase', borderRadius: 999,
                      background: 'rgba(16,185,129,0.12)',
                      border: '1px solid rgba(16,185,129,0.35)',
                      color: 'var(--color-emerald)',
                      display: 'flex', alignItems: 'center', gap: 4,
                    }}>
                      <span style={{
                        width: 5, height: 5, borderRadius: '50%',
                        background: 'var(--color-emerald)',
                        display: 'inline-block',
                        boxShadow: '0 0 6px var(--color-emerald)',
                      }} />
                      {t('current')}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 420px !important;
            gap: 8rem !important;
          }
        }
      `}</style>
    </section>
  )
}