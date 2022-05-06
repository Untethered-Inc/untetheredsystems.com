import PageWrapper from '@/wrappers/page-wrapper';
import { Flex, Text } from '@chakra-ui/react';

const IndexPage = () => {
  return (
    <PageWrapper
      title='Home'
      description='Discover a starter kit which includes Next.js, Chakra-UI, Framer-Motion in Typescript. You have few components, Internationalization, SEO and more in this template ! Enjoy coding.'
    >
      <Flex align='center' justify='center' h='100vh' w='full'>
        <Text>Welcome to Untethered Systems LLC.</Text>
      </Flex>
    </PageWrapper>
  );
};

export default IndexPage;
