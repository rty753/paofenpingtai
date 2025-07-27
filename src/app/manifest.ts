import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '跑分平台 - 印度三方支付系统',
    short_name: '跑分平台',
    description: '专业的跑分平台，提供印度三方支付系统、代收代付功能、自动回调、码商团队分级代理',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    categories: ['finance', 'business'],
    lang: 'zh-CN',
    scope: '/',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.ico', 
        sizes: '192x192',
        type: 'image/x-icon',
        purpose: 'maskable',
      },
      {
        src: '/favicon.ico',
        sizes: '512x512', 
        type: 'image/x-icon',
        purpose: 'any',
      },
    ],
  }
} 