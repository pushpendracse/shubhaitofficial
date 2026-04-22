import Script from 'next/script';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://shubhaitsolution.com'),
  title: "Shubha IT Solution | Professional IT & Software Services in India",
  description: "Shubha IT Solution is a leading IT company offering web development, mobile apps, cloud infrastructure, software engineering & IT consulting. Email: solutionshubhait@gmail.com | Call +91 6307558532 or +91 9528658256 today!",
  keywords: "IT solutions, web development, mobile app development, software engineering, cloud infrastructure, IT consulting, digital transformation, web design, website development, app development, IT services, technology solutions, Mathura IT company",
  authors: [{ name: "Shubha IT Solution" }],
  creator: "Shubha IT Solution",
  publisher: "Shubha IT Solution",
  formatDetection: {
    email: false,
    telephone: false,
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
  icons: {
    icon: [
      { url: '/favicon.jpg', type: 'image/jpeg' },
      { url: '/Logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/Logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/Logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/Logo.png',
    shortcut: '/favicon.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shubhaitsolution.com',
    siteName: 'Shubha IT Solution',
    title: "Shubha IT Solution | Professional IT & Software Services",
    description: "Premium IT solutions, web development, mobile apps, cloud infrastructure & digital transformation for businesses in India.",
    images: [
      {
        url: 'https://shubhaitsolution.com/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Shubha IT Solution Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shubha IT Solution | Professional IT & Software Services",
    description: "Web development, mobile apps, cloud infrastructure & IT consulting services in India.",
    creator: '@ShubhaIT',
    images: ['https://shubhaitsolution.com/Logo.png'],
  },
  alternates: {
    canonical: 'https://shubhaitsolution.com',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1d4ed8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Shubha IT Solution" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <link rel="shortcut icon" href="/favicon.jpg" type="image/jpeg" />
        
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shubha IT Solution",
              "url": "https://shubhaitsolution.com",
              "logo": "https://shubhaitsolution.com/Logo.png",
              "description": "Professional IT solutions, web development, mobile apps, cloud infrastructure & digital transformation services",
              "sameAs": [
                "https://www.facebook.com/ShubhaIT",
                "https://www.linkedin.com/company/shubha-it-solution",
                "https://twitter.com/ShubhaIT",
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-6307558532",
                "contactType": "Customer Support",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot No. 2 mini industrial Area NH-2, Barari",
                "addressLocality": "Mathura",
                "postalCode": "281001",
                "addressRegion": "UP",
                "addressCountry": "IN"
              },
              "telephone": "+91-6307558532",
              "email": "contact@shubhaitsolution.com",
              "foundingDate": "2024"
            })
          }}
        />
        
        {/* JSON-LD Local Business */}
        <Script
          id="json-ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Shubha IT Solution",
              "image": "https://shubhaitsolution.com/Logo.png",
              "url": "https://shubhaitsolution.com",
              "telephone": "+91-6307558532",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot No. 2 mini industrial Area NH-2, Barari",
                "addressLocality": "Mathura",
                "postalCode": "281001",
                "addressRegion": "UP",
                "addressCountry": "IN"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              },
              "priceRange": "₹₹"
            })
          }}
        />
        
        {/* JSON-LD BreadcrumbList */}
        <Script
          id="json-ld-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://shubhaitsolution.com",
                  "@id": "https://shubhaitsolution.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://shubhaitsolution.com/#services",
                  "@id": "https://shubhaitsolution.com/#services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "About",
                  "item": "https://shubhaitsolution.com/#about",
                  "@id": "https://shubhaitsolution.com/#about"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Contact",
                  "item": "https://shubhaitsolution.com/#contact",
                  "@id": "https://shubhaitsolution.com/#contact"
                }
              ]
            })
          }}
        />
        
        {/* Google Search Console verification - Update with actual code */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="article:publisher" content="https://shubhaitsolution.com" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Shubha IT Solution" />
        <meta name="copyright" content="2024 Shubha IT Solution" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
