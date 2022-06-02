import theme from '@/theme/index';
import {
  ChakraProvider,
  extendTheme,
  useDisclosure,
  withDefaultColorScheme,
} from '@chakra-ui/react';
import {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  DEFAULT_ACCENT_COLOR,
  LOCALSTORAGE_ACCENT_COLOR_KEY,
} from 'src/constants';

type CustomThemeType = {
  isOpened: boolean;
  currentColor: string;
  setCurrentColor: (color: string) => void;
  open: () => void;
  close: () => void;
};

export const CustomThemeContext = createContext<CustomThemeType>({
  isOpened: false,
  currentColor: '',
  setCurrentColor: () => {},
  open: () => {},
  close: () => {},
});

const localStorage: Storage =
  typeof window === 'undefined' ? undefined : window.localStorage;

const CustomThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const { isOpen: isOpened, onOpen: open, onClose: close } = useDisclosure();
  const [currentColor, _setCurrentColor] =
    useState<string>(DEFAULT_ACCENT_COLOR);

  const coloredTheme = useMemo(
    () =>
      extendTheme(theme, withDefaultColorScheme({ colorScheme: currentColor })),
    [currentColor]
  );

  const setCurrentColor = (color: string) => {
    _setCurrentColor(color);
    localStorage?.setItem(LOCALSTORAGE_ACCENT_COLOR_KEY, color);
  };

  useEffect(() => {
    const storedAccentColor = localStorage?.getItem(
      LOCALSTORAGE_ACCENT_COLOR_KEY
    );
    if (storedAccentColor != null) {
      //_setCurrentColor(storedAccentColor);
      document.body.style.setProperty('--theme-color', storedAccentColor);
    }
  }, []);

  return (
    <ChakraProvider theme={coloredTheme}>
      <CustomThemeContext.Provider
        value={{
          isOpened,
          open,
          close,
          currentColor,
          setCurrentColor,
        }}
      >
        {children}
      </CustomThemeContext.Provider>
    </ChakraProvider>
  );
};

export default CustomThemeProvider;
