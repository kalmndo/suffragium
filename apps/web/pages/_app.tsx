import "../styles/globals.css";
import { Inter } from "next/font/google";

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${interFont.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
