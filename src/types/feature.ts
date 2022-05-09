import { IconType } from 'react-icons';

export type Feature = {
  title: string;
  description: string;
  icon: IconType;
  href: string;
  isExternal: boolean;
}