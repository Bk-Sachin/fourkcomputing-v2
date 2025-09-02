import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'FourkComputing - Leading Software Development Agency | Web, Mobile & AI Solutions',
    template: '%s | FourkComputing - Digital Excellence'
  },
  description: 'FourkComputing is a premier software development agency specializing in web applications, mobile apps, AI solutions, and digital transformation. Get cutting-edge technology solutions for your business.',
  keywords: [
    'software development agency',
    'web development company',
    'mobile app development',
    'AI solutions',
    'digital transformation',
    'custom software development',
    'React development',
    'Next.js development',
    'Node.js development',
    'enterprise software',
    'startup software solutions',
    'e-commerce development',
    'cloud solutions',
    'UI/UX design',
    'software consulting'
  ],
  authors: [{ name: 'FourkComputing Team' }],
  creator: 'FourkComputing',
  publisher: 'FourkComputing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fourkcomputing.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fourkcomputing.com',
    siteName: 'FourkComputing',
    title: 'FourkComputing - Leading Software Development Agency | Web, Mobile & AI Solutions',
    description: 'Transform your business with cutting-edge software solutions. Expert web development, mobile apps, AI integration, and digital transformation services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FourkComputing - Software Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FourkComputing - Leading Software Development Agency',
    description: 'Transform your business with cutting-edge software solutions. Expert web development, mobile apps, AI integration, and digital transformation services.',
    images: ['/og-image.jpg'],
    creator: '@fourkcomputing',
    site: '@fourkcomputing',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Software Development Agency',
  other: {
    'msapplication-TileColor': '#3b82f6',
    'theme-color': '#3b82f6',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://fourkcomputing.com" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FourkComputing",
              "url": "https://fourkcomputing.com",
              "logo": "https://fourkcomputing.com/logo.png",
              "description": "Leading software development agency specializing in web applications, mobile apps, AI solutions, and digital transformation.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@fourkcomputing.com"
              },
              "sameAs": [
                "https://twitter.com/fourkcomputing",
                "https://linkedin.com/company/fourkcomputing",
                "https://github.com/fourkcomputing"
              ],
              "foundingDate": "2020",
              "numberOfEmployees": "25-50",
              "serviceArea": "Worldwide"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
