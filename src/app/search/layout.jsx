import SearchHeader from "@/src/components/SearchHeader";
import "./../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google clone",
  description: "Google clone app by nextjs",
};

export default function SearchLayout({ children }) {
  return (
    <div className={inter.className}>
      <SearchHeader />
      {children}
    </div>
  );
}
