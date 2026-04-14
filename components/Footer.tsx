'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="mt-20 py-10 border-t border-zinc-800/60 text-center">
      <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-400 font-medium leading-relaxed">
        
        {/* Logo style dev */}
        <span className="flex items-center gap-1">
          <span className="text-violet-400">&lt;/</span>
          <span className="font-mono text-white tracking-wide">
            Ibraheem
          </span>
          <span className="text-emerald-400">&gt;</span>
        </span>

        <span className="text-zinc-600 hidden sm:inline">•</span>

        {/* Year */}
        <span className="font-mono text-zinc-500">
          {new Date().getFullYear()}
        </span>

        <span className="text-zinc-600 hidden sm:inline">•</span>

        {/* Text */}
        <span className="flex items-center gap-1">
          {t('made')}
          <span className="text-violet-400 animate-pulse">♥</span>
          <span className="font-mono text-emerald-400">
            &lt;code /&gt;
          </span>
        </span>
      </p>
    </footer>
  );
}