
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Light.otf",      weight: "300" },
    { path: "../public/fonts/Satoshi-Regular.otf",    weight: "400" },
    { path: "../public/fonts/Satoshi-Medium.otf",     weight: "500" },
    { path: "../public/fonts/Satoshi-Bold.otf",       weight: "700" },
    { path: "../public/fonts/Satoshi-Black.otf",      weight: "900" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    { path: "../public/fonts/ClashDisplay-Extralight.otf", weight: "200" },
    { path: "../public/fonts/ClashDisplay-Light.otf",      weight: "300" },
    { path: "../public/fonts/ClashDisplay-Regular.otf",    weight: "400" },
    { path: "../public/fonts/ClashDisplay-Medium.otf",     weight: "500" },
    { path: "../public/fonts/ClashDisplay-Semibold.otf",   weight: "600" },
    { path: "../public/fonts/ClashDisplay-Bold.otf",       weight: "700" },
  ],
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ibraheem Ndir - Portfolio",
  description: "Développeur Full Stack | Sénégal",
  icons: {
    icon: "/asset/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${satoshi.variable} ${clashDisplay.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body suppressHydrationWarning className="bg-zinc-950 text-white">
        {children}
      </body>
    </html>
  );
}