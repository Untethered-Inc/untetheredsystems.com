import LoginForm from '@/components/auth/login-form';
import SignUpForm from '@/components/auth/sign-up-form';
import { useAuth } from '@/providers/auth';
import PageWrapper from '@/wrappers/page-wrapper';
import { Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';

const AuthPage: NextPage = () => {
  const { session } = useAuth();

  return (
    <PageWrapper title='Authentication' description='Authentication page'>
      <VStack
        align='center'
        justify='center'
        h='100vh'
        w='full'
        px={{ md: 20 }}
        spacing={8}
      >
        <Flex direction='column'>
          <Heading>Authentication</Heading>
          <Text>Feel free to sign up to our platform.</Text>
        </Flex>
        <HStack spacing={8} w='full' align='start'>
          <LoginForm />
          <SignUpForm />
        </HStack>
      </VStack>
    </PageWrapper>
  );
};

export default AuthPage;
