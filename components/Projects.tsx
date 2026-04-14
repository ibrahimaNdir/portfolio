'use client'

import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'  // ✅ ajout useEffect
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import SectionHeader from './SectionHeader'


const TECH_ICONS: Record<string, string> = {
  'Flutter':     '/asset/flutter.svg',
  'Dart':        '/asset/dart.svg',
  'Laravel':     '/asset/laravel.svg',
  'PHP':         '/asset/Php_light.svg',
  'JavaScript':  '/asset/javascript.svg',
  'Java':        '/asset/java.svg',
  'PostgreSQL':  '/asset/postgresql.svg',
  'Firebase':    '/asset/firebase.svg',
  'Spring Boot': '/asset/spring.svg',
  'TailwindCSS': '/asset/tailwindcss.svg',
  'Figma':       '/asset/figma.svg',
  'Postman':     '/asset/postman.svg',
}


const ACCENTS = ['#8b5cf6', '#10b981', '#3b82f6', '#ec4899', '#f59e0b']


export default function Projects() {
  const t     = useTranslations('projects')
  const items = t.raw('items') as Array<{
    title: string; desc: string; techs: string[]
    url?: string; github?: string; logo?: string; image?: string
  }>

  return (
    <section id="projects" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(4rem, 6vw, 7rem) clamp(1.25rem, 5vw, 5rem)',
    }}>
      <SectionHeader number="02" title={t('title')} />

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        maxWidth: 1100,
      }}>
        {items.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            style={{ width: '100%', maxWidth: 320 }}
          >
            <ProjectCard project={project} accent={ACCENTS[i % ACCENTS.length]} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}


/* ─────────────────────────────────
   Carte individuelle
───────────────────────────────── */
function ProjectCard({ project, accent }: {
  project: {
    title: string; desc: string; techs: string[]
    url?: string; github?: string; logo?: string; image?: string
  }
  accent: string
}) {
  const [hovered, setHovered] = useState(false)
  const [mounted, setMounted] = useState(false)  // ✅ fix hydration

  useEffect(() => {
    setMounted(true)  // ✅ s'exécute uniquement côté client
  }, [])

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      suppressHydrationWarning  // ✅ fix hydration
      style={{
        borderRadius: 16,
        overflow: 'hidden',
        cursor: 'pointer',
        background: 'var(--color-bg-card)',
        border: '1px solid',
        borderColor: hovered ? `${accent}55` : 'var(--color-border)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 20px 50px ${accent}22, rgba(0,0,0,0.15) 0px 10px 30px`
          : 'rgba(0,0,0,0.12) 0px 4px 20px',
        transition: 'box-shadow 0.4s ease, border-color 0.3s ease, transform 0.35s ease',
      }}
    >

      {/* ── Zone image ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '14rem',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${accent}28, ${accent}0c)`,
      }}>

        {project.image ? (
          <div style={{
            position: 'absolute', inset: 0,
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transformOrigin: 'center',
            transition: 'transform 0.45s ease-in-out',
          }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: 'cover', opacity: hovered ? 0.3 : 0.85 }}
            />
          </div>
        ) : (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.45s ease-in-out',
          }}>
            <i className="fa-solid fa-code-branch"
              style={{ fontSize: '4.5rem', color: accent, opacity: 0.15 }} />
          </div>
        )}

        {/* ── Overlay hover ── */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '0.75rem', padding: '1.25rem',
          background: 'rgba(0,0,0,0.52)',
          backdropFilter: 'blur(6px)',
          opacity: mounted && hovered ? 1 : 0,  // ✅ mounted guard
          transition: 'opacity 0.3s ease',
        }}>
          <motion.div
            animate={hovered
              ? { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.22 } }
              : { opacity: 0, y: 8,  transition: { duration: 0.1 } }
            }
            style={{ display: 'flex', gap: '0.55rem' }}
          >
            {project.github && (
              <button
                onClick={e => { e.stopPropagation(); window.open(project.github, '_blank') }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '7px 15px', borderRadius: 99,
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.28)',
                  color: '#fff', fontSize: '0.74rem',
                  fontFamily: 'var(--font-code)', fontWeight: 600,
                  cursor: 'pointer', transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              >
                <i className="fa-brands fa-github" />
                GitHub
              </button>
            )}
            {project.url && (
              <button
                onClick={e => { e.stopPropagation(); window.open(project.url, '_blank') }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '7px 15px', borderRadius: 99,
                  background: accent, border: 'none',
                  color: '#fff', fontSize: '0.74rem',
                  fontFamily: 'var(--font-code)', fontWeight: 600,
                  cursor: 'pointer', transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <i className="fa-solid fa-arrow-up-right-from-square" />
                Live
              </button>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Zone texte ── */}
      <div style={{ padding: '1.25rem 1.4rem 1.5rem' }}>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          marginBottom: '0.65rem',
        }}>

          {/* Logo + Titre */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              position: 'relative',
              width: 38, height: 38,
              borderRadius: 10, flexShrink: 0,
              background: `${accent}18`,
              border: `1px solid ${accent}35`,
              overflow: 'hidden',
            }}>
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'contain', padding: '5px' }}
                />
              ) : (
                <i className="fa-solid fa-cube" style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: accent, fontSize: '0.85rem',
                }} />
              )}
            </div>
            <h2 style={{
              fontFamily: 'var(--font-head)',
              fontSize: '1rem', fontWeight: 700,
              color: 'var(--color-text)',
              margin: 0,
            }}>
              {project.title}
            </h2>
          </div>

          {/* Icônes tech — cercles au hover */}
          <AnimatePresence>
            {mounted && hovered && (  // ✅ mounted guard
              <motion.div
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.28rem',
                  flexShrink: 0,
                }}
              >
                {project.techs.slice(0, 4).map((tech, i) => (
                  <motion.div
                    key={tech}
                    title={tech}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: i * 0.05 } }}
                    style={{
                      position: 'relative',
                      width: 30, height: 30,      // ✅ 30px
                      borderRadius: '50%',         // ✅ cercle
                      background: 'var(--color-bg-hover)',
                      border: '1px solid var(--color-border)',
                      overflow: 'hidden',
                    }}
                  >
                    {TECH_ICONS[tech] ? (
                      <Image
                        src={TECH_ICONS[tech]}
                        alt={tech}
                        fill
                        style={{ objectFit: 'contain' }}  // ✅ sans padding
                      />
                    ) : (
                      <i className="fa-solid fa-code"
                        style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }} />
                    )}
                  </motion.div>
                ))}
                {project.techs.length > 4 && (
                  <span style={{
                    fontSize: '0.68rem',
                    color: 'var(--color-text-muted)',
                    fontFamily: 'var(--font-code)',
                  }}>
                    +{project.techs.length - 4}
                  </span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Description */}
        <p style={{
          color: 'var(--color-text-muted)',
          fontSize: '0.82rem',
          lineHeight: 1.75,
          margin: 0,
        }}>
          {project.desc}
        </p>

        {/* GitHub — bas de la zone texte */}
        {project.github && (
          <div style={{ marginTop: '1rem' }}>
            <button
              onClick={e => { e.stopPropagation(); window.open(project.github, '_blank') }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '6px 14px', borderRadius: 99,
                background: 'transparent',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-muted)',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-code)', fontWeight: 600,
                cursor: 'pointer',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = accent
                e.currentTarget.style.color = accent
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.color = 'var(--color-text-muted)'
              }}
            >
              <i className="fa-brands fa-github" />
              Voir le code
            </button>
          </div>
        )}
      </div>
    </div>
  )
}