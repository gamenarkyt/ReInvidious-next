"use client";
import "./globals.scss";
import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const client = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={client}>
          <Header />
          <main>{children}</main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
