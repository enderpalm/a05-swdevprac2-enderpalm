import TopMenu from '@/components/TopMenu';
import './globals.css'

export const metadata = {
  title: "Event booking app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopMenu />
        {children}
      </body>
    </html>
  );
}
