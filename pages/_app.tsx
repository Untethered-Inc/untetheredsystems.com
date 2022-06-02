import Layout from '@/components/layout/main-layout';
import ThemeSelector from '@/components/theme-selector';
import '@/internationalization/i18n';
import { AuthProvider, useAuthLayer } from '@/providers/auth';
import CustomThemeProvider from '@/providers/customtheme';
import { CircularProgress, Flex } from '@chakra-ui/react';
import '@fontsource/fira-sans';
import '@fontsource/julius-sans-one';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect, useState } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  isProtected?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const isProtected = Component.isProtected ?? false;
  const { state } = useAuthLayer();

  const [enhancedPage, setEnhancedPage] = useState<ReactNode>();

  useEffect(() => {
    const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

    if (isProtected) {
      switch (state) {
        case 'CHECKING':
          setEnhancedPage(
            <Flex w='full' h='100vh' justify='center' align='center'>
              <CircularProgress isIndeterminate />
            </Flex>
          );
        case 'LOGGED_IN':
          setEnhancedPage(getLayout(<Component {...pageProps} />));
          break;
        case 'LOGGED_OUT':
        default:
          router.replace('/login');
          break;
      }
    } else {
      setEnhancedPage(getLayout(<Component {...pageProps} />));
    }
  }, [state, setEnhancedPage, Component, pageProps, isProtected, router]);

  return (
    <AuthProvider>
      <CustomThemeProvider>
        <ThemeSelector />
        <Layout>{enhancedPage}</Layout>
      </CustomThemeProvider>
    </AuthProvider>
  );
};

export default App;
