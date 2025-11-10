import type { Metadata } from 'next'
import './globals.css'
import BottomNavigation from '@/components/BottomNavigation'

export const metadata: Metadata = {
  title: '25-nifashion',
  description: 'Next.js 웹앱',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <div className="pb-16">
          {children}
        </div>
        <BottomNavigation />
      </body>
    </html>
  )
}


