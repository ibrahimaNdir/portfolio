'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeader from './SectionHeader'

export default function About() {
  const t = useTranslations('about')
  const tags = t.raw('tags') as string[]

  return (
    <section id="about" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(4rem, 6vw, 7rem) clamp(1.25rem, 5vw, 5rem)',
    }}>
      <SectionHeader number="01" title={t('title')} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 'clamp(2rem, 4vw, 4rem)',
        alignItems: 'start',
        maxWidth: 860,
      }}
        className="about-grid"
      >
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        >
          <div style={{
            width: 'clamp(150px, 20vw, 220px)',
            height: 'clamp(150px, 20vw, 220px)',
            borderRadius: '50%', padding: 3,
            background: 'linear-gradient(135deg, var(--color-violet), var(--color-emerald))',
            boxShadow: '0 0 30px var(--color-violet-glow), 0 0 60px var(--color-emerald-glow)',
          }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#1a1a2e' }}>
              <Image
                src="/asset/ibou.png"
                alt="Ibrahima NDIR"
                width={220} height={220}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                priority
              />
            </div>
          </div>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '4px 14px', borderRadius: 999,
            background: 'var(--color-bg-card)',
            border: '1px solid rgba(16,185,129,0.3)',
            color: 'var(--color-emerald)', fontSize: '0.75rem',
            fontFamily: 'var(--font-code)',
          }}>
           
           
          </div>
        </motion.div>

        {/* Contenu */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p style={{
            color: 'var(--color-text-muted)', fontSize: '0.92rem',
            lineHeight: 1.8, marginBottom: '1rem',
          }}>
            {t('bio1')}
          </p>


          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{
                  padding: '4px 14px', borderRadius: 999,
                  fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.03em',
                  fontFamily: 'var(--font-code)',
                  ...(i % 2 === 0
                    ? { background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.3)', color: 'var(--color-violet)' }
                    : { background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', color: 'var(--color-emerald)' }
                  ),
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Responsive mobile */}
      <style>{`
        @media (max-width: 640px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}