import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Event",
  description: "Discover and create events seamlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 texxt-white`}
      >
        <main className="relative container mx-auto pt-40 md:pt-32 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
