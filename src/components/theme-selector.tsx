import { CustomThemeContext } from '@/providers/customtheme-provider';
import {
  Button,
  Circle,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Heading,
  HStack,
  Icon,
  IconButton,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import {
  BsArrowBarRight,
  BsMoonStarsFill,
  BsSunFill,
  BsX,
} from 'react-icons/bs';
import { colors } from 'src/theme/presets';

const ThemeSelector = () => {
  const { setColorMode } = useColorMode();
  const { currentColor, setCurrentColor, isOpened, close } =
    useContext(CustomThemeContext);

  const color = mode(`${currentColor}.500`, `${currentColor}.300`);

  return (
    <Drawer
      isOpen={isOpened}
      placement='left'
      onClose={close}
      blockScrollOnMount={false}
    >
      <DrawerContent>
        <DrawerHeader>
          <HStack justify='space-between' w='full'>
            <Heading as='h4' fontSize='xl'>
              Theme settings
            </Heading>
            <IconButton
              aria-label='Close language settings'
              onClick={close}
              colorScheme={currentColor}
              icon={<BsX />}
              _focus={{ outline: 'none' }}
            />
          </HStack>
          <Divider mt={2} />
        </DrawerHeader>
        <DrawerBody>
          <VStack spacing={4} align='start'>
            <HStack
              spacing={2}
              align='center'
              borderBottomColor={color}
              borderBottomWidth='2px'
            >
              <Icon as={BsArrowBarRight} />
              <Text fontSize='lg'>System theme</Text>
            </HStack>
            <HStack w='full' spacing={2}>
              <Button
                w='50%'
                colorScheme='purple'
                leftIcon={<BsMoonStarsFill />}
                onClick={() => setColorMode('dark')}
                _focus={{ outline: 'none' }}
              >
                Dark
              </Button>
              <Button
                w='50%'
                colorScheme='yellow'
                leftIcon={<BsSunFill />}
                onClick={() => setColorMode('light')}
                _focus={{ outline: 'none' }}
              >
                Light
              </Button>
            </HStack>
            <HStack
              spacing={2}
              align='center'
              borderBottomColor={color}
              borderBottomWidth='2px'
            >
              <Icon as={BsArrowBarRight} />
              <Text fontSize='lg'>Accent colors</Text>
            </HStack>
            <SimpleGrid columns={2} spacing={4} w='full' justifyItems='start'>
              {Object.keys(colors).map((preset) => (
                <Button
                  key={preset}
                  w='full'
                  display='flex'
                  justifyContent='start'
                  size='md'
                  variant='unstyled'
                  leftIcon={
                    <Circle
                      size='30px'
                      bg={mode(`${preset}.500`, `${preset}.300`)}
                    />
                  }
                  onClick={() => setCurrentColor(preset)}
                  _hover={{
                    color: mode(`${preset}.500`, `${preset}.300`),
                  }}
                  _focus={{ outline: 'none' }}
                >
                  {preset.toUpperCase()}
                </Button>
              ))}
            </SimpleGrid>
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <HStack spacing={2} w='full' justify='end'>
            <Button colorScheme={currentColor} onClick={close}>
              Close
            </Button>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ThemeSelector;
