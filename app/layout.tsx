import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/main-navigation";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticket Booking App",
  description: "Booking tickets with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="border-b flex flex-col items-center mb-5 px-5 py-3">
            <div className="max-w-6xl w-full">
              <MainNavigation />
            </div>
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
