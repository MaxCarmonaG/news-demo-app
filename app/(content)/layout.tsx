import MainHeader from '@/components/MainHeader';
import '../globals.css';
import { inter, merriweather } from '@/fonts';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
 return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  )
}
