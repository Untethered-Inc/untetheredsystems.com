import Navbar from '@/components/navbar/navbar';
import { Container } from '@chakra-ui/react';

const Header = () => {
  return (
    <Container
      as='header'
      position='sticky'
      top='0'
      px={{ base: 2, sm: 4 }}
      py={4}
      zIndex='sticky'
      w='full'
      maxW='container.xl'
    >
      <Navbar />
    </Container>
  );
};

export default Header;
