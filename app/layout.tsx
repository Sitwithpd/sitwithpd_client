import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ViewTransition } from "react";
import { ViewTransitionTracker } from "@/components/providers/view-transition-tracker";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ModalProvider } from "@/components/providers/modal-provider";
import QueryProvider from "@/components/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CalProvider } from "@/components/providers/calcom-provider";
import { HashScroller } from "@/components/providers/hash-scroller";
import { Suspense } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sitwithpd.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Sit With PD",
    default: "Sit With PD — Purpose. Direction. Personal Discovery.",
  },
  description:
    "Sit With PD is a global therapeutic network helping individuals gain clarity, build resilience, and live with greater purpose. Explore guided programmes, immersive camps, one-on-one consultations, and a meaningful community built on Purpose, Direction, and Personal Discovery.",
  keywords: [
    "Sit With PD",
    "purpose direction personal discovery",
    "therapeutic network",
    "personal growth programmes",
    "emotional healing",
    "presence-based healing",
    "one-on-one consultation",
    "therapeutic retreat",
    "therapeutic camp Nigeria",
    "self-awareness journey",
    "resilience building",
    "meaningful community",
    "Oluwatosin Sam-Abereola",
    "transformational experiences",
    "life clarity",
    "purposeful living",
  ],
  authors: [{ name: "Sit With PD Team" }],
  creator: "Sit With PD",
  publisher: "Sit With PD",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sit With PD",
    title: "Sit With PD — Purpose. Direction. Personal Discovery.",
    description:
      "A global therapeutic network helping individuals gain clarity, build resilience, and live with greater purpose through guided programmes, immersive camps, and one-on-one consultations.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sit With PD — Purpose. Direction. Personal Discovery.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sit With PD — Purpose. Direction. Personal Discovery.",
    description:
      "A global therapeutic network helping individuals gain clarity, build resilience, and live with greater purpose.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
      <body className="antialiased flex flex-col min-h-screen">
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
          <QueryProvider>
            <TooltipProvider>
              <ViewTransitionTracker />
              <ModalProvider />
              <CalProvider>
                <Suspense fallback={null}>
                  <HashScroller />
                </Suspense>
                <ViewTransition>{children}</ViewTransition>
              </CalProvider>
              <Toaster position="top-center" />
            </TooltipProvider>
          </QueryProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
