import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Bloco de Notas",
    description: "Centro de Estudos",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth scroll-pt-20">
            <body>
                <Navbar />
                <main className="relative overflow-hidden">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
