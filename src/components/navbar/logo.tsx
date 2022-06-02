import { chakra, Heading, Link } from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { SITENAME } from 'src/constants';

type LogoProps = {
  displaySiteName: boolean;
};

const LogoImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['width', 'height', 'src', 'alt', 'quality', 'layout'].includes(prop),
});

const Logo = ({ displaySiteName }: LogoProps) => {
  return (
    <NextLink href='/' passHref>
      <Link
        display='flex'
        alignItems='center'
        _hover={{ textDecoration: 'none' }}
        _focus={{ outline: 'none' }}
      >
        <LogoImage
          display='inline'
          quality={50}
          alt='Untethered Systems Logo'
          src='/assets/images/untetheredsystems-logo-without-back.png'
          width={50}
          height={50}
          objectFit='cover'
        />
        <Heading
          as='h1'
          fontSize={{ base: 'xl', lg: '2xl' }}
          display={displaySiteName ? 'flex' : 'none'}
        >
          {SITENAME}
        </Heading>
      </Link>
    </NextLink>
  );
};

export default Logo;
