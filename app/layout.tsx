import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://leverageai.network'),
  title: {
    default: 'Private AI Infrastructure for Oregon Businesses | LeverageAI',
    template: '%s | LeverageAI'
  },
  description: 'SOC2 & HIPAA compliant AI deployment for Oregon businesses. On-premise or private cloud solutions. Your data never leaves your control.',
  keywords: 'AI infrastructure Oregon, private AI deployment, SOC2 compliant AI, HIPAA AI hosting, on-premise AI, Oregon AI solutions',
  authors: [{ name: 'LeverageAI LLC' }],
  creator: 'LeverageAI LLC',
  publisher: 'LeverageAI LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leverageai.network',
    siteName: 'LeverageAI',
    title: 'Private AI Infrastructure for Oregon Businesses',
    description: 'SOC2 & HIPAA compliant AI deployment for Oregon businesses. On-premise or private cloud solutions. Your data never leaves your control.',
    images: [
      {
        url: '/images/og/homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'LeverageAI - Private AI Infrastructure'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private AI Infrastructure for Oregon Businesses',
    description: 'SOC2 & HIPAA compliant AI deployment for Oregon businesses. On-premise or private cloud solutions.',
    images: ['/images/og/homepage.jpg'],
    creator: '@leverageai'
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
  },
  alternates: {
    canonical: 'https://leverageai.network',
  },
  category: 'technology',
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LeverageAI LLC",
              "alternateName": "LeverageAI",
              "url": "https://leverageai.network",
              "logo": "https://leverageai.network/images/leverage-logo.png",
              "description": "Private AI infrastructure and data analytics for Oregon businesses. SOC2 & HIPAA compliant deployment solutions.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "OR",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "url": "https://leverageai.network/contact"
              },
              "sameAs": [
                "https://www.linkedin.com/company/leverageai",
                "https://twitter.com/leverageai"
              ],
              "areaServed": {
                "@type": "State",
                "name": "Oregon"
              }
            })
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "LeverageAI LLC",
              "image": "https://leverageai.network/images/leverage-logo.png",
              "url": "https://leverageai.network",
              "priceRange": "$$$$",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "OR",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.0521,
                "longitude": -123.0868
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "areaServed": "Oregon"
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
