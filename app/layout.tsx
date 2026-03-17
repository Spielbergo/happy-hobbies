import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "../styles/index.css";

export const metadata: Metadata = {
  title: {
    default: "Happy Hobbies – Find Joy in Every Craft & Hobby",
    template: "%s | Happy Hobbies",
  },
  description:
    "Your ultimate destination for exploring creative crafts, connecting with fellow enthusiasts, and discovering new passions.",
  openGraph: {
    siteName: "Happy Hobbies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
