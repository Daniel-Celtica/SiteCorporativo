import AccessibilityWidget from "@/components/AccessibilityWidget";
import { FontSizeProvider } from "@/components/FontSizeContext";
import "@/styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { ThemeProvider } from "@material-tailwind/react";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  return (
    <FontSizeProvider>
      <ThemeProvider>
     
        <Component {...pageProps} />
      </ThemeProvider>
    </FontSizeProvider>

  );
}
