import { EN } from '@/locales/en/EN';
import { FR } from '@/locales/fr/FR';
import { Language, Regions } from '@/types/language';

export const LANGUAGES: Language[] = [
  {
    code: 'en',
    translationKey: 'en',
    flagCode: 'gb',
    translationFile: EN,
    region: Regions.EU,
  },
  {
    code: 'fr',
    translationKey: 'fr',
    flagCode: 'fr',
    translationFile: FR,
    region: Regions.EU,
  },
  {
    code: 'de',
    translationKey: 'de',
    flagCode: 'de',
    translationFile: FR,
    region: Regions.EU,
  },
  {
    code: 'it',
    translationKey: 'it',
    flagCode: 'it',
    translationFile: FR,
    region: Regions.EU,
  },
  {
    code: 'es',
    translationKey: 'es',
    flagCode: 'es',
    translationFile: FR,
    region: Regions.EU,
  },
  {
    code: 'bg',
    translationKey: 'bg',
    flagCode: 'bg',
    translationFile: FR,
    region: Regions.EU,
  },
  {
    code: 'tr',
    translationKey: 'tr',
    flagCode: 'tr',
    translationFile: FR,
    region: Regions.EU,
  },
  {
    code: 'fi',
    translationKey: 'fi',
    flagCode: 'fi',
    translationFile: FR,
    region: Regions.EU,
  },
  {
    code: 'no',
    translationKey: 'no',
    flagCode: 'no',
    translationFile: FR,
    region: Regions.EU,
  },
  {
    code: 'ru',
    translationKey: 'ru',
    flagCode: 'ru',
    translationFile: FR,
    region: Regions.AS,
  },
];
