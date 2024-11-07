import "@/styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
