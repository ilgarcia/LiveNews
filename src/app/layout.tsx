import Header from "./Header";
import Providers from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      {/* <Providers> */}
        <body
          className={`${inter.className} bg-gray-100 dark:bg-zinc-900 transition-all duration-700`}
        >
          <Header />
          <section className="max-w-6xl mx-auto">{children}</section>
        </body>
      {/* </Providers> */}
    </html>
  );
}
