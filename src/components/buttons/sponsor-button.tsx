import { Button, Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { BsHeartFill } from 'react-icons/bs';

type SponsorButtonProps = {
  color: string;
};

const SponsorButton = ({ color }: SponsorButtonProps) => {
  const hoverColor = useColorModeValue(`${color}.400`, `${color}.200`);

  return (
    <NextLink href='/sponsor' passHref>
      <Link isExternal>
        <Button
          rightIcon={<BsHeartFill color='red' />}
          colorScheme={color}
          color='body'
        >
          Sponsor
        </Button>
      </Link>
    </NextLink>
  );
};

export default SponsorButton;
