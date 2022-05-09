import CountryFlag from '@/components/countryflag';
import { LANGUAGES } from '@/data/languages';
import { CustomThemeContext } from '@/providers/customtheme-provider';
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Tooltip,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { BsGlobe, BsX } from 'react-icons/bs';

const LanguagesButton = () => {
  const { i18n, t } = useTranslation();
  const { currentColor } = useContext(CustomThemeContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hoverColor = useColorModeValue(
    `${currentColor}.500`,
    `${currentColor}.300`
  );

  const isMobile = useBreakpointValue({ base: true, md: false });

  const REGIONS = Array.from(
    new Set(LANGUAGES.flatMap(({ region }) => region))
  );

  return (
    <>
      <Tooltip label='Language settings' hasArrow>
        <Box py={2}>
          <Icon
            display='block'
            transition='color 0.2s'
            as={BsGlobe}
            onClick={onOpen}
            _hover={{
              color: hoverColor,
              cursor: 'pointer',
            }}
          />
        </Box>
      </Tooltip>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size={isMobile ? 'sm' : 'xl'}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack justify='space-between' w='full'>
              <Heading as='h4' fontSize='xl'>
                Language settings
              </Heading>
              <IconButton
                aria-label='Close language settings'
                onClick={onClose}
                colorScheme={currentColor}
                icon={<BsX />}
                _focus={{ outline: 'none' }}
              />
            </HStack>
            <Divider mt={3} />
          </ModalHeader>
          <ModalBody>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={2}>
              {REGIONS.map((region) => (
                <VStack key={region} spacing={0} align='start'>
                  <Text>{region}</Text>
                  {LANGUAGES.filter((lang) => lang.region === region).map(
                    ({ code, flagCode, translationKey }) => (
                      <Button
                        key={code}
                        variant='unstyled'
                        leftIcon={<CountryFlag lang={flagCode} />}
                        isDisabled={i18n.language === code ? true : false}
                        onClick={() => i18n.changeLanguage(code)}
                        _hover={{
                          color: hoverColor,
                        }}
                        transition='color 0.2s'
                      >
                        {t(`languages.${translationKey}`)}
                      </Button>
                    )
                  )}
                </VStack>
              ))}
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LanguagesButton;
