import { ScrollViewStyleReset } from 'expo-router/html';
import type { ReactNode } from 'react';

export default function Root({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Snapchat" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <style>{`
          html, body, #root {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background: #000;
            overflow: hidden;
          }
        `}</style>
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
