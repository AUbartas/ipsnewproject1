import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header/header'
import NavBar from './components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Worksober admin',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <NavBar/>
        {children}
        </body>
    </html>
  )
}
