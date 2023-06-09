import { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Header from '~/components/header/Header';
import Footer from '~/components/footer/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
const monserrat = Montserrat({
  display: 'swap',
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-monserrat',
});

export const metadata: Metadata = {
  title: {
    template: '%s | DigiPage',
    default: 'DigiPage',
  },
  description: 'DigiPage Digital Marketing landing page',
  keywords: ['Next.js', 'React', 'Typescript', 'Tailwind CSS', 'Landing Page'],
  authors: { name: 'Izzul', url: 'https://github.com/izzul-ali' },
  themeColor: 'black',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${monserrat.variable} ${inter.variable}`}>
      <body className={`bg-gray-950 text-gray-100`}>
        <main className="relative overflow-x-hidden">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
