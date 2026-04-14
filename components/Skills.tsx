'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeader from './SectionHeader'

const CATEGORIES = [
  {
    label: 'Langages',
    color: '#8b5cf6',
    skills: [
      { name: 'JavaScript', src: '/asset/javascript.svg' },
      { name: 'Dart', src: '/asset/dart.svg' },
      { name: 'Java', src: '/asset/java.svg' },
      { name: 'PHP', src: '/asset/Php_light.svg' },
    ],
  },
  {
    label: 'Frameworks',
    color: '#10b981',
    skills: [
      { name: 'Flutter', src: '/asset/flutter.svg' },
      { name: 'Laravel', src: '/asset/laravel.svg' },
      { name: 'Spring Boot', src: '/asset/spring.svg' },
      { name: 'TailwindCSS', src: '/asset/tailwindcss.svg' }, 
      { name: 'Angular', src: '/asset/angular.svg' },
      { name: 'NextJS', src: '/asset/nextjs.svg' },
      
    ],
  },
  {
    label: 'Base de données',
    color: '#3b82f6',
    skills: [
      { name: 'PostgreSQL', src: '/asset/postgresql.svg' },
      { name: 'Firebase', src: '/asset/firebase.svg' },
      { name: 'Redis', src: '/asset/redis.svg' },
      { name: 'MySQL', src: '/asset/mysql.svg' },
      { name: 'MongoDB', src: '/asset/mongodb.svg' },
    ],
  },
  {
    label: 'Outils & Design',
    color: '#ec4899',
    skills: [
      { name: 'Figma', src: '/asset/figma.svg' },

    ],
  },
  {
    label: 'Tools et Devops',
    color: '#aeda1e',
    skills: [
      { name: 'Git', src: '/asset/git.svg' },
      { name: 'Postman', src: '/asset/postman.svg' },
      { name: 'Docker', src: '/asset/docker.svg' },
    //{ name: 'Kubernetes', src: '/asset/kubernetes.svg' },
    //{ name: 'AWS', src: '/asset/aws.svg' } ,
    //{ name: 'Azure', src: '/asset/azure.svg' },
    //{ name: 'Gitlab', src: '/asset/gitlab.svg' },
    //{name: 'Google Cloud', src: '/asset/google-cloud.svg' },
    ]
  },
  {
    label: 'Cms',
    color: '#e1ec48',
    skills: [
      { name: 'Wordpress', src: '/asset/wordpress.svg' },

    ],
  },
  {
    label: 'Messaging & Streaming',
    color: '#2cbad3',
    skills: [
      { name: 'Apache Kafka', src: '/asset/apache-kafka.svg' },

    ],
  },
]


export default function Skills() {
  const t = useTranslations('skills')

  return (
    <section id="skills" style={{ padding: '5rem clamp(1.5rem, 6vw, 6rem)' }}>
      <SectionHeader number="03" title={t('title')} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: 900 }}>
        {CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.1 }}
          >
            {/* Header catégorie */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              marginBottom: '1rem',
            }}>
              {/* Trait coloré */}
              <div style={{
                width: 4, height: 18, borderRadius: 999,
                background: cat.color,
                boxShadow: `0 0 10px ${cat.color}60`,
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--font-satoshi)',
                fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: cat.color,
              }}>
                {cat.label}
              </span>
              {/* Ligne déco */}
              <div style={{
                flex: 1, height: 1,
                background: `linear-gradient(to right, ${cat.color}30, transparent)`,
              }} />
            </div>

            {/* Skills pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {cat.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: ci * 0.08 + i * 0.05 }}
                  whileHover={{ y: -3 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.55rem',
                    padding: '0.55rem 1rem',
                    background: 'var(--color-bg-card)',
                    border: `1px solid ${cat.color}25`,
                    borderRadius: 12, cursor: 'default',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = `${cat.color}60`
                    el.style.boxShadow = `0 4px 16px ${cat.color}20`
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = `${cat.color}25`
                    el.style.boxShadow = 'none'
                  }}
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={24} height={24}
                    style={{ objectFit: 'contain', flexShrink: 0 }}
                  />
                  <span style={{
                    fontFamily: 'var(--font-satoshi)',
                    fontSize: '0.78rem', fontWeight: 600,
                    color: 'var(--color-text)',
                    whiteSpace: 'nowrap',
                  }}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}