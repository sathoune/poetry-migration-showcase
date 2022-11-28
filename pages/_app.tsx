import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/moon.css";
import "reveal.js/dist/reset.css";
import "reveal.js/plugin/highlight/monokai.css";
import "../styles/remote.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
