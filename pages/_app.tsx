import Layout from '@/components/layout/main-layout';
import ThemeSelector from '@/components/theme-selector';
import '@/internationalization/i18n';
import CustomThemeProvider from '@/providers/customtheme-provider';
import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/josefin-sans/700.css';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <CustomThemeProvider>
        <ThemeSelector />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CustomThemeProvider>
    </ChakraProvider>
  );
};

export default App;
