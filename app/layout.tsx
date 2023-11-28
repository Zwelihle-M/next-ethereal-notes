import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { Toaster } from "sonner";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";


export const metadata: Metadata = {
  title: "Next Ethereal Notes",
  description: "Simple yet elegant productivity notes app",

  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo/logo-white.svg",
        href: "/logo/logo-white.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo/logo-black.svg",
        href: "/logo/logo-black.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-degular`}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
         
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              storageKey="ethereal-notes-key"
            >
              <Toaster position="top-center" />
              <ModalProvider />

              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
