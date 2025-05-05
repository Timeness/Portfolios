import { NextUIProvider } from '@nextui-org/react';
import './globals.css';

export const metadata = {
  title: 'Soumo | Portfolio',
  description: 'Portfolio of Soumo, a developer, designer, anime lover, and entrepreneur.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
