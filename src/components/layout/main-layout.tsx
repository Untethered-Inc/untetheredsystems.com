import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <Box as='main'>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
