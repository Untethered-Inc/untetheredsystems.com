import CountryFlag from '@/components/countryflag';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../../data/languages';

const LanguagesButton = () => {
  const { i18n, t } = useTranslation();

  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme='brand'
        rightIcon={
          <CountryFlag
            lang={LANGUAGES.find(({ code }) => code === i18n.language).flagCode}
          />
        }
      >
        {t(`languages.${i18n.language}`)}
      </MenuButton>
      <MenuList>
        {LANGUAGES.map(({ code, translationKey, flagCode }) => (
          <MenuItem
            key={code}
            icon={<CountryFlag lang={flagCode} />}
            isDisabled={i18n.language === code ? true : false}
            onClick={() => i18n.changeLanguage(code)}
          >
            {t(`languages.${translationKey}`)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguagesButton;
