import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                phonk: ['var(--font-phonk)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                // Body
                'body-lg': ['1.125rem', { lineHeight: '1.6' }],
                'body-md': ['1rem', { lineHeight: '1.6' }],
                'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
                'body-xs': ['0.875rem', { lineHeight: '1.6' }],
                // Labels & Code
                'label-md': ['0.875rem', { lineHeight: '1.4' }],
                'label-sm': ['0.8125rem', { lineHeight: '1.4' }],
                'label-xs': ['0.75rem', { lineHeight: '1.4' }],
                'code-lg': ['1rem', { lineHeight: '1.5' }],
                'code-md': ['0.9375rem', { lineHeight: '1.5' }],
                'code-sm': ['0.875rem', { lineHeight: '1.5' }],
            },
            colors: {
                // Primary palette
                text: {
                    primary: 'var(--color-text-primary)',
                    secondary: 'var(--color-text-secondary)',
                    tertiary: 'var(--color-text-tertiary)',
                    inverse: 'var(--color-text-inverse)',
                },
                bg: {
                    DEFAULT: 'var(--color-bg)',
                    card: 'var(--color-bg-card)',
                    hover: 'var(--color-bg-hover)',
                },
                violet: 'var(--color-violet)',
                emerald: 'var(--color-emerald)',
                border: 'var(--color-border)',
            },
            animation: {
                ticker: 'var(--animate-ticker)',
                'pulse-dot': 'var(--animate-pulse-dot)',
            },
        },
    },
    plugins: [],
}

export default config
