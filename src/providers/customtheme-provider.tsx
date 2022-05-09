import { createContext, PropsWithChildren, useState } from 'react';
import { presets } from 'src/theme/presets';

type CustomThemeType = {
  isOpened: boolean;
  currentColor: string;
  setCurrentColor: (color: string) => void;
  open: () => void;
  close: () => void;
};

export const CustomThemeContext = createContext<CustomThemeType>({
  isOpened: false,
  currentColor: 'cyan',
  setCurrentColor: () => {},
  open: () => {},
  close: () => {},
});

const CustomThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState<string>('cyan');

  const open = () => {
    setIsOpened(true);
  };

  const close = () => {
    setIsOpened(false);
  };

  return (
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
  );
};

export default CustomThemeProvider;