import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Tailwind CSS Playground",
  description: "For practices of Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className='text-3xl font-bold underline'
      >
        {children}
      </body>
    </html>
  );
}
