import GlobalStyle from '@/styles/GlobalStyle';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
