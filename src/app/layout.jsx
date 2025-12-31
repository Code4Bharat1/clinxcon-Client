import "./globals.css";
import Navbar from "@/component/layout/Navbar.jsx";
import Footer from "../component/layout/Footer.jsx";

export const metadata = {
  title: "Clinxcon",
  description: "Your site description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
    
  );
}



