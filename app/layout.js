import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Section A1 | Web Wars: Section Showdown",
  description: "Technical Cup - Section A1's Section Showdown website. Explore our blog, announcements, study resources, gallery, and member profiles.",
  keywords: ["Technical Cup", "Web Wars", "Section Showdown", "Section A1", "coding", "competition"],
  authors: [{ name: "Section A1 Team" }],
  openGraph: {
    title: "Section A1 | Web Wars: Section Showdown",
    description: "Technical Cup - Section A1's Section Showdown website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <SmoothScrolling />
        {children}
      </body>
    </html>
  );
}
