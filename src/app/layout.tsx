
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Clarity } from '@/components/clarity';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'Sanjiwani Health',
  description: 'Your trusted partner in health and wellness.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Noto+Sans+Devanagari:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Analytics />
        <Clarity />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7V5GSKKC29"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7V5GSKKC29');
          `}
        </Script>
      </body>
    </html>
  );
}
