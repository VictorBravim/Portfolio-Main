// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Portfólio",
    description: "Victor Bravim, Desenvolvedor Front-End | UI Desiner",
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