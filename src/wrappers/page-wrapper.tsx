import { Container, ContainerProps } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { PropsWithChildren } from 'react';

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: -40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: -0,
    y: 40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
};

const MotionContainer = motion<ContainerProps>(Container);

const PageWrapper = ({
  title,
  description,
  children,
}: PropsWithChildren<{ title: string; description: string }>) => {
  return (
    <>
      <NextSeo
        title={title + ' - Untethered Systems'}
        description={description}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@untetheredsystems',
        }}
        openGraph={{
          url: 'https://www.untetheredsystems.com',
          title: title + ' - Untethered Systems',
          description: description,
          locale: 'en_US',
          images: [
            {
              url: '',
              width: 1200,
              height: 630,
              alt: 'Untethered Systems LLC',
              type: 'image/png',
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'https://www.untetheredsystems.com/favicon.ico',
          },
        ]}
      />
      <MotionContainer
        display='flex'
        maxW='full'
        minH={{ base: 'auto', md: '100vh' }}
        px={{ base: 4, lg: 8 }}
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        centerContent
      >
        {children}
      </MotionContainer>
    </>
  );
};

export default PageWrapper;
