import { CustomThemeContext } from '@/providers/customtheme';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { BiEnvelope, BiLockAlt, BiUserCircle } from 'react-icons/bi';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isAboveThirteen, setAboveThirteen] = useState<boolean>(false);
  const [isSubscribedToNewsletter, subscribeToNewsletter] =
    useState<boolean>(false);
  const { currentColor } = useContext(CustomThemeContext);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  };

  const focusColor = useColorModeValue(
    `${currentColor}.500`,
    `${currentColor}.300`
  );

  return (
    <Box w={{ base: '100%', md: '50%' }} p={4} shadow='lg' rounded='xl'>
      <form noValidate={true} onSubmit={handleSignUp}>
        <VStack w='full' spacing={3}>
          <HStack w='full' spacing={4}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={BiUserCircle} />
                </InputLeftElement>
                <Input
                  isRequired
                  focusBorderColor={focusColor}
                  type='text'
                  placeholder='John'
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={BiUserCircle} />
                </InputLeftElement>
                <Input
                  isRequired
                  focusBorderColor={focusColor}
                  type='text'
                  placeholder='Doe'
                  onChange={(e) => setLastName(e.target.value)}
                />
              </InputGroup>
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon as={BiEnvelope} />
              </InputLeftElement>
              <Input
                isRequired
                focusBorderColor={focusColor}
                type='email'
                placeholder='me@untethered.com'
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <HStack w='full' spacing={4}>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={BiLockAlt} />
                </InputLeftElement>
                <Input
                  isRequired
                  focusBorderColor={focusColor}
                  type={showPassword ? 'text' : 'password'}
                  placeholder='*******'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement>
                  <IconButton
                    aria-label='Toggle password visibility'
                    _focus={{ outline: 'none' }}
                    variant='ghost'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                  </IconButton>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Password Confirmation</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <Icon as={BiLockAlt} />
                </InputLeftElement>
                <Input
                  isRequired
                  focusBorderColor={focusColor}
                  type={showPasswordConfirmation ? 'type' : 'password'}
                  placeholder='*******'
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <InputRightElement h={'full'}>
                  <IconButton
                    aria-label='Toggle password confirmation visibility'
                    _focus={{ outline: 'none' }}
                    variant='ghost'
                    onClick={() =>
                      setShowPasswordConfirmation(!showPasswordConfirmation)
                    }
                  >
                    {showPasswordConfirmation ? <BsEyeSlash /> : <BsEye />}
                  </IconButton>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </HStack>
          <FormControl>
            <Checkbox
              isRequired
              onChange={(e) => setAboveThirteen(!!e.target.checked)}
            >
              I consent with the <b>Terms of Service</b> and I confirm I&apos;m
              over 13 years of age.
            </Checkbox>
          </FormControl>
          <FormControl>
            <Checkbox
              onChange={(e) => subscribeToNewsletter(!!e.target.checked)}
            >
              I want to participate in the email campaign and get notified about
              updates, discounts and more. <em>(optional)</em>
            </Checkbox>
          </FormControl>
        </VStack>
        <Button
          isDisabled={!isAboveThirteen}
          isLoading={isLoading}
          loadingText='Loading'
          variant='solid'
          mt={12}
          type='submit'
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignUpForm;
