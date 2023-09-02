import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Durusu',
  description: 'Getting started with Durusu',
  url: 'https://durusu.com',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* place hero section here and footer  */} 
        <body className={inter.className}>

            {children}
        </body>
    </html>
  )
}
