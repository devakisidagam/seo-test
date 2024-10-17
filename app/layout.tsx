import type { Metadata, Viewport } from 'next';


type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'StoryDarpan';
const APP_DESCRIPTION = 'A website for children to improve creativity and imagination';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | Storydarpan' },
  description: APP_DESCRIPTION,
  keywords: 'children, creativity, imagination, storytelling, education, kids activities',
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
    url: 'https://storydarpan.com',
    title: 'StoryDarpan - A World of Creativity',
    description: APP_DESCRIPTION,
    images: [
      {
        url: 'https://storydarpan.com/og-image.png', // replace with your actual OG image URL
        alt: 'StoryDarpan OG image',
      },
    ],
    siteName: 'StoryDarpan',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@StoryDarpan',
    creator: '@StoryDarpan',
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
      
      <meta name="robots" content="index, follow" />
      <meta name="author" content="StoryDarpan" />
      <link rel="canonical" href="https://storydarpan.com" />
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
