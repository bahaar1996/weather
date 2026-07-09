import NextIntlProvider from "@/providers/NextIntlProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import UnitsProvider from "@/providers/UnitsProvider";
import type { Metadata } from "next";
import faMessages from "../locales/fa.json";
import "./globals.css";

export const metadata: Metadata = {
  title: "برنامه هواشناسی",
  description: "بررسی آب و هوای شهر شما",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className={`h-full`}>
      <NextIntlProvider messages={faMessages}>
        <ReactQueryProvider>
          <body className="min-h-full flex flex-col max-w-300 mx-auto px-4 md:px-6">
            <UnitsProvider>{children}</UnitsProvider>
          </body>
        </ReactQueryProvider>
      </NextIntlProvider>
    </html>
  );
}
