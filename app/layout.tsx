import type { Metadata } from "next";
import { Roboto, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const getRoboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
});

const getSourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});
// const getSansSerif =
export const metadata: Metadata = {
  title: "Afririse Property Investments",
  description: "The African Funf for African Companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${getRoboto.variable} ${getSourceSans.variable} antialiased font-roboto `}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
