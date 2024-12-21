import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const jetBrain = JetBrains_Mono({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Ujwal's Portfolio",
  description: "Ujwal Yangalwar's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrain.variable} ${jetBrain.variable} antialiased`}
      >
        <Provider >
          {children}
        </Provider>
      </body>
    </html>
  );
}
