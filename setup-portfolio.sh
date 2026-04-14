#!/bin/bash

echo "🚀 Création de la structure complète du portfolio..."

# ==================== DOSSIERS ====================
mkdir -p app/[locale]
mkdir -p components
mkdir -p i18n
mkdir -p messages
mkdir -p public/asset

echo "📁 Dossiers créés ✅"

# ==================== FICHIERS ====================

# app/globals.css (on remplace par une version propre Tailwind)
cat > app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
  }
}
EOF

# app/layout.tsx (layout racine)
cat > app/layout.tsx << 'EOF'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ibraheem - Portfolio",
  description: "Développeur Full Stack | Sénégal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
EOF

# app/page.tsx (page racine → on la garde pour redirection éventuelle)
cat > app/page.tsx << 'EOF'
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/fr'); // Redirige automatiquement vers la version française
}
EOF

# app/[locale]/layout.tsx
cat > app/[locale]/layout.tsx << 'EOF'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
EOF

# app/[locale]/page.tsx
cat > app/[locale]/page.tsx << 'EOF'
export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Tout ton contenu portfolio viendra ici via les composants */}
      <h1 className="text-4xl font-bold text-center pt-20">Bienvenue sur mon portfolio !</h1>
    </main>
  );
}
EOF

# ==================== COMPOSANTS ====================
cat > components/Nav.tsx << 'EOF'
export default function Nav() {
  return <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md z-50">Navigation</nav>;
}
EOF

cat > components/Hero.tsx << 'EOF'
export default function Hero() {
  return <section className="h-screen flex items-center justify-center text-center">Hero Section</section>;
}
EOF

cat > components/About.tsx << 'EOF'
export default function About() {
  return <section className="py-20">About Me</section>;
}
EOF

cat > components/Projects.tsx << 'EOF'
export default function Projects() {
  return <section className="py-20">Mes Projets</section>;
}
EOF

cat > components/Skills.tsx << 'EOF'
export default function Skills() {
  return <section className="py-20">Compétences</section>;
}
EOF

cat > components/Contact.tsx << 'EOF'
export default function Contact() {
  return <section className="py-20">Contact</section>;
}
EOF

cat > components/SectionHeader.tsx << 'EOF'
export default function SectionHeader({ title }: { title: string }) {
  return <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>;
}
EOF

cat > components/Footer.tsx << 'EOF'
export default function Footer() {
  return <footer className="py-12 text-center">© 2026 Ibraheem Ndir</footer>;
}
EOF

# ==================== i18n & messages ====================
cat > i18n/request.ts << 'EOF'
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../messages/${locale}.json`)).default,
}));
EOF

cat > messages/fr.json << 'EOF'
{
  "nav": { "home": "Accueil", "about": "À propos", "projects": "Projets", "contact": "Contact" },
  "hero": { "title": "Ibraheem Ndir", "subtitle": "Développeur Full Stack" }
}
EOF

cat > messages/en.json << 'EOF'
{
  "nav": { "home": "Home", "about": "About", "projects": "Projects", "contact": "Contact" },
  "hero": { "title": "Ibraheem Ndir", "subtitle": "Full Stack Developer" }
}
EOF

# ==================== AUTRES FICHIERS ====================
cat > proxy.ts << 'EOF'
// Proxy pour les appels API (tu pourras le remplir plus tard)
export {};
EOF

# next.config.ts (mise à jour)
cat > next.config.ts << 'EOF'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
EOF

echo "🎉 Tout a été créé avec succès !"
echo ""
echo "Prochaines étapes :"
echo "1. npm install next-intl"
echo "2. npm run dev"
echo "3. Remplace les composants par ton vrai contenu"
echo ""
echo "Tu veux que je te donne maintenant le code complet pour chaque composant (Hero, Projects, etc.) ? Dis-moi oui !"
