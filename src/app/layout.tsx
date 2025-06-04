import '@mantine/core/styles.css'

import Provider from '@/components/Provider'
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'
import { Geist } from 'next/font/google'

const geist = Geist()

export const metadata = {
  title: 'JM Arsip',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" {...mantineHtmlProps} className={geist.className}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
