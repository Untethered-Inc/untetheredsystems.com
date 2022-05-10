import { createContext, PropsWithChildren, useState } from 'react';

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

const CustomThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState<string>('default');

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
