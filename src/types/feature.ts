import { IconType } from 'react-icons/lib';

export type Feature = {
  title: string;
  description: string;
  icon: IconType;
  href: string;
  isExternal: boolean;
};
