import type { Metadata, Viewport } from 'next';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'TestApp';
const APP_DESCRIPTION = 'A test website for app functionality and SEO testing';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | TestApp' },
  description: APP_DESCRIPTION,
  keywords: 'test, testing, SEOtest, app functionality, york, app development',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: 'https://testapp.com',
    title: 'TestApp - A Test for Functionality',
    description: APP_DESCRIPTION,
    images: [
      {
        url: 'https://testapp.com/og-image.png', // replace with actual test image URL
        alt: 'TestApp OG image',
      },
    ],
    siteName: 'TestApp',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TestApp',
    creator: '@TestAppCreator',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TestApp" />
        <link rel="canonical" href="https://testapp.com" />
        {/* Add Google Analytics Script Here */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

