import '@/assets/styles/globals.scss'
import Providers from '@/providers/Providers'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { Golos_Text } from 'next/font/google'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'


// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg'
  },
  title: 'Home | JdmPower-Shop',
  description: 'Магазин лучшего тюнинга для японских автомобилей',
}

const golos = Golos_Text({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-golos'
})

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <html lang="en" className={golos.variable}>
      <body >
        <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
