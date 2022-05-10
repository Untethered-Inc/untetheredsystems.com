import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { colors } from 'src/theme/presets';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#F8F4F9', '#16161D')(props),
      transition: 'background .4s ease-in-out',
    },
    html: {
      minH: '100%',
    },
  }),
};

const semanticTokens = {
  colors: {
    error: 'red.500',
    body: {
      default: '#F8F4F9',
      _dark: '#16161D',
    },
    navbarBackgroundColor: {
      default: 'gray.900',
      _dark: 'gray.50',
    },
    titleColor: {
      default: 'gray.900',
      _dark: 'gray.50',
    },
    descriptionColor: {
      default: 'gray.700',
      _dark: 'gray.400',
    },
  },
};

const fonts = {
  heading: 'Julius Sans One, sans-serif',
  body: 'Fira Sans, sans-serif',
};

const components = {
  Button: {
    variants: {
      pill: (props) => ({
        ...base.components.Button.variants.outline(props),
        rounded: 'full',
        color: 'gray.500',
      }),
    },
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  semanticTokens,
  colors,
  fonts,
  components,
});
export default theme;
