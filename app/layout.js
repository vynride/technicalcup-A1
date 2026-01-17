import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://technicalcup-a1.vercel.app/'),
  title: {
    default: "Section A1 | Web Wars: Section Showdown",
    template: "%s | Section A1",
  },
  description: "Technical Cup - Section A1's Section Showdown website. Explore our blog, announcements, study resources, gallery, and member profiles.",
  keywords: ["Technical Cup", "Web Wars", "Section Showdown", "Section A1", "coding", "competition", "MNNIT"],
  authors: [{ name: "Section A1 Team" }],
  creator: "Section A1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://technicalcup-a1.vercel.app/",
    title: "Section A1 | Web Wars: Section Showdown",
    description: "Technical Cup - Section A1's Section Showdown website",
    siteName: "Section A1 Technical Cup",
    images: [
      {
        url: "/mascot-with-books.webp",
        width: 800,
        height: 600,
        alt: "Section A1 Mascot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Section A1 | Web Wars: Section Showdown",
    description: "Technical Cup - Section A1's Section Showdown website",
    images: ["/mascot-with-books.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`} suppressHydrationWarning>
        <SmoothScrolling />
        {children}
      </body>
    </html>
  );
}
