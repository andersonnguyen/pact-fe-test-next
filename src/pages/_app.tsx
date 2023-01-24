import "modern-normalize/modern-normalize.css";
import "@/styles/app.scss";

import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { inter, ibmPlexMono } from "@/fonts";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <style jsx global>{`
        html {
          --font-inter: ${inter.style.fontFamily};
          --font-ibm-plex-mono: ${ibmPlexMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
