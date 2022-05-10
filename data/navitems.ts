import { NavItem } from '@/types/navlink';
import { FaHome } from 'react-icons/fa';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';

export const NAVLINKS: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: FaHome,
    isExternal: false,
  },
  {
    title: 'Services',
    href: '/services',
    icon: MdOutlineMiscellaneousServices,
    isExternal: false,
  },
];
