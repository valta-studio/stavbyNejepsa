// Skutečné certifikáty a osvědčení firmy — staženo z původního webu (sekce „Naše certifikáty").
import type { ImageMetadata } from 'astro';

import cemix from '../assets/certificates/certifikat-cemix-etics.jpg';
import ruukki from '../assets/certificates/certifikat-ruukki-strechy.jpg';
import rigipsSuchaVystavba from '../assets/certificates/certifikat-rigips-sucha-vystavba.jpg';
import dek from '../assets/certificates/certifikat-dek-mapeplan.jpg';
import stachema from '../assets/certificates/certifikat-stachema-protipozarni-natery.jpg';
import fatra1 from '../assets/certificates/certifikat-fatra-fatrafol-1.jpg';
import fatra2 from '../assets/certificates/certifikat-fatra-fatrafol-2.jpg';
import rigipsDrevostavby from '../assets/certificates/certifikat-rigips-drevostavby.jpg';
import porotherm from '../assets/certificates/certifikat-porotherm-zdivo.jpg';

export interface Certificate {
  image: ImageMetadata;
  brand: string;
  title: string;
  year: string;
  alt: string;
}

export const certificates: Certificate[] = [
  {
    image: cemix,
    brand: 'Cemix',
    title: 'Zateplovací systémy ETICS',
    year: '2024',
    alt: 'Osvědčení LB Cemix o zaškolení k provádění zateplovacích systémů ETICS',
  },
  {
    image: ruukki,
    brand: 'Ruukki',
    title: 'Montáž střešních a okapových systémů',
    year: '2024',
    alt: 'Osvědčení Ruukki o proškolení v oblasti montáže střešních a okapových systémů a střešních bezpečnostních prvků',
  },
  {
    image: rigipsSuchaVystavba,
    brand: 'Rigips',
    title: 'Montáž konstrukcí suché výstavby',
    year: '2022',
    alt: 'Certifikát Rigips na montáž konstrukcí suché výstavby včetně protipožárních a bezpečnostních konstrukcí a podhledů Rigips a OWA',
  },
  {
    image: dek,
    brand: 'DEK',
    title: 'Hydroizolační systémy TPO fólie Mapeplan T',
    year: '2022',
    alt: 'Osvědčení Stavebniny DEK o absolvování školení Hydroizolační systémy TPO fólie Mapeplan T',
  },
  {
    image: stachema,
    brand: 'Stachema',
    title: 'Aplikace protipožárních nátěrů',
    year: '2022',
    alt: 'Osvědčení Stachema CZ o oprávnění k aplikaci protipožárních nátěrů Plamostop a Flamgard',
  },
  {
    image: fatra1,
    brand: 'Fatra',
    title: 'Montáž hydroizolačních fólií FATRAFOL',
    year: '2022',
    alt: 'Osvědčení Fatra o odborné způsobilosti k montáži hydroizolačních fóliových systémů FATRAFOL',
  },
  {
    image: fatra2,
    brand: 'Fatra',
    title: 'Montáž hydroizolačních fólií FATRAFOL',
    year: '2022',
    alt: 'Osvědčení Fatra o odborné způsobilosti k montáži hydroizolačních fóliových systémů FATRAFOL',
  },
  {
    image: rigipsDrevostavby,
    brand: 'Rigips',
    title: 'Konstrukce RigiStabil, Rigidur a SDK v dřevostavbách',
    year: '2021',
    alt: 'Certifikát Rigips na montáž konstrukcí z desek RigiStabil, Rigidur a SDK v dřevostavbách',
  },
  {
    image: porotherm,
    brand: 'Porotherm',
    title: 'Jednovrstvé zdivo a jeho správné provedení',
    year: '2020',
    alt: 'Certifikát Porotherm (Wienerberger) o absolvování školení Jednovrstvé zdivo a jeho správné provedení včetně finální povrchové úpravy',
  },
];
