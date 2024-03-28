import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { GlobalStyle } from "@/styles/globalStyle";
import Providers from "@/providers/Providers";
import HeaderClient from "@/components/Headers/HeaderClient/HeaderClient";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto_Mono({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Providers>
          <GlobalStyle />
          <HeaderClient />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

//Сдесь сделать динамическую метадату
