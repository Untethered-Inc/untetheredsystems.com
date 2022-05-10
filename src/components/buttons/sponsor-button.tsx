import { CustomThemeContext } from '@/providers/customtheme-provider';
import { Box, Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useContext } from 'react';
import { BsHeartFill } from 'react-icons/bs';

const SponsorButton = () => {
  const { currentColor } = useContext(CustomThemeContext);

  return (
    <Box display={{ base: 'none', md: 'inline-flex' }}>
      <NextLink href='/sponsor' passHref>
        <Link isExternal>
          <Button
            rightIcon={<BsHeartFill color='red' />}
            colorScheme={currentColor}
            color='body'
          >
            Sponsor
          </Button>
        </Link>
      </NextLink>
    </Box>
  );
};

export default SponsorButton;
