import { ResourceLanguage } from 'i18next';

export enum Regions {
  EU='Europe',
  NA='North America',
  AS='Asia',
  OC='Oceania',
  AF='Africa',
  SA='South America',
  AN='Antarctica',
  UNKNOWN='Unknown'
}

export type Language = {
  code: string;
  translationKey: string;
  flagCode: string;
  translationFile: ResourceLanguage;
  region: string;
};
