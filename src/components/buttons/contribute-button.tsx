import { Box, Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { BsHeartFill } from 'react-icons/bs';

const ContributeButton = () => {
  return (
    <Box display={{ base: 'none', md: 'inline-flex' }}>
      <NextLink href='/contribute' passHref>
        <Link isExternal>
          <Button rightIcon={<BsHeartFill color='red' />} color='body'>
            Contribute
          </Button>
        </Link>
      </NextLink>
    </Box>
  );
};

export default ContributeButton;
