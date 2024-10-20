import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/organisms/NavBar";
import { ThemeProvider } from "./context/theme/ThemeProvider";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body
        className={ `antialiased font-sans bg-white dark:bg-black text-black dark:text-white` }
      > 
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <NavBar />
        <main>
          {children}
        </main>
      </ThemeProvider>
      </body>
    </html>
  );
}
