import Header from '@/components/Header';
import Head from 'next/head';
import { ReactNode, FC } from 'react';
import { LayoutWrapper } from './style';

type LayoutProps = {
  children?: ReactNode;
};

const Layuot: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Head>
        <title>Crypto Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      {children}
    </LayoutWrapper>
  );
};

export default Layuot;
