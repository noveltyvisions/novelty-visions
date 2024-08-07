import { Lato, Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const lato = Lato({
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900'],
  subsets: ["latin"]
 })

const openSans = Open_Sans({
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"]
})

export const metadata = {
  title: "Novelty Visions",
  description: "Welcome to Novelty Visions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${lato.variable} ${openSans.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
