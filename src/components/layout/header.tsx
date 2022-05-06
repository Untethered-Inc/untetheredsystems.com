import LanguagesButton from '@/components/buttons/languages-button';
import ThemeButton from '@/components/buttons/theme-button';
import { HStack } from '@chakra-ui/react';

const Header = () => {
  return (
    <HStack
      as='header'
      position='fixed'
      top='0'
      p={8}
      zIndex='tooltip'
      justify='space-between'
      align='center'
      w='100%'
    >
      <ThemeButton />
      <LanguagesButton />
    </HStack>
  );
};

export default Header;
