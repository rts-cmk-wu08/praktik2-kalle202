import HeaderBanner from "./components/banners/HeaderBanner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Din Mægler",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={roboto.className}
    >
      <body>
        <header>
          <HeaderBanner />
          <Nav />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}

/* "use client";
import "styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import AppBar from "./AppBar";
interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <AppBar />
          <div className={"  h-screen "}>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
} */
