import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '专业跑分平台 - 全球首家跑分平台 行业首创全自动买卖模式',
    short_name: '专业跑分平台',
    description: '行业首创全自动买卖模式！专业跑分平台，跑分源码开源，专业技术支持。全球首家跑分平台，支持代收代付、自动回调、分级代理',
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