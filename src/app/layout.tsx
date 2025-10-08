import { Fredoka, Sigmar, Darumadrop_One, Grechen_Fuemen, Playfair_Display, Heebo, Jacquard_12_Charted, Delicious_Handrawn, Lilita_One, Pacifico} from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";

const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"], });
const sigmar = Sigmar({ variable: "--font-sigmar", subsets: ["latin"], weight: "400", });
const darumadrop = Darumadrop_One({ variable: "--font-darumadrop", subsets: ["latin"], weight: "400", });
const grechen = Grechen_Fuemen({ variable: "--font-grechen", subsets: ["latin"], weight: "400", });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: "400", });
const heebo = Heebo({ variable: "--font-heebo", subsets: ["latin"], weight: "400", });
const jacquard = Jacquard_12_Charted({ variable: "--font-jacquard", subsets: ["latin"], weight: "400", });
const delicious = Delicious_Handrawn({ variable: "--font-delicious", subsets: ["latin"], weight: "400", });
const lilita = Lilita_One({ variable: "--font-lilita", subsets: ["latin"], weight: "400", });
const pacifico = Pacifico({ variable: "--font-pacifico", subsets: ["latin"], weight: "400", });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`
      ${fredoka.variable} 
      ${sigmar.variable} 
      ${darumadrop.variable} 
      ${grechen.variable}
      ${playfair.variable}
      ${heebo.variable}
      ${jacquard.variable}
      ${delicious.variable}
      ${lilita.variable}
      ${pacifico.variable}`}>
      <body
        className={ `antialiased bg-white dark:bg-black text-black dark:text-white` }
        style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}
      >
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <Navigation />
        {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
