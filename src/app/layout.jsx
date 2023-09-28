import '@styles/globals.css';

export const metadata = {
  title: 'Automation',
  description: 'Automation landing description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
