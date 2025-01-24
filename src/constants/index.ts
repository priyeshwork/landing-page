
  export const SECTION_IDS = {
    hero: 'hero',
    about: 'about',
    contact: 'contact'
  } as const;

  export const APP_LINKS = [
    { id: SECTION_IDS.hero, label: 'Home' },
    { id: SECTION_IDS.about, label: 'About' },
    { id: SECTION_IDS.contact, label: 'Contact' }
  ];