import Logo from '@/components/navbar/logo';
import { FEATURES } from '@/data/features';
import { NAVITEMS } from '@/data/navitems';
import { CustomThemeContext } from '@/providers/customtheme';
import { NavItem } from '@/types/navitem';
import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  HStack,
  Icon,
  IconButton,
  Link,
  useColorModeValue as mode,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const MobileNav = () => {
  const {
    isOpen: mobileNavIsOpened,
    onOpen: openMobileNav,
    onClose: closeMobileNav,
  } = useDisclosure();
  const { isOpen: featuresAreOpened, onToggle: toggleFeatures } =
    useDisclosure();
  const { currentColor } = useContext(CustomThemeContext);

  const MobileNavItem = ({
    title,
    href,
    icon,
    isExternal,
    ...props
  }: NavItem) => {
    const router = useRouter();
    const isActive = router.pathname === href;
    const activeColor = mode(`${currentColor}.500`, `${currentColor}.300`);

    return (
      <Box w='full'>
        <NextLink href={href} passHref>
          <Link
            textDecoration='none'
            _focus={{ outline: 'none' }}
            _hover={
              isActive
                ? { textDecoration: 'none' }
                : { color: activeColor, textDecoration: 'none' }
            }
            color={isActive ? activeColor : 'titleColor'}
            isExternal={isExternal}
            {...props}
          >
            <Icon as={icon} mr={2} />
            {title}
          </Link>
        </NextLink>
      </Box>
    );
  };

  return (
    <>
      <Box display={{ base: 'inline-flex', md: 'none' }} py={2}>
        <IconButton
          aria-label='Open mobile navigation'
          transition='color 0.2s'
          icon={<BsList />}
          onClick={openMobileNav}
          color='body'
          colorScheme={currentColor}
          _focus={{ outline: 'none' }}
        />
      </Box>
      <Drawer
        placement='top'
        isOpen={mobileNavIsOpened}
        onClose={closeMobileNav}
        blockScrollOnMount={false}
      >
        <DrawerContent>
          <DrawerHeader>
            <HStack spacing={2} justify='space-between' w='full'>
              <Logo displaySiteName />
              <IconButton
                aria-label='Close mobile navigation'
                onClick={closeMobileNav}
                colorScheme={currentColor}
                icon={<BsX />}
                _focus={{ outline: 'none' }}
              />
            </HStack>
            <Divider mt={3} />
          </DrawerHeader>
          <DrawerBody h='full'>
            <VStack spacing={3} align='start'>
              {NAVITEMS.map((link) => (
                <MobileNavItem
                  key={link.title}
                  {...link}
                  onClick={closeMobileNav}
                />
              ))}
              <Button
                variant='unstyled'
                _focus={{ outline: 'none' }}
                fontWeight='normal'
                height={6}
                lineHeight={1}
                onClick={toggleFeatures}
                leftIcon={<HiSparkles />}
                rightIcon={
                  featuresAreOpened ? <IoIosArrowUp /> : <IoIosArrowDown />
                }
              >
                Features
              </Button>
              <Collapse in={featuresAreOpened} animateOpacity>
                <VStack spacing={3}>
                  {FEATURES.map((feature) => (
                    <MobileNavItem key={feature.title} {...feature} pl={4} />
                  ))}
                </VStack>
              </Collapse>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <HStack spacing={2} w='full' justify='end'>
              <Button colorScheme={currentColor} onClick={closeMobileNav}>
                Close
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;
