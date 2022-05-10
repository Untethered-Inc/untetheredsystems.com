import { NavItem } from '@/types/navitem';
import { FaHome } from 'react-icons/fa';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';

export const NAVITEMS: NavItem[] = [
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
