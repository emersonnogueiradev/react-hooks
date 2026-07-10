import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TemaProvider } from "@/data/context/TemaProvider";


export default function App({ Component, pageProps }: AppProps) {
    return (
        <TemaProvider>
            <Component {...pageProps} />
        </TemaProvider>
    );
}
