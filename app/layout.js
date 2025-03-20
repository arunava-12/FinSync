import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinSync",
  description: "Finance Tracking App",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
          {/*Header*/}
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          {/*Footer*/}
          <footer className="bg-blue-50 py-8">
            <div className="container mx-auto font-bold px-4 text-center text-gray-600 text-xl">
              <p>Made with 💗 by Arunava</p>
            </div>
          </footer>
          </body>
    </html>
    </ClerkProvider>
  );
}
