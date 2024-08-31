import "@/styles/globals.css";

import { AppProps } from "next/app";
import Layout from "@/components/Layout";

interface EmptyLayoutProps {
  children: React.ReactNode;
}

export default function App({ Component, pageProps }: AppProps) {
  const EmptyLayout = ({ children }: EmptyLayoutProps) => <>{children}</>;
  const SubLayout = Component.Layout || EmptyLayout;

  return (
    <Layout>
      <SubLayout>
        <Component {...pageProps} />
      </SubLayout>
    </Layout>
  );
}
