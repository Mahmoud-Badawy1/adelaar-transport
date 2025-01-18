import './globals.css';

export const metadata = {
  title: 'Adelaar Transport | Logistics Solutions',
  description: 'Modern logistics solutions to take your business to the next level.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
