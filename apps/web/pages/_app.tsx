import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

const poppinsFont = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  preload: true,
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MyApp({ Component, pageProps }: any) {
  return (
    <TooltipProvider>
      <style jsx global>{`
        :root {
          --font-poppins: ${poppinsFont.style.fontFamily};
          --font-inter: ${interFont.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </TooltipProvider>
  );
}
