export const site = {
  name: 'Stavby Nejepša s.r.o.',
  shortName: 'Stavby Nejepša',
  claim: 'Kompletní realizace staveb, rekonstrukce a střechy',
  phone: '+420 777 000 000',
  email: 'info@stavbynejepsa.cz',
  instagramUrl: 'https://www.instagram.com/stavbynejepsa/',
  googleProfileUrl: 'https://www.google.com/maps', // TODO: odkaz na Google Business Profile
  ico: '00000000', // TODO: doplnit IČO
};

export interface Branch {
  name: string;
  street: string;
  city: string;
  zip: string;
  phone: string;
  email: string;
  hours: string;
}

export const branches: Branch[] = [
  {
    name: 'Pobočka Praha',
    street: 'Ulice 123', // TODO: doplnit adresu
    city: 'Praha',
    zip: '100 00',
    phone: '+420 777 000 000',
    email: 'praha@stavbynejepsa.cz',
    hours: 'Po–Pá 8:00–16:30',
  },
  {
    name: 'Nová pobočka', // TODO: doplnit podklady k nové pobočce
    street: 'Ulice 456',
    city: 'Město',
    zip: '200 00',
    phone: '+420 777 000 001',
    email: 'info@stavbynejepsa.cz',
    hours: 'Po–Pá 8:00–16:30',
  },
];
