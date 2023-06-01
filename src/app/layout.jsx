import Footer from "../components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google clone",
  description: "Google clone app by nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
