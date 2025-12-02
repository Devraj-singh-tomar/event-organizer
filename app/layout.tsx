import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ConvexClientProvider } from "./convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";

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
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
              theme: shadcn,
            }}
          >
            <ConvexClientProvider>
              {/* HEADER */}
              <Header />

              <main className="relative container mx-auto pt-40 md:pt-32 min-h-screen">
                {/* GLOW EFFECT */}

                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute top-0 left-1/4 size-96 bg-pink-400/20 blur-3xl rounded-full" />
                  <div className="absolute  bottom-0 right-1/4 size-96 bg-red-400/20 blur-3xl rounded-full" />
                </div>

                <div className="relative z-10 min-h-[70vh]">{children}</div>

                {/* FOOTER */}

                <footer className="border-t border-gray-800/50 py-6 px-6 mx-auto text-center">
                  <div className="text-gray-400 text-sm">
                    Made with ❤️ by Devraj
                  </div>
                </footer>
              </main>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
