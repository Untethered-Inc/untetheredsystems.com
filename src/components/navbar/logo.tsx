import { Heading, HStack, Image, Skeleton } from '@chakra-ui/react';
import { SITENAME } from 'src/constants';

type LogoProps = {
  displaySiteName: boolean;
};

const Logo = ({ displaySiteName }: LogoProps) => {
  return (
    <HStack spacing={2} align='center'>
      <Image
        fallback={<Skeleton />}
        alt='Untethered Systems Logo'
        src='/assets/images/untetheredsystems-logo-without-back.png'
        w={10}
        h={10}
      />
      <Heading
        as='h1'
        fontSize={{ base: 'xl', lg: '2xl' }}
        display={displaySiteName ? 'flex' : 'none'}
      >
        {SITENAME}
      </Heading>
    </HStack>
  );
};

export default Logo;
