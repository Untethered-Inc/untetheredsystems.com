import { Box, IconButton, Tooltip } from '@chakra-ui/react';
import NextLink from 'next/link';
import { BsFillPersonFill } from 'react-icons/bs';

const AuthButton = () => {
  return (
    <Tooltip label='Log In / Sign Up' hasArrow>
      <Box>
        <NextLink href='/authentication' passHref>
          <IconButton
            aria-label='Open authentication pop up'
            transition='color 0.2s'
            icon={<BsFillPersonFill />}
            variant='outline'
            _focus={{ outline: 'none' }}
          />
        </NextLink>
      </Box>
    </Tooltip>
  );
};

export default AuthButton;
