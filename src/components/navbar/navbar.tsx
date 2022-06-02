import AuthButton from '@/components/auth/auth-button';
import ContributeButton from '@/components/buttons/contribute-button';
import LanguagesButton from '@/components/buttons/languages-button';
import ThemeButton from '@/components/buttons/theme-button';
import Logo from '@/components/navbar/logo';
import MobileNav from '@/components/navbar/mobilenav';
import { FEATURES } from '@/data/features';
import { NAVITEMS } from '@/data/navitems';
import { CustomThemeContext } from '@/providers/customtheme';
import { Feature } from '@/types/feature';
import { NavItem } from '@/types/navitem';
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { BsGithub } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { GITHUB_PROFILE } from 'src/constants';

const Navbar = () => {
  const { currentColor } = useContext(CustomThemeContext);
  const hoverLinkColor = mode(`${currentColor}.500`, `${currentColor}.300`);

  const NavItem = ({ title, href, isExternal, ...props }: Partial<NavItem>) => {
    const router = useRouter();
    const isActive = router.pathname === href;
    const activeColor = mode(`${currentColor}.500`, `${currentColor}.300`);

    return (
      <NextLink href={href} passHref>
        <Link
          textDecoration='none'
          _hover={
            isActive
              ? { textDecoration: 'none' }
              : { color: activeColor, textDecoration: 'none' }
          }
          color={isActive ? activeColor : 'titleColor'}
          isExternal={isExternal}
          {...props}
        >
          {title}
        </Link>
      </NextLink>
    );
  };

  const Feature = ({ icon, title, description, href, isExternal }: Feature) => {
    return (
      <NextLink href={href} passHref>
        <Link
          m={-4}
          p={4}
          display='flex'
          alignItems='start'
          _hover={{ bg: hoverLinkColor }}
          isExternal={isExternal}
        >
          <Icon flexShrink={0} h={6} w={6} as={icon} />
          <Box ml={4}>
            <Text fontSize='sm' fontWeight='700' color='titleColor'>
              {title}
            </Text>
            <Text mt={1} fontSize='sm' color='descriptionColor'>
              {description}
            </Text>
          </Box>
        </Link>
      </NextLink>
    );
  };

  const Features = (
    <SimpleGrid
      columns={5}
      pos='relative'
      gap={{ base: 6, sm: 8 }}
      py={10}
    >
      {FEATURES.map((feature) => (
        <Feature key={feature.title} {...feature} />
      ))}
    </SimpleGrid>
  );

  return (
    <Flex as='nav' w='full' alignItems='center' justifyContent='space-between'>
      <Logo displaySiteName={true} />
      <Spacer />
      <Box display={{ base: 'none', lg: 'inline-flex' }}>
        <HStack spacing={4} ml={4}>
          {NAVITEMS.map(({ title, href, isExternal }) => (
            <NavItem
              key={title}
              title={title}
              href={href}
              isExternal={isExternal}
            />
          ))}
          <Box role='group'>
            <Button
              alignItems='center'
              variant='unstyled'
              fontSize='md'
              color='titleColor'
              fontWeight='normal'
              _focus={{ boxShadow: 'none' }}
              rightIcon={<IoIosArrowDown />}
            >
              Features
            </Button>
            <Box
              pos='absolute'
              left={0}
              w='full'
              display='none'
              _groupHover={{ display: 'block' }}
            >
              {Features}
            </Box>
          </Box>
        </HStack>
      </Box>
      <Spacer />
      <HStack spacing={2}>
        <NextLink href={GITHUB_PROFILE} passHref>
          <Link isExternal>
            <IconButton
              icon={<BsGithub />}
              aria-label='Go to github profile page'
              variant='ghost'
              _focus={{ outline: 'none' }}
              colorScheme={currentColor}
            />
          </Link>
        </NextLink>
        <ThemeButton />
        <LanguagesButton />
        <AuthButton />
        <ContributeButton />
        <MobileNav />
      </HStack>
    </Flex>
  );
};

export default Navbar;
