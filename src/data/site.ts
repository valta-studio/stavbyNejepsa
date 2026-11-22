// Kontaktní údaje převzaty z https://www.stavbynejepsa.cz/kontakt
export const site = {
  name: 'Stavby Nejepsa s.r.o.',
  shortName: 'Stavby Nejepsa',
  claim: 'Kompletní realizace staveb, rekonstrukce a střechy',
  phone: '+420 604 482 935',
  email: 'nejepsa@stavbynejepsa.cz',
  instagramUrl: 'https://www.instagram.com/stavby_nejepsa_sro/',
  facebookUrl: 'https://www.facebook.com/StavbyNejepsa',
  // Google vyhledávání firmy s otevřeným panelem recenzí (#sv). Osobní/sledovací
  // parametry (sxsrf, ved, biw…) odstraněny. Až bude Place ID, nahradit trvalým
  // odkazem https://search.google.com/local/reviews?placeid=…
  googleProfileUrl:
    'https://www.google.com/search?q=Stavby+Nejepsa+s.r.o&si=AE1YtOqiKPb2pdLXAi8quZ9vbH4aVq_aX8-3H9iFBLpRNK95c_dhLsOMWta8x6RBoz-_fXunRYQyExDth7FxfIFqsoPPnB_3GKCiMWCzOmgfK2fdLHyr6tc%3D&uds=AE2AFgabgnR72XAObCw-mUrB6FwyJPhBwImk25crlR8PJ-H9LYaBf4eZLw9iQF7TrhRhlQOKMy_bFd5_vsZutG-4xpmFHfMqKgWH0jPKnUwDio0K1DeTpFS4VCmGeHAaNx7_vPmuyXlv#sv=CAESzQEKuQEStgEKd0FERGJXZWFyVUlkR0VqcW54cjRvSlJnZjVPOVhQWnZwY1B4ZDEwRlZyX3BSb3pmeFJDeEdJTnh5WnFOT2tvb2ttOUdYYkU2WlFieHlMUktiT2pOZWtOdDBSaG5acVdNd1lOM3ZkUWJJc1dqZ0I1TVRTSFVFRnNNEhdERkFEYV9tSkU5Sy13UEFQOFplLXFRNBoiQUhOMEU3RzFzUnZmRW5XdmRIQlZWdTNSSmxYdlI4c29yZxIEODA1MRoBMyoAMAA4AUAAGAAg1LPQvQhKAhAB',
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
