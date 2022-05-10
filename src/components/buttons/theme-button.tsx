import { CustomThemeContext } from '@/providers/customtheme-provider';
import { Box, Icon, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { useContext } from 'react';
import { BsPalette } from 'react-icons/bs';

const ThemeButton = () => {
  const {
    currentColor,
    isOpened,
    open: openThemeSelector,
    close: closeThemeSelector,
  } = useContext(CustomThemeContext);
  const hoverColor = useColorModeValue(
    `${currentColor}.500`,
    `${currentColor}.300`
  );

  return (
    <>
      <Tooltip label='Theme settings' hasArrow>
        <Box py={2} px={0.5}>
          <Icon
            display='block'
            transition='color 0.2s'
            as={BsPalette}
            onClick={isOpened ? closeThemeSelector : openThemeSelector}
            _hover={{
              color: hoverColor,
              cursor: 'pointer',
            }}
          />
        </Box>
      </Tooltip>
    </>
  );
};

export default ThemeButton;
