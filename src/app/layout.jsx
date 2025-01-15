import './globals.css';
import Header from '../components/home/Header';

export const metadata = {
  title: 'Logisco | Logistics Solutions',
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
