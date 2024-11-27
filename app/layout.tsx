import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './global.css';

import { ColorSchemeScript, Container, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Metadata, Viewport } from 'next';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { StateSynchronizer } from '~/components/StateSynchronizer';
import { APP_NAME, APP_URL, AUTHOR_NAME, AUTHOR_URL, NEXT_YEAR, YEAR } from '~/lib/config';
import { theme } from '~/theme';
import classes from './layout.module.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#25262b' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  applicationName: APP_NAME,
  title: APP_NAME,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  description: `Estimează rapid taxele pe care trebuie să le plătești ca PFA în ${NEXT_YEAR} pentru veniturile din ${YEAR}, dacă lucrezi în sistem real ca neplătitor de TVA`,
  keywords: `pfa, freelancing, taxe, calculator, grafic, contabilitate, fiscalitate, venituri, impozit, contributii, sistem real, ${YEAR}, ${NEXT_YEAR}`,
  openGraph: { images: [{ url: '/taxe-pfa.png', alt: APP_NAME }] },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="google-site-verification" content="L6JPlDRjMoPJJJE0rr6qy4kzgOlgQ0hUdny-OMIEP4I" />
      </head>
      <body>
        <StateSynchronizer />
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Notifications position="top-center" />
          <Header />
          <Container size="sm" className={classes.container}>
            {children}
            <Footer />
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
