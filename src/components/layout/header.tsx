import Navbar from '@/components/navbar/navbar';
import { CustomThemeContext } from '@/providers/customtheme';
import { Container, useColorModeValue } from '@chakra-ui/react';
import { useContext } from 'react';

const Header = () => {
  const { currentColor } = useContext(CustomThemeContext);

  return (
    <Container
      as='header'
      position='fixed'
      top='0'
      p={4}
      zIndex='sticky'
      maxW='full'
      borderBottomColor={useColorModeValue(
        `${currentColor}.500`,
        `${currentColor}.300`
      )}
      borderBottomWidth={1}
      borderBottomStyle='solid'
    >
      <Navbar />
    </Container>
  );
};

export default Header;
