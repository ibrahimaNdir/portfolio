interface Props {
  number: string
  title: string
}

export default function SectionHeader({ number, title }: Props) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '3rem' }}>
      <span
        style={{
          fontFamily: 'var(--font-head)',
          fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
          fontWeight: 900,
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.06)',
          userSelect: 'none',
        }}
      >
        {number}
      </span>
      <h2
        style={{
          fontFamily: 'var(--font-head)',
          fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
          fontWeight: 800,
          color: 'var(--color-text)',
        }}
      >
        <span style={{ color: 'var(--color-violet)', fontFamily: 'var(--font-code)' }}>&lt;</span>
        {title}
        <span style={{ color: 'var(--color-emerald)', fontFamily: 'var(--font-code)' }}>/&gt;</span>
      </h2>
    </div>
  )
}