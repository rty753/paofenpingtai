import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "跑分平台 | 跑分源码 | 跑分论坛 - 印度银行卡UPI跑分系统",
  description: "行业首创全自动买卖模式！专业跑分平台，提供印度印尼越南银行卡跑分、UPI跑分系统。跑分源码开源，跑分论坛交流，支持代收代付、自动回调。跑分平台搭建首选。",

  authors: [{ name: "TataPay" }],
  openGraph: {
    title: "跑分平台 | 跑分源码 | 跑分论坛 - 印度银行卡UPI跑分系统",
    description: "行业首创全自动买卖模式！专业跑分平台，提供印度印尼越南银行卡跑分、UPI跑分系统。跑分源码开源，跑分论坛交流，支持代收代付、自动回调。",
    type: "website",
    locale: "zh_CN",
    siteName: "跑分平台",
  },
  twitter: {
    card: "summary_large_image",
    title: "跑分平台 | 跑分源码 | 跑分论坛",
    description: "行业首创全自动买卖模式！专业跑分平台，印度印尼越南银行卡跑分、UPI跑分系统。跑分源码开源，跑分论坛交流，海外支付专家。",
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: '#3b82f6',
  colorScheme: 'light',
  category: 'finance',
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '跑分平台',
    description: '专业的印度三方支付系统，提供代收代付功能、自动回调、码商团队分级代理',
    url: 'https://paofenpingtai.com',
    logo: 'https://paofenpingtai.com/favicon.ico',
    contactPoint: {
      '@type': 'ContactPoint',
      url: 'https://t.me/tatapay15',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['zh', 'en']
    },
    sameAs: [
      'https://t.me/tatapay15'
    ],
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: '跑分平台服务',
        description: '印度三方支付系统、代收代付、自动回调服务',
        provider: {
          '@type': 'Organization',
          name: '跑分平台'
        },
        areaServed: {
          '@type': 'Country',
          name: 'India'
        }
      }
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '跑分平台',
    url: 'https://paofenpingtai.com',
    description: '专业的跑分平台，提供印度三方支付系统、代收代付功能、自动回调',
    inLanguage: 'zh-CN',
    isAccessibleForFree: true,
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://paofenpingtai.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '印度三方支付系统',
    description: '专业的跑分平台，支持代收代付、自动回调、分级代理等功能',
    provider: {
      '@type': 'Organization',
      name: '跑分平台'
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '跑分平台服务',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '代收功能'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '代付功能'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '跑分系统'
          }
        }
      ]
    }
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Mobile Optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="跑分平台" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        
        {/* Performance Hints */}
        <link rel="dns-prefetch" href="//t.me" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        
        {/* Canonical and Geo */}
        <link rel="canonical" href="https://paofenpingtai.com" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
