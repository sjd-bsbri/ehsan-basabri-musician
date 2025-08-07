import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '   احسان باصبری | خلق موسیقی‌های ماندگار',
  description: 'به دنیای موسیقی من خوش آمدید. کاوش در مجموعه‌ای از احساسی‌ترین و قدرتمندترین آثار من. هر قطعه، داستانی‌ست که با نت‌ها روایت می‌شود. برای جان بخشیدن به پروژه خود با من تماس بگیرید.',

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