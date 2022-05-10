import { LinkProps } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

export type NavItem = LinkProps & {
  title: string;
  href?: string;
  icon?: IconType;
  isExternal: boolean;
};
