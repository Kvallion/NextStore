import Noop from "@components/common/utils/Noop";
import type { AppProps } from "next/app";
import { Children, FC } from "react";
import "@assests/main.scss";

interface AppPropsLayoutExtesion {
    Component: {
        Layout?: FC<{ children: React.ReactNode }>;
    };
}

export default function App({ Component, pageProps }: AppProps & AppPropsLayoutExtesion) {
    const Layout = Component.Layout ?? Noop;

    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
