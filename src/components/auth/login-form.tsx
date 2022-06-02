import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsEye, BsEyeSlash, BsLock } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
  };

  return (
    <Box w={{ base: '100%', md: '50%' }} p={4} shadow='lg' rounded='xl'>
      <form onSubmit={handleLogin}>
        <VStack w='full' spacing={2}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon as={FiMail} />
              </InputLeftElement>
              <Input
                type='email'
                placeholder='me@untethered.com'
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon as={BsLock} />
              </InputLeftElement>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder='*******'
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement>
                <IconButton
                  aria-label='Toggle password visibility'
                  _focus={{ outline: 'none' }}
                  variant={'solid'}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </IconButton>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </VStack>
        <Button
          isLoading={isLoading}
          loadingText='Loading'
          variant='solid'
          mt={12}
          type='submit'
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
