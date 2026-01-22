import "./globals.css";
import Navbar from "@/component/layout/Navbar.jsx";
import Footer from "@/component/layout/Footer.jsx";

// Metadata for Next.js App Router
export const metadata = {
  title: "Clinxcon",
  description: "Your site description here",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: {
      rel: "manifest",
      url: "/favicon/site.webmanifest",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className="bg-white text-black">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
