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
        <meta name="theme-color" content="#00000000" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <style>{`
          html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background: transparent;
            overflow: hidden;
          }
          #root, #__next {
            width: 100%;
            height: 100%;
          }
          body > div:first-child {
            --safe-top: max(env(safe-area-inset-top, 0px), 20px);
            min-height: 100dvh;
            min-height: 100svh;
            min-height: -webkit-fill-available;
            height: calc(100dvh + var(--safe-top));
            width: 100%;
            position: fixed !important;
            top: calc(-1 * var(--safe-top)) !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            margin: 0 !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            box-sizing: border-box;
          }
          .app {
            min-height: 100dvh;
            min-height: 100svh;
            min-height: -webkit-fill-available;
          }
        `}</style>
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
