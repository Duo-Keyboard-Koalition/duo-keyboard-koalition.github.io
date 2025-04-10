import "@/app/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext"; // Import the Auth context provider
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duo Keyboard Koalition",
  description: "Community of passionate hackers, coders, and tech enthusiasts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AuthProvider> {/* Add AuthProvider here */}
          <div className="min-h-screen flex flex-col">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
