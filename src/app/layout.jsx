import '@styles/globals.css';

export const metadata = {
  title: 'Neuronals',
  description: 'Artificial Intelligence Powered Automation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
