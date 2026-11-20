// Kontaktní údaje převzaty z https://www.stavbynejepsa.cz/kontakt
export const site = {
  name: 'Stavby Nejepsa s.r.o.',
  shortName: 'Stavby Nejepsa',
  claim: 'Kompletní realizace staveb, rekonstrukce a střechy',
  phone: '+420 604 482 935',
  email: 'nejepsa@stavbynejepsa.cz',
  instagramUrl: 'https://www.instagram.com/stavby_nejepsa_sro/',
  facebookUrl: 'https://www.facebook.com/StavbyNejepsa',
  googleProfileUrl: 'https://www.google.com/maps', // TODO: odkaz na Google Business Profile
  ico: '18013392',
  dic: 'CZ18013392',
  address: {
    street: 'Ke Strouze 118',
    city: 'Vonoklasy',
    zip: '252 28',
  },
};

export interface Contact {
  name: string;
  role?: string;
  phone: string;
  email: string;
}

export const contacts: Contact[] = [
  {
    name: 'Jaroslav Nejepsa',
    role: 'Jednatel',
    phone: '+420 604 482 935',
    email: 'nejepsa@stavbynejepsa.cz',
  },
  {
    name: 'Marek Beňo',
    // TODO: doplnit pozici (na původním webu neuvedena)
    phone: '+420 605 033 627',
    email: 'marekbeno@stavbynejepsa.cz',
  },
];

export const tel = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;
