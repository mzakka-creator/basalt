import type { StaticImageData } from 'next/image';
import logo01 from '@/assets/strategic partners/01.svg';
import logo02 from '@/assets/strategic partners/02.svg';
import logo03 from '@/assets/strategic partners/03.svg';
import logo04 from '@/assets/strategic partners/04.svg';
import logo05 from '@/assets/strategic partners/05.svg';

export type HomePartner = {
  id: string;
  name: string;
  logo: StaticImageData;
  url: string;
};

export const homePartners: HomePartner[] = [
  { id: 'double-act', name: 'Double Act', logo: logo01, url: 'https://doubleact.com.sa' },
  { id: 'peace-city', name: 'Peace City', logo: logo02, url: 'https://peacecity.world' },
  { id: 'doka-me', name: 'DOKA ME', logo: logo03, url: 'https://doka-me.com' },
  { id: 'basalt-tech', name: 'Basalt Tech', logo: logo04, url: 'https://basalt.tech' },
  { id: 'partner-05', name: 'Giraffe', logo: logo05, url: '' },
];
