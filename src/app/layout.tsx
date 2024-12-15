// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Victor Bravim | Desenvolvedor Front-End e UI Designer",
    description: "Portfólio de Victor Bravim, especialista em desenvolvimento Front-End e design de interfaces.",
    keywords: ["Victor Bravim", "Desenvolvedor Front-End", "UI Designer", "Portfólio", "Web Developer", "Wordpress", "Elementor", "Framer"],
    authors: [{ name: "Victor Bravim", url: "https://www.victorbravim.com" }],
    publisher: "Victor Bravim",
  };  

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={`antialiased ${inter.className}`}>
                {children}
            </body>
        </html>
    );
}