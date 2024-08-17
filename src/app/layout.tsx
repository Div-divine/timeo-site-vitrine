import "./globals.css"
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/components/nav/Header";
import { Footer } from "@/components/Footer/Footer";
import { Content } from "@prismicio/client";


export default function RootLayout({
  children,
  bgColor = "#e2e8f0",
  footer,
}: Readonly<{
  children: React.ReactNode;
  bgColor: string;
  footer: Content.FooterDocument
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer bgColor={bgColor} />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
