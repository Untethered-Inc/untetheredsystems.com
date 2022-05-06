import { ResourceLanguage } from 'i18next';

export type Language = {
  code: string;
  translationKey: string;
  flagCode: string;
  translationFile: ResourceLanguage;
};
