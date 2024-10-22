import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K.A Solutions",
  description:
    "Descubra soluções sustentáveis com nossos serviços de instalação de painéis solares e sistemas de irrigação automatizados. Oferecemos eficiência energética e manejo inteligente da irrigação, com controle manual, temporizado ou por sensores de humidade. Transforme sua propriedade com tecnologia de ponta e economize água e energia!",
  // icons: "/logo.jpeg",
  icons: "/logo-mini.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-ao">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
