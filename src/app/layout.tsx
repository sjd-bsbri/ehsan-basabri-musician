import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'پورتفولیو آهنگساز',
  description: 'پورتفولیو حرفه‌ای آهنگساز',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link 
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" 
          rel="stylesheet" 
          type="text/css" 
        />
      </head>
      <body className="font-vazir">{children}</body>
    </html>
  )
}