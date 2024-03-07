import './globals.css'
import { GTMnoscript } from './lib/GTMnoscript'
import { GAscript } from './lib/GAscript'
import { GTMscript } from './lib/GTMscript'
import { Anton } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import {Footer} from './components/Footer'
const open_sans = Open_Sans(
  {
      subsets:['latin'],
      weight: ['400', '600', '700', '800'],
      variable: '--font-open-sans'
  }
)
const anton = Anton(
  {
      subsets:['latin'],
      weight: '400',
      variable: '--font-anton'
      
  }
)
export const metadata = {
  title:process.env.NEXT_PUBLIC_PAGE_TITLE ,
  description: process.env.NEXT_PUBLIC_PAGE_DESCRIPTION ,
  ogDescription: process.env.NEXT_PUBLIC_PAGE_OGDESCRIPTION
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/63eb23b7e33e0b09a85385b4/fd64a92c-b011-4814-9310-97bd1820ddd5/favicon.ico"/>
    <meta property="og:description" content={process.env.NEXT_PUBLIC_PAGE_CONTENT}></meta>
      <GTMscript/>
      <GAscript />
    </head>
      <body className={`${anton.className} ${anton.variable} ${open_sans.variable}`}>
        {children}
        <GTMnoscript />
        
      </body>
    </html>
  )
}
